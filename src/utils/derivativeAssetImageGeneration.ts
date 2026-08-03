import pLimit from "p-limit";
import u from "@/utils";

export type DerivativeAssetGenerationState = "生成中" | "已完成" | "生成失败";

export interface DerivativeAssetGenerationItem {
  id: number;
  imageId: number;
  state: DerivativeAssetGenerationState;
  src: string;
  errorReason?: string;
}

interface GenerationAssetRow {
  id: number;
  describe: string | null;
  name: string;
  type: string;
  assetsId: number | null;
  parentDescribe?: string;
}

interface ProjectImageSettings {
  imageModel: string | null;
  imageQuality: string | null;
  artStyle: string | null;
}

interface StartDerivativeAssetGenerationOptions {
  assetIds: number[];
  projectId: number;
  scriptId: number;
  concurrentCount?: number;
}

const imageQualityValues = new Set(["1K", "2K", "4K"]);

function getErrorMessage(error: unknown): string {
  return u.error(error).message || "衍生资产图片生成失败";
}

function getPromptRecord(artStyle: string | null | undefined) {
  const style = artStyle || "";
  return {
    role: u.getArtPrompt(style, "art_skills", "art_character_derivative"),
    tool: u.getArtPrompt(style, "art_skills", "art_prop_derivative"),
    scene: u.getArtPrompt(style, "art_skills", "art_scene_derivative"),
  };
}

async function markPendingImagesFailed(imageIds: number[], reason: string) {
  if (!imageIds.length) return;
  try {
    await u.db("o_image").whereIn("id", imageIds).andWhere("state", "生成中").update({
      state: "生成失败",
      errorReason: reason,
    });
  } catch (error) {
    console.error("[derivativeAssets] 标记批量失败状态失败:", getErrorMessage(error));
  }
}

async function generateSingleDerivativeAsset(
  item: GenerationAssetRow,
  imageId: number,
  settings: ProjectImageSettings,
  promptRecord: Record<string, string>,
  imageUrlRecord: Record<number, string>,
  projectId: number,
  scriptId: number,
): Promise<DerivativeAssetGenerationItem> {
  try {
    const typePrompt = promptRecord[item.type] || promptRecord.role;
    const { text } = await u.Ai.Text("universalAi").invoke({
      system: typePrompt,
      messages: [
        {
          role: "user",
          content: `
            父级资产描述: ${item.parentDescribe || "无详细描述"}
            当前资产描述: ${item.describe || "无详细描述"}`,
        },
      ],
    });

    const prompt = String(text || "").trim();
    if (!prompt) throw new Error("universalAi 未返回有效的衍生资产提示词");

    await u.db("o_assets").where("id", item.id).update({ prompt });

    const imageBase64 = imageUrlRecord[item.assetsId || -1]
      ? await u.oss.getImageBase64(imageUrlRecord[item.assetsId || -1])
      : null;
    const imageConfig = {
      prompt,
      size: settings.imageQuality as "1K" | "2K" | "4K",
      aspectRatio: "16:9" as `${number}:${number}`,
    };
    const imageCls = await u.Ai.Image(settings.imageModel as `${string}:${string}`).run(
      {
        referenceList: imageBase64 ? [{ type: "image", base64: imageBase64 }] : [],
        ...imageConfig,
      },
      {
        taskClass: "生成图片",
        describe: "衍生资产图片生成",
        relatedObjects: JSON.stringify({ assetId: item.id, ...imageConfig }),
        projectId,
      },
    );

    const savePath = `/${projectId}/assets/${scriptId}/${item.type}/${u.uuid()}.jpg`;
    await imageCls.save(savePath);
    await u.db("o_image").where({ id: imageId }).update({
      state: "已完成",
      filePath: savePath,
      errorReason: null,
    });

    return {
      id: item.id,
      imageId,
      state: "已完成",
      src: await u.oss.getSmallImageUrl(savePath),
    };
  } catch (error) {
    const errorReason = getErrorMessage(error);
    try {
      await u.db("o_image").where({ id: imageId }).update({
        state: "生成失败",
        errorReason,
      });
    } catch (updateError) {
      console.error(`[derivativeAssets] 资产 ${item.id} 更新失败状态失败:`, getErrorMessage(updateError));
    }
    console.error(`[derivativeAssets] 资产 ${item.id} 生成失败:`, errorReason);
    return {
      id: item.id,
      imageId,
      state: "生成失败",
      src: "",
      errorReason,
    };
  }
}

