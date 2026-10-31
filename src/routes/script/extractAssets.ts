import express from "express";
import u from "@/utils";
import { z } from "zod";
import { error, success } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { useSkill } from "@/utils/agent/skillsTools";
import { tool, jsonSchema } from "ai";
import { o_script } from "@/types/database";

const router = express.Router();

/** New asset: An asset identified for the first time by AI, requiring complete information*/
const NewAssetSchema = z.object({
  name: z.string().describe("Asset name, name only, no other description"),
  desc: z.string().describe("Asset Description"),
  type: z.enum(["role", "tool", "scene"]).describe("Asset Type"),
  scriptIds: z.array(z.number()).describe("The array of script IDs for this asset"),
});

/** Existing assets: Assets already present in the database; only the name and the associated script are required.*/
const ExistingAssetRefSchema = z.object({
  name: z.string().describe("The name of an existing asset must exactly match the name in the existing asset list."),
  scriptIds: z.array(z.number()).describe("The array of script IDs for this asset"),
});

export const AssetSchema = z.object({
  name: z.string().describe("Asset name, name only, no other description"),
  desc: z.string().describe("Asset Description"),
  type: z.enum(["role", "tool", "scene"]).describe("Asset Type"),
});

type NewAsset = z.infer<typeof NewAssetSchema>;
type ExistingAssetRef = z.infer<typeof ExistingAssetRefSchema>;
type Asset = z.infer<typeof AssetSchema>;

/** The results of each AI call*/
type GroupResult = {
  batchScriptIds: number[];
  newAssets: NewAsset[];
  existingRefs: ExistingAssetRef[];
} | null;

/** Group the scriptIds array by groupSize*/
function chunkArray(arr: number[], groupSize: number): number[][][] {
  const chunks: number[][] = [];
  for (let i = 0; i < arr.length; i += 5) {
    chunks.push(arr.slice(i, i + 5));
  }
  const groupChunks = [];
  for (let i = 0; i < chunks.length; i += groupSize) {
    groupChunks.push(chunks.slice(i, i + groupSize));
  }
  return groupChunks;
}

