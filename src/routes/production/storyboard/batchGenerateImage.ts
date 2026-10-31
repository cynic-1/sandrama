import express from "express";
import u from "@/utils";
import { z } from "zod";
import sharp from "sharp";
import { error, success } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { Output, tool } from "ai";
import { assetItemSchema } from "@/agents/productionAgent/tools";
const router = express.Router();
export type AssetData = z.infer<typeof assetItemSchema>;

export default router.post(
  "/",
  validateFields({
    storyboardIds: z.array(z.number()),
    projectId: z.number(),
    scriptId: z.number(),
    concurrentCount: z.number().min(1).optional(),
    compulsory: z.boolean().optional(),
    imageModel: z.string().optional(),
  }),
  async (req, res) => {
    const {
      storyboardIds,
      projectId,
      scriptId,
      concurrentCount = 5,
      compulsory = false,
      imageModel,
    }: {
      storyboardIds: number[];
      projectId: number;
      scriptId: number;
      concurrentCount: number;
      compulsory: boolean;
      imageModel?: string;
    } = req.body;
    if (!storyboardIds || storyboardIds.length === 0) return res.status(400).send(error("storyboardIds cannot be empty"));
    // When there are no storyboardIds, generate new storyboard panel data using AI
    let finalStoryboardIds: number[] = storyboardIds || [];
    // Mark the storyboard where shouldGenerateImage === 0 as "Not Generated", and mark the rest as "Generating".
    const storyboardData = await u.db("o_storyboard").where("scriptId", scriptId).where("projectId", projectId).whereIn("id", finalStoryboardIds);
    if (!storyboardData.length) return res.status(500).send(error("No storyboard data found"));
    const storyIds = storyboardData.map((i) => i.id);

    const projectSettingData = await u.db("o_project").where("id", projectId).select("imageModel", "imageQuality", "artStyle", "videoRatio").first();
    const selectedImageModel = imageModel?.trim() || projectSettingData?.imageModel;
    if (!selectedImageModel) return res.status(400).send(error("Image model not configured"));

    const [vendorId, modelName] = selectedImageModel.split(/:(.+)/);
    const selectedModel = (await u.vendor.getModelList(vendorId)).find((model: any) => model.modelName === modelName && model.type === "image");
    if (!selectedModel) return res.status(400).send(error("The selected image model is unavailable. Please select another one."));

    if (compulsory) {
      await u.db("o_storyboard").whereIn("id", storyIds).where("scriptId", scriptId).update({ state: "Generating", shouldGenerateImage: 1 });
    } else {
      await u.db("o_storyboard").whereIn("id", storyIds).where("scriptId", scriptId).where("shouldGenerateImage", 0).update({ state: "Not generated" });
      await u.db("o_storyboard").whereIn("id", storyIds).where("scriptId", scriptId).where("shouldGenerateImage", 1).update({ state: "Generating" });
    }

    // Query the ordered list of assetIds associated with each storyboard in rowid order
    const assets2StoryboardRows = await u
      .db("o_assets2Storyboard")
      .whereIn("storyboardId", storyIds)
      .orderBy("rowid")
      .select("storyboardId", "assetId");

    // Collect all assetIds and batch query the corresponding imageIds
    const allAssetIds = [...new Set(assets2StoryboardRows.map((r: any) => r.assetId))];
    const assetImageMap: Record<number, number> = {};
    if (allAssetIds.length > 0) {
      const assetRows = await u.db("o_assets").whereIn("id", allAssetIds).select("id", "imageId");
      assetRows.forEach((row: any) => {
        assetImageMap[row.id] = row.imageId;
      });
    }

    // Rebuild assetRecord in rowid order, with values as an ordered list of imageIds
    const assetRecord: Record<number, number[]> = {};
    assets2StoryboardRows.forEach((item: any) => {
      if (!assetRecord[item.storyboardId]) {
        assetRecord[item.storyboardId] = [];
      }
      const imageId = assetImageMap[item.assetId];
      if (imageId != null) {
        assetRecord[item.storyboardId].push(imageId);
      }
    });
    const realStoryData = await u.db("o_storyboard").where("scriptId", scriptId).where("projectId", projectId).whereIn("id", storyIds);
    res.status(200).send(
      success(
        realStoryData.map((i) => ({
          id: i.id,
          prompt: i.prompt,
          associateAssetsIds: assetRecord[i.id!],
          src: null,
          state: i.state,
          videoDesc: i.videoDesc,
          shouldGenerateImage: i.shouldGenerateImage,
        })),
      ),
    );

    const generateTask = async (item: (typeof storyboardData)[number]) => {
      // Old storyboards may have only saved videoDesc and not the image prompt. An empty string
      // Passed to the OpenAI/OpenSand image editing interface; prioritize using the formal prompt, otherwise use
      // Fallback for storyboard frame descriptions, and write back to the prompt to avoid triggering the same error in the next batch generation.
      const prompt = typeof item.prompt === "string" ? item.prompt.trim() : "";
      const fallbackPrompt = typeof item.videoDesc === "string" ? item.videoDesc.trim() : "";
      const imagePrompt = prompt || fallbackPrompt;
      if (!imagePrompt) {
        await u.db("o_storyboard").where("id", item.id).update({
          filePath: "",
          reason: "The storyboard prompt and scene description are both empty, so the image cannot be generated.",
          state: "Generation failed",
        });
        return;
      }
      if (!prompt && fallbackPrompt) {
        await u.db("o_storyboard").where("id", item.id).update({ prompt: fallbackPrompt });
      }
      const repeloadObj = {
        prompt: imagePrompt,
        size: projectSettingData?.imageQuality as "1K" | "2K" | "4K",
        aspectRatio: projectSettingData?.videoRatio as `${number}:${number}`,
      };
      try {
        const imageCls = await u.Ai.Image(selectedImageModel as `${string}:${string}`).run(
          {
            referenceList: await getAssetsImageBase64(assetRecord[item.id!] || []),
            ...repeloadObj,
          },
          {
            taskClass: "Generate storyboard images",
            describe: "Storyboard image generation",
            relatedObjects: JSON.stringify(repeloadObj),
            projectId: projectId,
          },
        );
        const savePath = `/${projectId}/assets/${scriptId}/${u.uuid()}.jpg`;
        await imageCls.save(savePath);
        await u.db("o_storyboard").where("id", item.id).update({
          filePath: savePath,
          state: "Completed",
        });
      } catch (e) {
        u.db("o_storyboard")
          .where("id", item.id)
          .update({
            filePath: "",
            reason: u.error(e).message,
            state: "Generation failed",
          });
      }
    };
    // Control concurrency by `concurrentCount` and execute in batches; skip shots where `shouldGenerateImage === 0`.
    let generateList = [];
    if (compulsory) {
      generateList = storyboardData;
    } else {
      generateList = storyboardData.filter((item) => item.shouldGenerateImage !== 0);
    }
    for (let i = 0; i < generateList.length; i += concurrentCount) {
      const batch = generateList.slice(i, i + concurrentCount);
      await Promise.all(batch.map(generateTask));
    }
  },
);
async function getAssetsImageBase64(imageIds: number[]) {
  if (!imageIds.length) return [];

  const imagePaths = await u.db("o_image").whereIn("o_image.id", imageIds).select("o_image.id", "o_image.filePath");

  // Build a mapping from id to filePath
  const id2Path = new Map<number, string>();
  for (const row of imagePaths) {
    id2Path.set(row.id, row.filePath);
  }

  // Ensure the output order matches imageIds
  const imageUrls = await Promise.all(
    imageIds.map(async (id) => {
      const filePath = id2Path.get(id);
      if (filePath) {
        try {
          return await u.oss.getImageBase64(filePath);
        } catch {
          return null;
        }
      }
      return null;
    }),
  );
  // Preserve order and filter out invalid items
  return (imageUrls.filter(Boolean) as string[]).map((url) => ({ type: "image" as const, base64: url }));
}
