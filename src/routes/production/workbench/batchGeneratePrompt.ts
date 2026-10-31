import express from "express";
import u from "@/utils";
import pLimit from "p-limit";
import { z } from "zod";
import { success, error } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import fs from "fs/promises";
import path from "path";
import { parseVideoMode, resolveVideoReferences } from "@/utils/videoReferenceResolver";
const router = express.Router();

export default router.post(
  "/",
  validateFields({
    projectId: z.number(),
    trackData: z.array(
      z.object({
        trackId: z.number(),
        info: z.array(
          z.object({
            id: z.number(),
            sources: z.string(),
          }),
        ),
      }),
    ),
    mode: z.string(),
    model: z.string(),
    concurrentCount: z.number().optional(), // Concurrent connections
  }),
  async (req, res) => {
    const { trackData, projectId, mode, model, concurrentCount = 5 } = req.body;
    const parsedMode = parseVideoMode(mode);
    try {
      // Preload public data
      const [id, modelData] = model.split(/:(.+)/);
      const projectData = await u.db("o_project").select("*").where({ id: projectId }).first();
      const videoPrompt = await u.userSettings.getPromptByType("videoPromptGeneration");
      let videoPromptGeneration = "" as string | undefined;

      const modelPromptData = await u.userSettings.getModelPrompt(id, modelData);
      // Query found: there is a bound corresponding video prompt
      if (modelPromptData) {
        const modelPromptRoot = u.getPath(["modelPrompt"]);
        try {
          const fullPath = path.join(modelPromptRoot, modelPromptData?.path!);
          const content = await u.userSettings.getModelPromptFile(modelPromptData?.path!, () => fs.readFile(fullPath, "utf-8"));
          videoPromptGeneration = content ?? "";
        } catch {}
      }

      // No binding found. Automatically match files under modelPrompt/video/ based on the model name + mode.
      if (!videoPromptGeneration) {
        const modelPromptRoot = u.getPath(["modelPrompt"]);
        const videoPromptDir = path.join(modelPromptRoot, "video");
        const modelLower = (modelData ?? "").toLowerCase();

        let fileName: string | null = null;

        if (modelLower.includes("wan") && modelLower.includes("2.6")) {
          // wan2.6 series => Single-image first-and-last-frame mode
          fileName = "wan2.6Single-imageFirstFrameMode.md";
        } else if (/seedance.*2[.\-]0/i.test(modelLower)) {
          // seedance 2.0 / 2-0 series
          fileName = "seedance2Multi-parameterMode.md";
        } else if (mode === "startEndRequired" || mode === "endFrameOptional" || mode === "startFrameOptional") {
          // body.mode is related to first and last frames => generic first and last frame mode
          fileName = "universalFirstAndLastFrameMode.md";
        } else if (typeof mode === "string" && mode.startsWith('["') && mode.endsWith('"]')) {
          // Other => General multi-parameter mode
          fileName = "universalMulti-parameterMode.md";
        }
        if (fileName) {
          try {
            const fullPath = path.join(videoPromptDir, fileName);
            const relativePath = path.relative(modelPromptRoot, fullPath).replace(/\\/g, "/");
            videoPromptGeneration = await u.userSettings.getModelPromptFile(relativePath, () => fs.readFile(fullPath, "utf-8"));
          } catch {
            // If the file does not exist, ignore it and continue using the fallback.
          }
        }
      }

      // Alternative
      if (!videoPromptGeneration) {
        if (videoPrompt && videoPrompt.useData) {
          videoPromptGeneration = videoPrompt.useData;
        } else {
          videoPromptGeneration = videoPrompt?.data ?? undefined;
        }
      }

      const artStyle = projectData?.artStyle || "None";
      const visualManual = u.getArtPrompt(artStyle, "art_skills", "art_storyboard_video");
      await u
        .db("o_videoTrack")
        .whereIn(
          "id",
          trackData.map((t: { trackId: number }) => t.trackId),
        )
        .update({ state: "Generating" });
      // Concurrency control: Each track independently follows the query → assembly → AI call → update flow
      const limit = pLimit(concurrentCount ?? 5);
      const tasks = trackData.map((track: { trackId: number; info: { id: number; sources: string }[] }) =>
        limit(async () => {
          const videoTrack = await u.db("o_videoTrack").where({ id: track.trackId, projectId }).select("scriptId").first();
          const automaticReferences = await resolveVideoReferences({
            projectId,
            scriptId: Number(videoTrack?.scriptId ?? 0),
            trackId: track.trackId,
            manualReferences: track.info,
            mode: parsedMode,
            includeAllAssets: true,
          });
          const referenceInfo = parsedMode === "text" ? track.info : automaticReferences.references.map(({ id, sources }) => ({ id, sources }));
          // Query parameters
          const images = await Promise.all(
            referenceInfo.map(async (item: { id: number; sources: string }) => {
              if (item.sources === "storyboard") {
                // Query storyboard main information
                const storyboard = await u
                  .db("o_storyboard")
                  .where("o_storyboard.id", item.id)
                  .select("videoDesc", "prompt", "track", "duration", "shouldGenerateImage")
                  .first();
                // Query the asset IDs associated with the storyboard
                const assetRows = await u.db("o_assets2Storyboard").where("storyboardId", item.id).orderBy("rowid").select("assetId");
                const associateAssetsIds = assetRows.map((row: any) => row.assetId);
                return {
                  ...storyboard,
                  associateAssetsIds,
                  _type: "storyboard",
                };
              }
              if (item.sources === "assets") {
                // Query materials
                const assetsData = await u
                  .db("o_assets")
                  .leftJoin("o_image", "o_image.id", "o_assets.imageId")
                  .where("o_assets.id", item.id)
                  .select("o_assets.id", "o_assets.type", "o_assets.name", "o_image.filePath")
                  .first();
                return {
                  ...assetsData,
                  _type: "assets",
                };
              }
            }),
          );

          // Split assets and storyboard
          const assets: any[] = [];
          const storyboard: any[] = [];
          for (const item of images) {
            if (!item) continue;
            if (item._type === "assets")
              assets.push({
                id: item.id,
                type: item.type,
                name: item.name,
                filePath: item.filePath,
              });
            if (item._type === "storyboard")
              storyboard.push({
                videoDesc: item.videoDesc,
                prompt: item.prompt,
                track: item.track,
                duration: item.duration,
                associateAssetsIds: item.associateAssetsIds,
                shouldGenerateImage: item.shouldGenerateImage,
              });
          }

          const content = `
          **Model Name**：${modelData},
          **Asset information** (character, scene, prop, audio): ${assets
            .filter((i: any) => i.filePath)
            .map((i: any) => `[${i.id},${i.type},${i.name}]`)
            .join(", ")},
          **Storyboard information**: ${storyboard.map(
            (i: any) => `<storyboardItem
  videoDesc='${i.videoDesc}'
  duration='${i.duration}'
></storyboardItem>`,
          )},
          `;

          try {
            const { text } = await u.Ai.Text("universalAi").invoke({
              system: videoPromptGeneration,
              messages: [
                {
                  role: "assistant",
                  content: `${visualManual}`,
                },
                {
                  role: "user",
                  content: content,
                },
              ],
            });

            await u.db("o_videoTrack").where({ id: track.trackId }).update({
              prompt: text,
              state: "Completed",
            });

            return { trackId: track.trackId, text };
          } catch (e: any) {
            await u
              .db("o_videoTrack")
              .where({ id: track.trackId })
              .update({ state: "Generation failed", reason: u.error(e).message });
          }
        }),
      );

      // Run in the background without waiting for the result
      Promise.all(tasks);
      res.status(200).send(success("Start generating the prompt"));
    } catch (e) {
      res.status(400).send(error(u.error(e).message));
    }
  },
);