export default router.post(
  "/",
  validateFields({
    scriptIds: z.array(z.number()),
    projectId: z.number(),
    groupSize: z.number().min(1).optional(),
  }),
  async (req, res) => {
    const { scriptIds, projectId, groupSize = 5 } = req.body;

    if (!scriptIds.length) return res.status(400).send(error("Please select a script first"));
    const scripts = await u.db("o_script").whereIn("id", scriptIds);

    // Build a mapping from scriptId to script content
    const scriptMap = new Map(scripts.map((s: o_script) => [s.id, s]));

    await u.db("o_script").whereIn("id", scriptIds).update({
      extractState: 2,
    });

    const errors: { scriptId: number; error: string }[] = [];
    let successCount = 0;

    // Group scriptIds by groupSize (default 5), and send each group to the AI together
    const scriptGroups = chunkArray(scriptIds as number[], groupSize);

    /** After a set of scripts is extracted, they are uniformly stored in the database and associations are established.*/
    async function persistGroupResult(result: GroupResult) {
      if (!result) return;
      const { batchScriptIds, newAssets, existingRefs } = result;
      if (!newAssets.length && !existingRefs.length) return;

      // Query existing assets
      const existingAssets = await u.db("o_assets").where("projectId", projectId).select("id", "name");
      const existingMap = new Map(existingAssets.map((a) => [a.name!, a.id!]));

      // Insert a new asset (not in the existing list)
      const toInsert = newAssets.filter((asset) => !existingMap.has(asset.name));
      if (toInsert.length) {
        await u.db("o_assets").insert(
          toInsert.map((asset) => ({
            name: asset.name,
            type: asset.type,
            describe: asset.desc,
            projectId: projectId,
            startTime: Date.now(),
          })),
        );
      }

      // Re-query to obtain the complete name -> id mapping
      const allAssets = await u.db("o_assets").where("projectId", projectId).select("id", "name");
      const nameToId = new Map(allAssets.map((a) => [a.name, a.id]));

      // Collect all associations between assets and scripts
      const scriptAssetRows: { scriptId: number; assetId: number }[] = [];

      // Association of new assets
      for (const asset of newAssets) {
        const assetId = nameToId.get(asset.name);
        if (assetId) {
          for (const sid of asset.scriptIds) {
            scriptAssetRows.push({ scriptId: sid, assetId });
          }
        }
      }

      // Associations of existing assets
      for (const ref of existingRefs) {
        const assetId = nameToId.get(ref.name);
        if (assetId) {
          for (const sid of ref.scriptIds) {
            scriptAssetRows.push({ scriptId: sid, assetId });
          }
        }
      }

      // Deduplicate: keep only one entry for the same scriptId + assetId
      const uniqueRows = [...new Map(scriptAssetRows.map((r) => [`${r.scriptId}_${r.assetId}`, r])).values()];

      // Delete the old associations for the current batch of scriptIds, then insert the new ones.
      await u.db("o_scriptAssets").whereIn("scriptId", batchScriptIds).delete();
      if (uniqueRows.length) {
        await u.db("o_scriptAssets").insert(uniqueRows);
      }

      // Update the status of successful scripts in this batch to 1 (success).
      await u.db("o_script").whereIn("id", batchScriptIds).where("projectId", projectId).update({
        extractState: 1,
        errorReason: null,
      });
    }
    res.send(success("Start extracting assets"));

    function processGroup(group: number[][][]) {
      group.map(async (itemIds) => {
        const validScripts: { id: number; script: o_script }[] = [];
        for (const scriptIds of itemIds as number[][]) {
          for (const scriptId of scriptIds) {
            const script = scriptMap.get(scriptId);
            if (!script) {
              errors.push({ scriptId, error: "No corresponding script found" });
              await u.db("o_script").where("id", scriptId).where("projectId", projectId).update({ extractState: -1, errorReason: "No corresponding script found" });
            } else {
              // Check if the status is pending extraction, and generate only for pending extraction.
              const item = await u.db("o_script").where("projectId", projectId).where("id", scriptId).select("extractState").first();
              if (item?.extractState == 2) {
                validScripts.push({ id: scriptId, script });
              }
            }
          }
        }
        if (!validScripts.length) return;
        const validScriptIds = validScripts.map((v) => v.id);
        // Change status to extracting
        await u.db("o_script").where("projectId", projectId).whereIn("id", validScriptIds).update({
          extractState: 0, // extracting
        });
        // Query the existing asset list of the current project to provide reference for the AI.
        const existingAssets = await u.db("o_assets").where("projectId", projectId).select("name", "type");
        const existingAssetsList = existingAssets.map((a) => `${a.name}(${a.type})`).join("、");

        // Concatenate multi-episode script content, with each episode separated by a delimiter
        const scriptsContent = validScripts
          .map(({ id, script }) => `===== 【Script ID:${id}】${script.name || ""} =====\n${script.content}`)
          .join("\n\n");

        let collectedNew: NewAsset[] = [];
        let collectedExisting: ExistingAssetRef[] = [];
        try {
          const resultTool = tool({
            description: "When returning results, you must call this tool",
            inputSchema: jsonSchema<{ newAssets: NewAsset[]; existingAssetRefs: ExistingAssetRef[] }>(
              z
                .object({
                  newAssets: z
                    .array(NewAssetSchema)
                    .describe("The list of newly discovered assets (not in the existing asset list) requires the complete prompt, name, desc, type, and the scriptIds that use the asset"),
                  existingAssetRefs: z
                    .array(ExistingAssetRefSchema)
                    .describe("The list of references to existing assets (those already present in the existing assets list). Only provide the asset names and the scriptIds that use those assets."),
                })
                .toJSONSchema(),
            ),
            execute: async ({ newAssets, existingAssetRefs }) => {
              if (newAssets?.length) collectedNew = newAssets;
              if (existingAssetRefs?.length) collectedExisting = existingAssetRefs;
              return "No need to reply to the user with any content";
            },
          });
          const promptData = await u.userSettings.getPromptByType("scriptAssetExtraction");
          let scriptAssetExtraction = "" as string | undefined;
          if (promptData && promptData.useData) {
            scriptAssetExtraction = promptData.useData;
          } else {
            scriptAssetExtraction = promptData?.data ?? undefined;
          }
          const existingHint = existingAssetsList
            ? `【Existing Asset List】:${existingAssetsList}For existing assets, if they appear in the script, you only need to provide the asset name and the corresponding scriptIds array in existingAssetRefs; there is no need to regenerate desc/type. For newly discovered assets (not in the existing list), please provide complete information in newAssets.`
            : "";
          const output = await u.Ai.Text("universalAi").invoke({
            messages: [
              {
                role: "system",
                content:
                  scriptAssetExtraction +
                  "Extract the assets (characters, scenes, props) involved in the script, referring to the script_assets_extract skill specification. The result must be returned via the resultTool tool." +
                  "Note: Multiple script episodes will be provided simultaneously, with each episode separated by ===== 【Script ID: xxx】 =====. You need to analyze which assets are used in each episode and indicate in the output, using a scriptIds array, which scripts each asset appears in.",
              },
              {
                role: "user",
                content: `Current existing asset list:${existingHint}Please{validScripts.length}Collect the script and extract the corresponding script assets (characters, scenes, props):{scriptsContent}`,
              },
            ],
            tools: { resultTool },
          });
          await persistGroupResult({
            batchScriptIds: validScriptIds,
            newAssets: collectedNew,
            existingRefs: collectedExisting,
          });
        } catch (e) {
          console.error(`[extractAssets] group=[${validScriptIds.join(",")}] Extraction failed:`, e);
          for (const { id, script } of validScripts) {
            errors.push({ scriptId: id, error: (script.name || "") + ":" + u.error(e).message });
            await u
              .db("o_script")
              .where("id", id)
              .where("projectId", projectId)
              .update({ extractState: -1, errorReason: u.error(e).message });
          }
          return;
        }
        if (!collectedNew.length && !collectedExisting.length) {
          for (const { id } of validScripts) {
            errors.push({ scriptId: id, error: "AI did not return any assets" });
            await u.db("o_script").where("id", id).where("projectId", projectId).update({ extractState: -1, errorReason: "AI did not return any assets" });
          }
          return;
        }
      });
    }
    processGroup(scriptGroups);
  },
);
