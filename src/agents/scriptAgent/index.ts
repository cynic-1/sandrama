import { Socket } from "socket.io";
import { tool, jsonSchema } from "ai";
import { z } from "zod";
import u from "@/utils";
import Memory from "@/utils/agent/memory";
import useTools from "@/agents/scriptAgent/tools";
import ResTool from "@/socket/resTool";
import * as fs from "fs";
import path from "path";

export interface AgentContext {
  socket: Socket;
  isolationKey: string;
  text: string;
  userMessageTime?: number;
  abortSignal?: AbortSignal;
  resTool: ResTool;
  msg: ReturnType<ResTool["newMessage"]>;
  thinkConfig: {
    think: boolean;
    thinlLevel: 0 | 1 | 2 | 3;
  };
}

function buildMemPrompt(mem: Awaited<ReturnType<Memory["get"]>>): string {
  let memoryContext = "";
  if (mem.rag.length) {
    memoryContext += `[Related memories]
${mem.rag.map((r) => r.content).join("\n")}`;
  }
  if (mem.summaries.length) {
    if (memoryContext) memoryContext += "\n\n";
    memoryContext += `[Historical Summary]
${mem.summaries.map((s, i) => `${i + 1}. ${s.content}`).join("\n")}`;
  }
  if (mem.shortTerm.length) {
    if (memoryContext) memoryContext += "\n\n";
    memoryContext += `[Recent conversations]
${mem.shortTerm.map((m) => `${m.role}: ${m.content}`).join("\n")}`;
  }
  return `## Memory
The following is your memory of the user，It can be used as a reference, but do not mention it proactively.：
${memoryContext}`;
}

export async function runDecisionAI(ctx: AgentContext) {
  const { isolationKey, text, userMessageTime, abortSignal, resTool } = ctx;
  const memory = new Memory("scriptAgent", isolationKey);
  await memory.add("user", text, { createTime: userMessageTime });

  const skill = path.join(u.getPath("skills"), "script_agent_decision.md");
  const prompt = await fs.promises.readFile(skill, "utf-8");

  const mem = buildMemPrompt(await memory.get(text));

  const projectData = await u.db("o_project").where("id", resTool.data.projectId).first();

  const novelData = await u.db("o_novel").where("projectId", resTool.data.projectId).select("chapterIndex");

  const projectInfo = [
    "## Project Information",
    `Novel Title：${projectData?.name ?? "Unknown"}`,
    `Novel type：${projectData?.type ?? "Unknown"}`,
    `Novel Synopsis：${projectData?.intro ?? "None"}`,
    `Target: Adapted Film and Television Visual Handbook|Art style：${projectData?.artStyle ?? "None"}`,
    `Target adapted video aspect ratio：${projectData?.videoRatio ?? "16:9"}`,
    `Number of chapters：${novelData.length}Chapter`,
  ].join("\n");

  const { fullStream } = await u.Ai.Text("scriptAgent:decisionAgent", ctx.thinkConfig.think, ctx.thinkConfig.thinlLevel).stream({
    messages: [
      { role: "system", content: prompt },
      { role: "assistant", content: projectInfo + "\n" + mem },
      { role: "user", content: text },
    ],
    abortSignal,
    tools: {
      ...memory.getTools(),
      ...useTools({ resTool: ctx.resTool, msg: ctx.msg }),
      ...createSubAgent(ctx),
    },
    onFinish: async (completion) => {
      await memory.add("assistant:decision", removeAllXmlTags(completion.text));
    },
  });

  let currentMsg = ctx.msg;
  await consumeFullStream(fullStream, currentMsg, () => {
    if (ctx.msg === currentMsg) return currentMsg;
    currentMsg.complete();
    currentMsg = ctx.msg;
    return currentMsg;
  });
}

