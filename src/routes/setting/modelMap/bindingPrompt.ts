import express from "express";
import { error, success } from "@/lib/responseFormat";
import u from "@/utils";
import { z } from "zod";
import { validateFields } from "@/middleware/middleware";
const router = express.Router();

export default router.post(
  "/",
  validateFields({
    vendorId: z.string(),
    model: z.string(),
    path: z.string(),
    fileName: z.string(),
  }),
  async (req, res) => {
    const { vendorId, model, path, fileName } = req.body;
    await u.userSettings.saveModelPrompt({ vendorId, model, path, fileName });
    res.status(200).send(success("绑定成功"));
  },
);
