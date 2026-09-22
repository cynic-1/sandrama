import express from "express";
import { success } from "@/lib/responseFormat";
import u from "@/utils";
const router = express.Router();

export default router.post("/", async (req, res) => {
  const allData = await u.userSettings.getAgentDeployRows();
  const qrdinaryData = allData.filter((item: any) => !item.key?.includes(":"));
  const advancedData = allData.filter((item: any) => item.key?.includes(":") || item.key == "universalAi");
  res.status(200).send(success({ qrdinaryData, advancedData }));
});
