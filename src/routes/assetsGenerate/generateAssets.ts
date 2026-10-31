import express from "express";
import u from "@/utils";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { error, success } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";

const router = express.Router();

type AssetType = "role" | "scene" | "tool";

interface AssetTypeConfig {
  label: string;
  taskClass: string;
  dir: string;
  promptTitle: string;
  promptEnd: string;
}

const assetTypeConfig: Record<AssetType, AssetTypeConfig> = {
  role: {
    label: "Role",
    taskClass: "Character image generation",
    dir: "role",
    promptTitle: "Character Standard Four-View",
    promptEnd: "Character Four-View",
  },
  scene: {
    label: "Scene",
    taskClass: "Scene graph generation",
    dir: "scene",
    promptTitle: "Standard scene graph",
    promptEnd: "Standard scene graph",
  },
  tool: {
    label: "Props",
    taskClass: "Prop image generation",
    dir: "props",
    promptTitle: "Standard prop image",
    promptEnd: "Standard prop image",
  },
};

// ─── Build Generation Prompt ──────────────────────────────────────────

function buildPrompt(cfg: AssetTypeConfig, artStyle: string, name: string, prompt: string): string {
  return `Please generate based on the following parameters${cfg.promptTitle}:

    **Basic Parameters:**
    - Art Style:{artStyle || "Not specified"}

    **${cfg.label}Setting:
    - Name:{name},
    - Prompt:{prompt},

    Please generate strictly in accordance with the system specifications{cfg.promptEnd}。
  `;
}

// ─── Generate Asset Images ────────────────────────────────────────────

const requestSchema = {
  projectId: z.number(),
  model: z.string(),
  resolution: z.string(),
  id: z.number(),
  type: z.enum(["role", "scene", "tool", "storyboard"]),
  name: z.string(),
  prompt: z.string(),
  base64: z.string().optional().nullable(),
};

export default router.post("/", validateFields(requestSchema), async (req, res) => {
  const { projectId, model, resolution, id, type, name, prompt, base64 } = req.body;

  // 1. Query project & retrieve type configuration
  const project = await u.db("o_project").where("id", projectId).select("artStyle", "type", "intro").first();
  if (!project) return res.status(500).send(success({ message: "The project is empty" }));

  const cfg = assetTypeConfig[type as AssetType];
  if (!cfg) return res.status(400).send(error("Unsupported type"));

  // 2. Create image placeholder record
  const [imageId] = await u.db("o_image").insert({
    type,
    state: "Generating",
    assetsId: id,
    model: model.split(/:(.+)/)[1],
    resolution,
  });
  await u.db("o_assets").where("id", id).update({ imageId });

  // 3. Prepare generation parameters
  const imagePath = `/${projectId}/${cfg.dir}/${uuidv4()}.jpg`;
  const userPrompt = buildPrompt(cfg, project.artStyle!, name, prompt);
  const describe = `Generate${cfg.label}Figure, Name:{name}, Prompt:{prompt}`;
  const relatedObjects = { id, projectId, type: cfg.label };

  try {
    const aiImage = u.Ai.Image(model);
    await aiImage.run(
      {
        prompt: userPrompt,
        referenceList: base64 ? [{ type: "image", base64 }] : [],
        size: resolution,
        aspectRatio: "16:9",
      },
      {
        taskClass: cfg.taskClass,
        describe,
        projectId,
        relatedObjects: JSON.stringify(relatedObjects),
      },
    );
    aiImage.save(imagePath);
    // 5. Update Records & Return Results
    const imageData = await u.db("o_image").where("id", imageId).select("*").first();
    if (!imageData) return res.status(500).send("The asset has been deleted");
    if (imageData.state === "Generation failed") return;
    await u
      .db("o_image")
      .where("id", imageId)
      .update({
        state: "Completed",
        filePath: imagePath,
        type,
        model: model.split(/:(.+)/)[1],
        resolution,
      });

    const path = await u.oss.getSmallImageUrl(imagePath);
    await u.db("o_assets").where("id", id).update({ imageId });

    return res.status(200).send(success({ path, assetsId: id }));
  } catch (e) {
    await u
      .db("o_image")
      .where("id", imageId)
      .update({ state: "Generation failed", errorReason: u.error(e).message });
    return res.status(400).send(error(u.error(e).message || "Image generation failed"));
  }
});
