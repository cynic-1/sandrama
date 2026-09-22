import express from "express";
import u from "@/utils";
import { success } from "@/lib/responseFormat";
import { currentUser } from "@/middleware/auth";
import { isAdmin } from "@/utils/auth";
const router = express.Router();

// 获取项目
export default router.post("/", async (req, res) => {
  const user = currentUser(req)!;
  const query = u.db("o_project").select("*");
  if (!isAdmin(user)) query.where("userId", user.id);
  const data = await query;
  res.status(200).send(success(data));
});
