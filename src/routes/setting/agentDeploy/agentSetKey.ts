import express from "express";
import { success, error } from "@/lib/responseFormat";
import u from "@/utils";
import { z } from "zod";
import { validateFields } from "@/middleware/middleware";
const router = express.Router();

export default router.post(
  "/",
  validateFields({
    key: z.string().optional(),
  }),
  async (req, res) => {
    const { key } = req.body;
    const vendorConfigData = await u.userSettings.getVendorConfig("sanddrama");
    if (!vendorConfigData) return res.status(500).send(error("未找到该供应商配置"));
    if (!vendorConfigData.inputValues) return res.status(500).send(error("未找到模型配置数据"));
    const inputValue = JSON.parse(vendorConfigData.inputValues!);
    inputValue.apiKey = key;
    await u.userSettings.updateVendorConfig("sanddrama", { inputValues: JSON.stringify(inputValue) });
    try {
      const resText = await u.Ai.Text(`sanddrama:claude-haiku-4-5-20251001`).invoke({
        prompt: "1+1等于几？,请直接回答2，不要解释",
      });
      if (resText.text) {
        for (const [agentKey, values] of [
          ["scriptAgent", { model: "claude-sonnet-4-6", modelName: "sanddrama:claude-sonnet-4-6", vendorId: "sanddrama" }],
          ["productionAgent", { model: "claude-sonnet-4-6", modelName: "sanddrama:claude-sonnet-4-6", vendorId: "sanddrama" }],
          ["universalAi", { model: "claude-haiku-4-5", modelName: "sanddrama:claude-haiku-4-5-20251001", vendorId: "sanddrama" }],
        ] as const) {
          const agent = await u.userSettings.getAgentDeployByKey(agentKey);
          if (agent?.id !== undefined) await u.userSettings.updateAgentDeploy(Number(agent.id), values);
        }
        res.status(200).send(success("一键填入成功"));
      }
    } catch (err) {
      console.error(err);
      inputValue.apiKey = "";
      await u.userSettings.updateVendorConfig("sanddrama", { inputValues: JSON.stringify(inputValue) });
      res.status(400).send(error("KEY无效，请重新输入"));
    }
  },
);