function createSubAgent(parentCtx: AgentContext) {
  const { resTool, abortSignal } = parentCtx;
  const memory = new Memory("scriptAgent", parentCtx.isolationKey);

  async function runAgent({
    key,
    prompt,
    system,
    name,
    memoryKey,
    tools: extraTools,
    messages,
  }: {
    key: `${string}:${string}`;
    prompt: string;
    system: string;
    name: string;
    memoryKey: string;
    tools?: Record<string, any>;
    messages?: { role: "user" | "assistant" | "system"; content: string }[];
  }) {
    parentCtx.msg.complete();
    const subMsg = resTool.newMessage("assistant", name);

    const { fullStream } = await u.Ai.Text(key, parentCtx.thinkConfig.think, parentCtx.thinkConfig.thinlLevel).stream({
      system,
      messages: messages ?? [{ role: "user", content: prompt }],
      abortSignal,
      tools: { ...extraTools, ...useTools({ resTool, msg: subMsg }) },
    });

    const fullResponse = await consumeFullStream(fullStream, subMsg);

    if (fullResponse.trim()) {
      await memory.add(memoryKey, removeAllXmlTags(fullResponse), {
        name,
        createTime: new Date(subMsg.datetime).getTime(),
      });
    }

    parentCtx.msg = resTool.newMessage("assistant", "Video Planning");
    return fullResponse;
  }

  const promptInput = z
    .object({
      prompt: z.string().describe("Delegate to childAgentTask brief，100within characters"),
    })
    .toJSONSchema();

  const run_sub_agent_storySkeleton = tool({
    description: "RunsubAgentTo complete the story skeleton-related tasks",
    inputSchema: jsonSchema<{ prompt: string }>(promptInput),
    execute: async ({ prompt }) => {
      const skill = path.join(u.getPath("skills"), "script_execution_skeleton.md");
      const systemPrompt = await fs.promises.readFile(skill, "utf-8");

      const formatPrompt = " You must use the followingXMLFormat and write to workspace： <storySkeleton>Story Skeleton Content</storySkeleton>";

      return runAgent({
        key: "scriptAgent:storySkeletonAgent",
        prompt,
        system: systemPrompt + formatPrompt,
        name: "Screenwriter",
        memoryKey: "assistant:execution:storySkeleton",
        messages: [{ role: "user", content: prompt + formatPrompt }],
      });
    },
  });

  const run_sub_agent_adaptationStrategy = tool({
    description: "RunsubAgentto complete tasks related to the adaptation strategy",
    inputSchema: jsonSchema<{ prompt: string }>(promptInput),
    execute: async ({ prompt }) => {
      const skill = path.join(u.getPath("skills"), "script_execution_adaptation.md");
      const systemPrompt = await fs.promises.readFile(skill, "utf-8");

      const formatPrompt = " You must use the followingXMLFormat and write to workspace： <adaptationStrategy>Adaptation Strategy Content</adaptationStrategy>";

      return runAgent({
        key: "scriptAgent:adaptationStrategyAgent",
        prompt,
        system: systemPrompt + formatPrompt,
        name: "Screenwriter",
        memoryKey: "assistant:execution:adaptationStrategy",
        messages: [{ role: "user", content: prompt + formatPrompt }],
      });
    },
  });

  const run_sub_agent_script = tool({
    description: "RunsubAgentto complete script-related tasks",
    inputSchema: jsonSchema<{ prompt: string }>(promptInput),
    execute: async ({ prompt }) => {
      const skill = path.join(u.getPath("skills"), "script_execution_script.md");
      const systemPrompt = await fs.promises.readFile(skill, "utf-8");

      const scriptList = await u.db("o_script").where("projectId", resTool.data.projectId).select("id", "name");
      const scriptPrompt = ["## Available scripts(ID:Name)", scriptList.map((s: any) => `${s.id}:${(s.name || "").replace(/[,:]/g, "")}`).join(","), ""].join(
        "\n",
      );

      const novelData = await u.db("o_novel").where("projectId", resTool.data.projectId).select("chapterIndex");

      const formatPrompt = `
You must useXMLOutput the script in the specified format：
XMLNo additional tags shall be added<scriptItem name="Script Name">Script content</scriptItem><scriptItem name="Script Name">Script content</scriptItem><scriptItem name="Script Name">Script content</scriptItem>
You must also call save_script The tool saves the complete script to the workspace；Return confirmation only after the tool call succeeds。Prohibited from replying only“Written”without outputting the main text or calling tools。`;

      const savedScripts: ScriptItem[] = [];
      const saveScriptTool = tool({
        description: "Save a complete episode script to the workspace。Must be called after the complete script is generated，Confirmation text cannot be used as a substitute。",
        inputSchema: jsonSchema<{ name: string; content: string }>(
          z
            .object({
              name: z.string().min(1).describe("Script Name，For example, the title of the work EP08：Collection Title"),
              content: z.string().min(1).describe("Full script，It cannot be a confirmation statement"),
            })
            .toJSONSchema(),
        ),
        execute: async ({ name, content }) => {
          const script = { name: name.trim(), content: content.trim() };
          if (!script.name || !script.content) throw new Error("The script name and body cannot be empty");
          await persistScriptItems(resTool.data.projectId, [script]);
          savedScripts.push(script);
          return `Saved successfully：${script.name}`;
        },
      });

      const fullResponse = await runAgent({
        key: "scriptAgent:scriptAgent",
        prompt,
        system: systemPrompt + formatPrompt,
        messages: [
          { role: "assistant", content: scriptPrompt + `Number of chapters：${novelData.length}Chapter` },
          { role: "user", content: prompt + formatPrompt },
        ],
        name: "Screenwriter",
        memoryKey: "assistant:execution:script",
        tools: { save_script: saveScriptTool },
      });

      const scripts = extractScriptItems(fullResponse);
      const persistedScripts = scripts.length ? scripts : savedScripts;
      if (!persistedScripts.length) {
        throw new Error("Script generation failed：The model did not return a valid scriptItem Content，Not written to the workbench");
      }

      if (scripts.length && !savedScripts.length) {
        await persistScriptItems(resTool.data.projectId, scripts);
      }
      return `Written${persistedScripts.length}Collected scripts，Please check on the workbench。`;
    },
  });

  const run_supervision_agent = tool({
    description: "Run the supervision layersubAgentExecute independent tasks，Return the result after completion",
    inputSchema: jsonSchema<{ prompt: string }>(promptInput),
    execute: async ({ prompt }) => {
      const skill = path.join(u.getPath("skills"), "script_agent_supervision.md");
      const systemPrompt = await fs.promises.readFile(skill, "utf-8");

      return runAgent({
        key: "scriptAgent:supervisionAgent",
        prompt,
        system: systemPrompt,
        name: "Edit",
        memoryKey: "assistant:supervision",
      });
    },
  });

  return {
    run_sub_agent_storySkeleton,
    run_sub_agent_adaptationStrategy,
    run_sub_agent_script,
    run_supervision_agent,
  };
}

