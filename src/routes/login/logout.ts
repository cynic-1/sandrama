import express from "express";
import { success } from "@/lib/responseFormat";

const router = express.Router();

export default router.post("/", (_req, res) => {
  res.clearCookie("sd_token", { httpOnly: true, sameSite: "lax" });
  res.status(200).send(success("已退出登录"));
});
