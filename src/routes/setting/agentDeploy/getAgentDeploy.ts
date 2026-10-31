import express from "express";
import { success } from "@/lib/responseFormat";
import u from "@/utils";
import { englishBuiltinLabel } from "@/utils/englishLabels";
const router = express.Router();

export default router.post("/", async (req, res) => {
  const allData = await u.userSettings.getAgentDeployRows();
  const displayData = allData.map((item: any) => ({
    ...item,
    name: englishBuiltinLabel(item.name),
    desc: englishBuiltinLabel(item.desc),
  }));
  const qrdinaryData = displayData.filter((item: any) => !item.key?.includes(":"));
  const advancedData = displayData.filter((item: any) => item.key?.includes(":") || item.key == "universalAi");
  res.status(200).send(success({ qrdinaryData, advancedData }));
});
