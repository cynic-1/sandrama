import { tool, jsonSchema, Tool } from "ai";
import u from "@/utils";
import { z } from "zod";
import _ from "lodash";
import ResTool from "@/socket/resTool";

export const ScriptSchema = z.object({
  name: z.string().describe("Script Name"),
  content: z.string().describe("Script content"),
});
export const planData = z.object({
  storySkeleton: z.string().describe("Story skeleton"),
  adaptationStrategy: z.string().describe("Adaptation Strategy"),
  script: z.string().describe("Script content"),
});

export type planData = z.infer<typeof planData>;

const keySchema = z.enum(Object.keys(planData.shape) as [keyof planData, ...Array<keyof planData>]);
const planDataKeyLabels = Object.fromEntries(
  Object.entries(planData.shape).map(([key, schema]) => [key, (schema as z.ZodTypeAny).description ?? key]),
) as Record<keyof planData, string>;

interface ToolConfig {
  resTool: ResTool;
  toolsNames?: string[];
  msg: ReturnType<ResTool["newMessage"]>;
}

export default (toolCpnfig: ToolConfig) => {
  const { resTool, toolsNames, msg } = toolCpnfig;
  const { socket } = resTool;
  const tools: Record<string, Tool> = {
    get_novel_events: tool({
      description: "Get chapter events",
      inputSchema: jsonSchema<{ chapterIndexs: number[] }>(
        z
          .object({
            chapterIndexs: z.array(z.number()).describe("Chapter numbering"),
          })
          .toJSONSchema(),
      ),
      execute: async ({ chapterIndexs }) => {
        console.log("[tools] get_novel_events", chapterIndexs);
        const thinking = msg.thinking("Querying chapter events...");
        const requestedIndexes = [...new Set(chapterIndexs)].filter((index) => Number.isInteger(index) && index > 0);
        const allNovels = await u
          .db("o_novel")
          .where("projectId", resTool.data.projectId)
          .select("id", "chapterIndex as index", "reel", "chapter", "chapterData", "event", "eventState")
          .orderBy("chapterIndex", "asc")
          .orderBy("id", "asc");
        const byStoredIndex = new Map(allNovels.map((novel: any) => [Number(novel.index), novel]));
        const data = requestedIndexes
          .map((index) => byStoredIndex.get(index) ?? allNovels[index - 1])
          .filter((novel, position, rows) => novel && rows.findIndex((item) => item?.id === novel.id) === position);
        thinking.appendText("Querying chapter number:" + chapterIndexs.join(","));
        const eventString = data.map((i: any) => [`Chapter${i.index}Chapter, Title:{i.chapter}, Event:{i.event}`].join("\n")).join("\n");
        thinking.appendText("Query result:" + eventString);
        thinking.updateTitle("Query chapter event completed");
        thinking.complete();
        return eventString ?? "No data";
      },
    }),
    get_planData: tool({
      description: "Get workspace data",
      inputSchema: jsonSchema<{ key: keyof planData }>(
        z
          .object({
            key: keySchema.describe("Data key"),
          })
          .toJSONSchema(),
      ),
      execute: async ({ key }) => {
        console.log("[tools] get_planData", key);
        const thinking = msg.thinking(`Fetching${planDataKeyLabels[key]}Workspace data...`);
        const planData: planData = await new Promise((resolve) => socket.emit("getPlanData", { key }, (res: any) => resolve(res)));
        thinking.appendText(`Obtained${planDataKeyLabels[key]}:\n` + planData[key]);
        thinking.updateTitle(`Get${planDataKeyLabels[key]}Done`);
        thinking.complete();
        return planData[key] ?? "No data";
      },
    }),
    get_novel_text: tool({
      description: "Get the original text content of the novel chapter",
      inputSchema: jsonSchema<{ chapterIndex: string }>(
        z
          .object({
            chapterIndex: z.string().describe("Chapter Number"),
          })
          .toJSONSchema(),
      ),
      execute: async ({ chapterIndex }) => {
        console.log("[tools] get_novel_text", "[tools] get_novel_text", chapterIndex);
        const thinking = msg.thinking(`Fetching the original text of the novel chapter...`);
        const requestedIndex = Number(String(chapterIndex).match(/\d+/)?.[0]);
        let data = Number.isInteger(requestedIndex) && requestedIndex > 0
          ? await u.db("o_novel").where("projectId", resTool.data.projectId).where("chapterIndex", requestedIndex).select("chapterData").first()
          : undefined;
        if (!data && Number.isInteger(requestedIndex) && requestedIndex > 0) {
          data = await u
            .db("o_novel")
            .where("projectId", resTool.data.projectId)
            .select("chapterData")
            .orderBy("chapterIndex", "asc")
            .orderBy("id", "asc")
            .offset(requestedIndex - 1)
            .first();
        }
        const text = data && data?.chapterData ? data.chapterData : "";
        thinking.appendText(`Obtained the original text:` + text);
        thinking.updateTitle(`Novel chapter original text retrieval completed`);
        thinking.complete();
        return text ?? "No data";
      },
    }),
    get_script_content: tool({
      description: "Get the script content",
      inputSchema: jsonSchema<{ ids: string[] }>(
        z
          .object({
            ids: z.array(z.string()).describe("Script ID"),
          })
          .toJSONSchema(),
      ),
      execute: async ({ ids }) => {
        console.log("[tools] get_script_content", "[tools] get_script_content", ids);
        const thinking = msg.thinking(`Fetching script content...`);
        const data = await u.db("o_script").whereIn("id", ids).select("content", "name");
        const text = data && data.length ? data.map((d) => `<scriptItem name="${d.name}">${d.content}</scriptItem>`).join("\n") : "";
        thinking.appendText(`Retrieved script content:` + JSON.stringify(data, null, 2));
        thinking.updateTitle(`Script content retrieval completed`);
        thinking.complete();
        return text ?? "No data";
      },
    }),
  };
  return toolsNames ? Object.fromEntries(Object.entries(tools).filter(([n]) => toolsNames.includes(n))) : tools;
};
