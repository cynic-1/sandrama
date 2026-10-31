import express from "express";
import u from "@/utils";
import * as zod from "zod";
import { error, success } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
const router = express.Router();


type ItemType = "characters" | "props" | "scenes";

// Polish the prompt
export default router.post(
  "/",
  validateFields({
    assetsId: zod.number(),
    projectId: zod.number(),
    type: zod.string(),
    name: zod.string(),
    describe: zod.string(),
  }),
  async (req, res) => {
    const { assetsId, projectId, type, name, describe } = req.body;
    // Get style
    const project = await u.db("o_project").where("id", projectId).select("artStyle", "type", "intro").first();
    // If no corresponding project is found, return an error.
    if (!project) return res.status(500).send(success({ message: "The project is empty" }));

    await u.db("o_assets").where("id", assetsId).update({ promptState: "Generating" });

    // Query whether the asset is a derivative asset
    const assetsData = await u.db("o_assets").where("id", assetsId).select("assetsId").first();
    if (!assetsData) return { code: 500, message: "The asset does not exist" };
    const typeConfig: Record<string, { promptKey: string; itemType: ItemType; label: string; nameLabel: string; visualManual: string }> = {
      role: {
        promptKey: "role-polish",
        itemType: "characters",
        label: "Character Standard Four-View",
        nameLabel: "Role",
        visualManual: assetsData.assetsId ? "art_character_derivative" : "art_character",
      },
      scene: {
        promptKey: "scene-polish",
        itemType: "scenes",
        label: "Scene graph",
        nameLabel: "Scene",
        visualManual: assetsData.assetsId ? "art_scene_derivative" : "art_scene",
      },
      tool: {
        promptKey: "tool-polish",
        itemType: "props",
        label: "Prop image",
        nameLabel: "Props",
        visualManual: assetsData.assetsId ? "art_prop_derivative" : "art_prop",
      },
    };

    const config = typeConfig[type];
    if (!config) return res.status(500).send(error("Unsupported type"));
    if (!config.visualManual) return res.status(500).send(error("Visual manual undefined"));
    // Obtained the visual manual
    const visualManual = await u.getArtPrompt(project.artStyle as string, "art_skills", config.visualManual);
    if (!visualManual) return res.status(500).send(error("Visual manual undefined"));
    const systemPrompt = visualManual;
    try {
      const { _output } = (await u.Ai.Text("universalAi").invoke({
        system: systemPrompt,
        messages: [
          {
            role: "user",
            content: `**Basic parameters:**${config.nameLabel}Setting: **{config.nameLabel}Name:{name},
      - ${config.nameLabel}Description:{describe},`,
          },
        ],
      })) as any;

      if (!_output) return res.status(500).send("Failed");
      await u.db("o_assets").where("id", assetsId).update({ prompt: _output, promptState: "Completed" });

      res.status(200).send(success({ prompt: _output, assetsId }));
    } catch (e: any) {
      await u
        .db("o_assets")
        .where("id", assetsId)
        .update({ promptState: "Failed", promptErrorReason: u.error(e).message });
      return res.status(500).send(error(e?.data?.error?.message ?? e?.message ?? "Generation failed"));
    }
  },
);
