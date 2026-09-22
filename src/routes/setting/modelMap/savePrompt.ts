import express from "express";
import { error, success } from "@/lib/responseFormat";
import u from "@/utils";
import { z } from "zod";
import { validateFields } from "@/middleware/middleware";
import path from "path";

const router = express.Router();

export default router.post(
  "/",
  validateFields({
    name: z.string().min(1),
    data: z.string(),
    type: z.enum(["image", "video"]),
  }),
  async (req, res) => {
    const { name, data, type } = req.body;

    const modelPromptRoot = u.getPath(["modelPrompt"]);
    const dir = path.join(modelPromptRoot, type);
    const filePath = path.join(dir, `${name}.md`);
    const resolvedRoot = path.resolve(modelPromptRoot);
    const resolvedFile = path.resolve(filePath);
    if (!resolvedFile.startsWith(resolvedRoot + path.sep)) {
      return res.status(400).send(error("非法路径"));
    }
    const relativePath = path.relative(modelPromptRoot, resolvedFile).replace(/\\/g, "/");
    await u.userSettings.setModelPromptFile(relativePath, data);

    res.status(200).send(success("保存成功"));
  },
);