async function consumeFullStream(
  fullStream: AsyncIterable<any>,
  initialMsg: ReturnType<ResTool["newMessage"]>,
  syncMsg?: () => ReturnType<ResTool["newMessage"]>,
): Promise<string> {
  let msg = initialMsg;
  let text = msg.text();
  let thinking: ReturnType<typeof msg.thinking> | null = null;
  let thinkTime = 0;
  let fullResponse = "";

  try {
    for await (const chunk of fullStream) {
      if (syncMsg) {
        const newMsg = syncMsg();
        if (newMsg !== msg) {
          msg = newMsg;
          text = msg.text();
        }
      }
      if (chunk.type === "reasoning-start") {
        thinkTime = Date.now();
        thinking = msg.thinking("Thinking...");
      } else if (chunk.type === "reasoning-delta") {
        thinking?.append(chunk.text);
      } else if (chunk.type === "reasoning-end") {
        thinkTime = Date.now() - thinkTime;
        thinking?.updateTitle(`Thinking complete（${(thinkTime / 1000).toFixed(1)} second）`);
        thinking?.complete();
        thinking = null;
      } else if (chunk.type === "text-delta") {
        text.append(chunk.text);
        fullResponse += chunk.text;
      } else if (chunk.type === "error") {
        throw chunk.error;
      }
    }
    text.complete();
    msg.complete();
  } catch (err: any) {
    thinking?.complete();
    const errMsg = err?.message ?? String(err);
    text.append(errMsg);
    text.error();
    msg.error();
    throw err;
  }

  return fullResponse;
}

function removeAllXmlTags(text: string): string {
  text = text.replace(/<([a-zA-Z][\w-]*)(\s+[^>]*)?>([\s\S]*?)<\/\1>/g, "");
  text = text.replace(/<([a-zA-Z][\w-]*)(\s+[^>]*)?\/>/g, "");
  text = text.replace(/<\/?[a-zA-Z][\w-]*(\s+[^>]*)?>/g, "");
  return text.trim();
}

interface ScriptItem {
  name: string;
  content: string;
}

function extractScriptItems(text: string): ScriptItem[] {
  const items: ScriptItem[] = [];
  const pattern = /<scriptItem\b[^>]*\bname\s*=\s*(?:"([^"]*)"|'([^']*)')[^>]*>([\s\S]*?)<\/scriptItem\s*>/gi;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    const name = (match[1] ?? match[2] ?? "").trim();
    const content = match[3].trim();
    if (name && content) items.push({ name, content });
  }

  return items;
}

async function persistScriptItems(projectId: number, scripts: ScriptItem[]) {
  for (const script of scripts) {
    const row = await u.db("o_script").where({ projectId, name: script.name }).first();
    if (row) {
      await u.db("o_script").where({ id: row.id }).update({ content: script.content });
    } else {
      await u.db("o_script").insert({ projectId, name: script.name, content: script.content });
    }
  }
}
