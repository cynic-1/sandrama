import { tool, jsonSchema, Tool } from "ai";
import { z } from "zod";
import _ from "lodash";
import ResTool from "@/socket/resTool";
import u from "@/utils";
import { startDerivativeAssetImageGeneration } from "@/utils/derivativeAssetImageGeneration";

const deriveAssetSchema = z.object({
  id: z.number().describe("Derived Asset ID, empty if newly added"),
  assetsId: z.number().describe("Associated asset ID"),
  prompt: z.string().describe("Generate a prompt"),
  name: z.string().describe("Derivative Asset Name"),
  desc: z.string().describe("Derivative Asset Description"),
  src: z.string().nullable().describe("Derived asset resource path"),
  state: z.enum(["Not generated", "Generating", "Completed", "Generation failed"]).describe("Derived asset generation status"),
  type: z.enum(["role", "tool", "scene", "clip"]).describe("Derivative asset type"),
});
export const assetItemSchema = z.object({
  id: z.number().describe("Asset Unique Identifier"),
  name: z.string().describe("Asset Name"),
  type: z.enum(["role", "tool", "scene", "clip"]).describe("Asset Type"),
  prompt: z.string().describe("Generate a prompt"),
  desc: z.string().describe("Asset Description"),
  derive: z.array(deriveAssetSchema).describe("List of derivative assets"),
});
const storyboardSchema = z.object({
  id: z.number().describe("Storyboard ID, must be a real ID"),
  duration: z.number().describe("Duration (seconds)"),
  prompt: z.string().describe("Generate a prompt"),
  associateAssetsIds: z.array(z.number()).describe("List of associated asset IDs"),
  src: z.string().nullable().describe("Storyboard resource path"),
  index: z.number().nullable().optional().describe("Storyboard sorting field"),
});
const workbenchDataSchema = z.object({
  name: z.string().describe("Project Name"),
  duration: z.string().describe("Video duration"),
  resolution: z.string().describe("Resolution"),
  fps: z.string().describe("Frame rate"),
  cover: z.string().optional().describe("Cover image path"),
  gradient: z.string().optional().describe("Gradient color configuration"),
});
const posterItemSchema = z.object({
  id: z.number().describe("Poster ID"),
  image: z.string().describe("Poster image path"),
});
export const flowDataSchema = z.object({
  script: z.string().describe("Script content"),
  scriptPlan: z.string().describe("Shooting Plan"),
  assets: z.array(assetItemSchema).describe("Derivative assets"),
  storyboardTable: z.string().describe("Storyboard"),
  storyboard: z.array(storyboardSchema).describe("Storyboard Panel"),
});

export type FlowData = z.infer<typeof flowDataSchema>;

const keySchema = z.enum(Object.keys(flowDataSchema.shape) as [keyof FlowData, ...Array<keyof FlowData>]);
const flowDataKeyLabels = Object.fromEntries(
  Object.entries(flowDataSchema.shape).map(([key, schema]) => [key, (schema as z.ZodTypeAny).description ?? key]),
) as Record<keyof FlowData, string>;

interface ToolConfig {
  resTool: ResTool;
  toolsNames?: string[];
  msg: ReturnType<ResTool["newMessage"]>;
}

/**
 * Serial queue: Ensures socket operations are queued for execution, avoiding excessive concurrency that could lead to a pseudo-deadlock
 * @param delayMs The minimum interval between each operation (ms)
 */
function createSocketQueue(delayMs = 800) {
  let lastPromise: Promise<any> = Promise.resolve();
  return <T>(fn: () => Promise<T>): Promise<T> => {
    lastPromise = lastPromise.then(
      () =>
        new Promise<T>((resolve, reject) => {
          setTimeout(() => fn().then(resolve, reject), delayMs);
        }),
    );
    return lastPromise;
  };
}

