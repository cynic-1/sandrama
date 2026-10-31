import express from "express";
import u from "@/utils";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { success } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { ReferenceList } from "@/utils/ai";
import { parseVideoMode, resolveVideoReferences } from "@/utils/videoReferenceResolver";
const router = express.Router();

export default router.post(
  "/",
  validateFields({
    projectId: z.number(),
    scriptId: z.number(),
    trackData: z.array(
      z.object({
        uploadData: z.array(
          z.object({
            id: z.number(),
            sources: z.string(),
          }),
        ),
        trackId: z.number(),
        prompt: z.string(),
        duration: z.number(),
      }),
    ),
    model: z.string(),
    mode: z.string(),
    resolution: z.string(),
    audio: z.boolean().optional(),
  }),
  async (req, res) => {
    const { scriptId, projectId, trackData, model, resolution, audio, mode } = req.body;

    const modeData = parseVideoMode(mode);

    // Get the generated video aspect ratio
    const ratio = await u.db("o_project").select("videoRatio").where("id", projectId).first();

    // Preprocess the data for each track and insert it into the database, returning the task list
    const tasks = await Promise.all(
      (trackData as { uploadData: { id: number; sources: string }[]; trackId: number; prompt: string; duration: number }[]).map(async (track) => {
        const { uploadData, trackId, prompt, duration } = track;

        const references = await resolveVideoReferences({
          projectId,
          scriptId,
          trackId,
          manualReferences: uploadData,
          mode: modeData,
        });
        if (modeData !== "text" && references.references.length === 0) {
          throw new Error(`Orbit${trackId}No reference media is available. Please generate the storyboard images first.`);
        }

        const videoPath = `/${projectId}/video/${uuidv4()}.mp4`;
        const [videoId] = await u.db("o_video").insert({
          filePath: videoPath,
          time: Date.now(),
          state: "Generating",
          scriptId,
          projectId,
          videoTrackId: trackId,
        });

        return { videoId, videoPath, prompt, duration, references: references.references, trackId };
      }),
    );

    res.status(200).send(success(tasks.map((t) => ({ videoId: t.videoId, trackId: t.trackId }))));
    for (const { videoId, videoPath, prompt, duration, references } of tasks) {
      // All tasks are executed concurrently in the background, without blocking any process.
      const base64 = await Promise.all(
        references.map(async (item) => ({
          base64: await u.oss.getImageBase64(item.filePath),
          type: item.type,
          sourceType: "base64" as const,
        })),
      );
      const relatedObjects = { projectId, videoId, scriptId, type: "Video" };
      const aiVideo = u.Ai.Video(model);
      aiVideo
        .run(
          {
            prompt,
            referenceList: base64 as ReferenceList[],
            mode: modeData as any,
            duration,
            aspectRatio: (ratio?.videoRatio as "16:9" | "9:16") || "16:9",
            resolution,
            audio,
          },
          {
            projectId,
            taskClass: "Video generation",
            describe: "Generate a video based on the prompt",
            relatedObjects: JSON.stringify(relatedObjects),
          },
        )
        .then(async () => await aiVideo.save(videoPath))
        .then(async () => await u.db("o_video").where("id", videoId).update({ state: "Generation successful" }))
        .catch(async (error: any) => {
          await u
            .db("o_video")
            .where("id", videoId)
            .update({
              state: "Generation failed",
              errorReason: u.error(error).message,
            });
        });
    }
  },
);
