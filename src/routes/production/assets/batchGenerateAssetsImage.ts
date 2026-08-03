import express from "express";
import { z } from "zod";
import { success } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { startDerivativeAssetImageGeneration } from "@/utils/derivativeAssetImageGeneration";

const router = express.Router();

export default router.post(
  "/",
  validateFields({
    assetIds: z.array(z.number()),
    projectId: z.number(),
    scriptId: z.number(),
    concurrentCount: z.number().int().min(1).optional(),
  }),
  async (req, res) => {
    try {
      const result = await startDerivativeAssetImageGeneration(req.body);
      return res.status(200).send(success(result, "已开始生成资产图片"));
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return res.status(400).send({ code: 400, data: null, message });
    }
  },
);