export default (toolCpnfig: ToolConfig) => {
  const { resTool, toolsNames, msg } = toolCpnfig;
  const { socket } = resTool;
  const socketQueue = createSocketQueue(800);
  const workMap: Record<any, any> = {};
  const tools: Record<string, Tool> = {
    get_flowData: tool({
      description: "Get workspace data",
      inputSchema: jsonSchema<{ key: keyof FlowData }>(
        z
          .object({
            key: keySchema.describe("Data key"),
          })
          .toJSONSchema(),
      ),
      execute: async ({ key }) => {
        const thinking = msg.thinking(`Fetching${flowDataKeyLabels[key]}Workspace data...`);

        const flowData: FlowData = await new Promise((resolve) => socket.emit("getFlowData", { key }, (res: any) => resolve(res)));
        thinking.appendText(`Obtained${flowDataKeyLabels[key]}:\n` + JSON.stringify(flowData[key], null, 2));
        thinking.updateTitle(`Get${flowDataKeyLabels[key]}Done`);
        thinking.complete();
        if (workMap[key] && JSON.stringify(workMap[key]) === JSON.stringify(flowData[key])) {
          console.info(`[tools] get_flowData: ${flowDataKeyLabels[key]}The data has not changed, so no update is needed.`);
          return `${flowDataKeyLabels[key]}The data has not changed, so no update is needed.`;
        }
        workMap[key] = flowData[key];
        return flowData[key];
      },
    }),
    add_deriveAsset: tool({
      description: "Add or update derivative assets",
      inputSchema: jsonSchema<{ assetsId: number; id: number | null; name: string; desc: string }>(
        z
          .object({
            assetsId: z.number().describe("Associated asset ID"),
            id: z.number().nullable().describe("Derived Asset ID, empty if newly added"),
            name: z.string().describe("Derivative Asset Name"),
            desc: z.string().describe("Derivative Asset Description"),
          })
          .toJSONSchema(),
      ),
      execute: async (raw) => {
        // Fault tolerance: LLMs occasionally pass the string "null" or an empty string; normalize these to null.
        const idRaw = raw.id as unknown;
        const normalizedId = idRaw === "null" || idRaw === "" || idRaw === undefined ? null : (idRaw as number | null);
        const deriveAsset = { ...raw, id: normalizedId };

        const thinking = msg.thinking("Operating assets...");
        const { projectId, scriptId } = resTool.data;
        const startTime = Date.now();
        const parentAssets = await u.db("o_assets").where("id", deriveAsset.assetsId).select("id", "type").first();
        if (!parentAssets) return "The associated asset does not exist";

        const data = {
          id: deriveAsset.id ?? undefined,
          assetsId: deriveAsset.assetsId,
          projectId,
          name: deriveAsset.name,
          type: parentAssets.type,
          describe: deriveAsset.desc,
          startTime,
        };
        if (deriveAsset.id) {
          await u.db("o_assets").where("id", deriveAsset.id).update(data);
          thinking.appendText(`Updated derivative asset, ID:${deriveAsset.id}\n`);
        } else {
          const [insertedId] = await u.db("o_assets").insert(data);
          data.id = insertedId;
          await u.db("o_scriptAssets").insert({ scriptId, assetId: insertedId });
          thinking.appendText(`A derivative asset has been added, ID:${insertedId}\n`);
        }
        const res = await new Promise((resolve) => socket.emit("addDeriveAsset", data, (res: any) => resolve(res)));
        thinking.updateTitle("Asset operation completed");
        thinking.complete();
        return res ?? "Operation successful";
      },
    }),
    del_deriveAsset: tool({
      description: "Delete derivative assets",
      inputSchema: jsonSchema<{ assetsId: number; id: number }>(
        z
          .object({
            assetsId: z.number().describe("Associated asset ID"),
            id: z.number().describe("Derived Asset ID"),
          })
          .toJSONSchema(),
      ),
      execute: async ({ assetsId, id }) => {
        const thinking = msg.thinking("Operating assets...");
        const { scriptId } = resTool.data;
        await u.db("o_assets").where("id", id).del();
        await u.db("o_scriptAssets").where({ scriptId, assetId: id }).del();
        thinking.appendText(`Deleted derivative asset, ID:${id}\n`);
        const res = await new Promise((resolve) => socket.emit("delDeriveAsset", { assetsId, id }, (res: any) => resolve(res)));
        thinking.updateTitle("Asset operation completed");
        thinking.complete();
        return res ?? "Deletion successful";
      },
    }),
    generate_deriveAsset: tool({
      description: "Generate derivative asset images",
      inputSchema: jsonSchema<{ ids: number[] }>(
        z
          .object({
            ids: z.array(z.number()).describe("Derived asset ID to be generated"),
          })
          .toJSONSchema(),
      ),
      execute: async ({ ids }) => {
        const thinking = msg.thinking("Generating derivative assets...");
        try {
          const { projectId, scriptId } = resTool.data;
          if (typeof projectId !== "number" || typeof scriptId !== "number") {
            throw new Error("The current production context is missing project or script information");
          }

          const result = await startDerivativeAssetImageGeneration({
            assetIds: ids,
            projectId,
            scriptId,
          });
          thinking.appendText(`Derivative asset image generation task submitted:${JSON.stringify(result, null, 2)}\n`);
          thinking.updateTitle("The derivative asset generation task has been initiated");
          thinking.complete();
          return `Started${result.length}For a derivative asset image generation task, the final result should be based on the workbench status.`;
        } catch (error) {
          const message = u.error(error).message;
          thinking.appendText("Failed to generate derivative asset:" + message);
          thinking.updateTitle("Failed to generate derivative assets");
          thinking.complete();
          return `Derived asset generation failed:${message}`;
        }
      },
    }),
    generate_storyboard: tool({
      description: "Generate storyboard images",
      inputSchema: jsonSchema<{ ids: number[] }>(
        z
          .object({
            ids: z.array(z.number()).describe("You must obtain the actual storyboard ID, and batch generation is supported."),
          })
          .toJSONSchema(),
      ),
      execute: async ({ ids }) => {
        const thinking = msg.thinking("Generating storyboards...");
        socketQueue(
          () =>
            new Promise((resolve, reject) =>
              socket.emit("generateStoryboard", { ids }, (res: any) => {
                if (res?.error) return reject(new Error(res.error));
                resolve(res);
              }),
            ),
        )
          .then((res) => {
            thinking.appendText("Generated storyboard data:" + JSON.stringify(res, null, 2));
            thinking.updateTitle("Storyboard generation complete");
            thinking.complete();
          })
          .catch((e) => {
            thinking.appendText("Storyboard generation failed:" + u.error(e).message);
            thinking.updateTitle("Storyboard generation failed");
            thinking.complete();
          });

        return "Start generating storyboards";
      },
    }),
    add_flowData_storyboard: tool({
      description: "Add a storyboard panel to the workspace",
      inputSchema: jsonSchema<{
        videoDesc: string;
        prompt: string | null;
        track: string;
        duration: number;
        associateAssetsIds: number[] | null;
        shouldGenerateImage: string;
      }>(
        z
          .object({
            videoDesc: z.string().describe("Visual description, scene, related asset name, duration, shot size, camera movement, character action, emotion, lighting and atmosphere, dialogue, sound effects, related asset ID"),
            prompt: z.string().nullable().describe("Storyboard image prompt"),
            track: z.string().describe("Group"),
            duration: z.number().describe("Video recommendation time"),
            associateAssetsIds: z.array(z.number()).nullable().describe("List of asset IDs required for this storyboard"),
            shouldGenerateImage: z.enum(["true", "false"]).describe("Do you need to generate storyboard images?"),
          })
          .toJSONSchema(),
      ),
      execute: async (raw) => {
        const thinking = msg.thinking("Adding storyboard panel data...");
        const data = {
          videoDesc: raw.videoDesc,
          prompt: raw.prompt,
          track: raw.track,
          duration: raw.duration,
          associateAssetsIds: raw.associateAssetsIds ?? [],
          shouldGenerateImage: raw.shouldGenerateImage,
        };
        socketQueue(
          () =>
            new Promise((resolve, reject) =>
              socket.emit("addStoryboard", { ...data }, (res: any) => {
                if (res?.error) return reject(new Error(res.error));
                resolve(res);
              }),
            ),
        )
          .then((res) => {
            thinking.appendText("Newly added storyboard data:" + JSON.stringify(data, null, 2));
            thinking.updateTitle("Storyboard added successfully");
            thinking.complete();
          })
          .catch((e) => {
            thinking.appendText("Newly added storyboard data:" + JSON.stringify(data, null, 2));
            thinking.updateTitle("Failed to add storyboard");
            thinking.complete();
          });
        return true;
      },
    }),
  };

  return toolsNames ? Object.fromEntries(Object.entries(tools).filter(([n]) => toolsNames.includes(n))) : tools;
};
