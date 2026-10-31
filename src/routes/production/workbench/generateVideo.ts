import express from "express";
import u from "@/utils";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { success, error } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { ReferenceList } from "@/utils/ai";
import { parseVideoMode, resolveVideoReferences } from "@/utils/videoReferenceResolver";
const router = express.Router();

export default router.post(
  "/",
  validateFields({
    projectId: z.number(),
    scriptId: z.number(),
    uploadData: z.array(
      z.object({
        id: z.number(),
        sources: z.string(),
      }),
    ),
    prompt: z.string(),
    model: z.string(),
    mode: z.string(),
    resolution: z.string(),
    duration: z.number(),
    audio: z.boolean().optional(),
    trackId: z.number(),
  }),
  async (req, res) => {
    const { scriptId, projectId, prompt, uploadData, model, duration, resolution, audio, mode, trackId } = req.body;
    const modeData = parseVideoMode(mode);
    // Get the generated video aspect ratio
    const ratio = await u.db("o_project").select("videoRatio").where("id", projectId).first();
    const videoPath = `/${projectId}/video/${uuidv4()}.mp4`; // Video save path
    // The backend automatically completes the storyboard frames and associated assets for the current track; manual selection serves only as an additional reference.
    const resolvedReferences = await resolveVideoReferences({
      projectId,
      scriptId,
      trackId,
      manualReferences: uploadData,
      mode: modeData,
    });
    const base64 = await Promise.all(
      resolvedReferences.references.map(async (item) => ({
        base64: await u.oss.getImageBase64(item.filePath),
        type: item.type,
        sourceType: "base64" as const,
      })),
    );
    if (modeData !== "text" && base64.length === 0) {
      return res.status(400).send(error("The current storyboard has no available reference media. Please generate the storyboard image first."));
    }
    // Added
    const [videoId] = await u.db("o_video").insert({
      filePath: videoPath,
      time: Date.now(),
      state: "Generating",
      scriptId,
      projectId,
      videoTrackId: trackId,
    });
    res.status(200).send(success(videoId));
    const relatedObjects = {
      projectId,
      videoId,
      scriptId,
      type: "Video",
    };
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
  },
);
