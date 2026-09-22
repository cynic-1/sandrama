import express from "express";
import { error, success } from "@/lib/responseFormat";
import u from "@/utils";
import fg from "fast-glob";
import fs from "fs/promises";
import path from "path";
const router = express.Router();

export default router.get("/", async (req, res) => {
  const modelPromptRoot = u.getPath(["modelPrompt"]);

  const entries = [
    ...new Set([
      ...(await fg("**/*.md", {
        cwd: modelPromptRoot.replace(/\\/g, "/"),
        onlyFiles: true,
      })),
      ...(await u.userSettings.getModelPromptFilePaths()),
    ]),
  ];

  const result = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(modelPromptRoot, entry);
      const content = await u.userSettings.getModelPromptFile(entry, () => fs.readFile(fullPath, "utf-8"));
      if (content === undefined) return null;
      const name = path.basename(entry, ".md");
      const type = entry.includes("/") ? entry.split("/")[0] : "";
      return { path: entry, name, type, data: content };
    }),
  );

  res.status(200).send(success(result.filter(Boolean)));
});
