import express from "express";
import { success, error } from "@/lib/responseFormat";
import u from "@/utils";

const router = express.Router();

export default router.get("/", async (req, res) => {
  const useMode = await u.userSettings.getSetting("agentUseMode");
  console.log("%c Line:9 🍓 useMode", "background:#33a5ff", useMode);
  res.status(200).send(success(useMode?.value || "0"));
});