async function runDerivativeAssetGeneration(
  assets: GenerationAssetRow[],
  imageIdMap: Record<number, number>,
  settings: ProjectImageSettings,
  promptRecord: Record<string, string>,
  imageUrlRecord: Record<number, string>,
  projectId: number,
  scriptId: number,
  concurrentCount: number,
) {
  const limit = pLimit(concurrentCount);
  await Promise.all(
    assets.map((item) =>
      limit(() =>
        generateSingleDerivativeAsset(
          item,
          imageIdMap[item.id],
          settings,
          promptRecord,
          imageUrlRecord,
          projectId,
          scriptId,
        ),
      ),
    ),
  );
}

export async function startDerivativeAssetImageGeneration(
  options: StartDerivativeAssetGenerationOptions,
): Promise<DerivativeAssetGenerationItem[]> {
  const { projectId, scriptId } = options;
  const assetIds = [...new Set(options.assetIds)];
  const concurrentCount = Math.max(1, Math.floor(options.concurrentCount ?? 5));

  if (!assetIds.length) throw new Error("未提供需要生成的衍生资产");

  const settings = await u
    .db("o_project")
    .where("id", projectId)
    .select("imageModel", "imageQuality", "artStyle")
    .first() as ProjectImageSettings | undefined;

  if (!settings) throw new Error(`项目不存在，ID: ${projectId}`);
  if (!settings.imageModel) throw new Error("项目未配置图像模型");
  if (!settings.imageQuality || !imageQualityValues.has(settings.imageQuality)) {
    throw new Error("项目未配置有效的图像分辨率（1K、2K 或 4K）");
  }

  const assets = (await u
    .db("o_assets")
    .whereIn("id", assetIds)
    .select("id", "describe", "name", "type", "assetsId")) as GenerationAssetRow[];
  const foundIds = new Set(assets.map((item) => item.id));
  const missingIds = assetIds.filter((id) => !foundIds.has(id));
  if (missingIds.length) throw new Error(`衍生资产不存在：${missingIds.join(", ")}`);

  const parentIds = [...new Set(assets.map((item) => item.assetsId).filter((id): id is number => id !== null))];
  const parentAssets = parentIds.length
    ? await u
        .db("o_assets")
        .leftJoin("o_image", "o_assets.imageId", "o_image.id")
        .whereIn("o_assets.id", parentIds)
        .select("o_assets.id", "o_image.filePath", "o_assets.describe")
    : [];
  const parentById = new Map(parentAssets.map((item: any) => [item.id, item]));
  const imageUrlRecord: Record<number, string> = {};
  for (const parent of parentAssets as any[]) {
    if (parent.filePath) imageUrlRecord[parent.id] = parent.filePath;
  }
  for (const item of assets) {
    const parent = parentById.get(item.assetsId as number) as any;
    if (parent) item.parentDescribe = parent.describe;
  }

  const promptRecord = getPromptRecord(settings.artStyle);
  const imageIdMap: Record<number, number> = {};
  const accepted: DerivativeAssetGenerationItem[] = [];

  for (const item of assets) {
    const [imageId] = await u.db("o_image").insert({
      assetsId: item.id,
      type: item.type,
      state: "生成中",
      resolution: settings.imageQuality,
      model: settings.imageModel,
      errorReason: null,
    });
    imageIdMap[item.id] = imageId;
    await u.db("o_assets").where("id", item.id).update({ imageId });
    accepted.push({ id: item.id, imageId, state: "生成中", src: "" });
  }

  const imageIds = accepted.map((item) => item.imageId);
  void runDerivativeAssetGeneration(
    assets,
    imageIdMap,
    settings,
    promptRecord,
    imageUrlRecord,
    projectId,
    scriptId,
    concurrentCount,
  ).catch(async (error) => {
    const errorReason = getErrorMessage(error);
    console.error("[derivativeAssets] 批量生成异常:", errorReason);
    await markPendingImagesFailed(imageIds, errorReason);
  });

  return accepted;
}
