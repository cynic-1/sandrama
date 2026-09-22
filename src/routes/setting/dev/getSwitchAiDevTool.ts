import express from "express";
import { success, error } from "@/lib/responseFormat";
import u from "@/utils";
import initDB from "@/lib/initDB";

const router = express.Router();

export default router.get("/", async (req, res) => {
    const switchAiDevTool = await u.userSettings.getSetting("switchAiDevTool");
    res.status(200).send(success(switchAiDevTool?.value || "0"));
});
