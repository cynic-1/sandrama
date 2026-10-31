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
    path: z.string(),
  }),
  async (req, res) => {
    const { path: filePath } = req.body;

    const modelPromptRoot = u.getPath(["modelPrompt"]);

    // Path tunneling detection
    const resolvedRoot = path.resolve(modelPromptRoot);
    const resolvedFile = path.resolve(modelPromptRoot, filePath);
    if (!resolvedFile.startsWith(resolvedRoot + path.sep)) {
      return res.status(400).send(error("Invalid path"));
    }

    await u.userSettings.deleteModelPromptFile(filePath);
    res.status(200).send(success("Deletion successful"));
  },
);
