import express from "express";
import u from "@/utils";
import { success, error } from "@/lib/responseFormat";
import { englishBuiltinLabel } from "@/utils/englishLabels";

const router = express.Router();

export default router.post("/", async (req, res) => {
  const list = await u.userSettings.getPromptRows();
  const data = await Promise.all(
    list.map(async (item) => {
      return {
        ...item,
        name: englishBuiltinLabel(item.name),
        data: item.useData ? item.useData : item.data,
      };
    }),
  );
  res.status(200).send(success(data));
});
