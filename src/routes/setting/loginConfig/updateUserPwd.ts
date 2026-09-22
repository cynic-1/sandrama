import express from "express";
import u from "@/utils";
import { z } from "zod";
import { success, error } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { currentUser } from "@/middleware/auth";
import { hashPassword } from "@/utils/auth";
const router = express.Router();

export default router.post(
  "/",
  validateFields({
    name: z.string().trim().min(1).max(64),
    password: z.string().min(8).max(128),
    id: z.number().int().positive(),
  }),
  async (req, res) => {
    const user = currentUser(req);
    if (!user || Number(req.body.id) !== user.id) return res.status(403).send(error("只能修改当前账号"));
    const duplicate = await u.db("o_user").where("name", req.body.name.trim()).whereNot("id", user.id).first();
    if (duplicate) return res.status(409).send(error("用户名已存在"));
    await u.db("o_user").where("id", user.id).update({
      name: req.body.name.trim(),
      password: await hashPassword(req.body.password),
      tokenVersion: user.tokenVersion + 1,
      updatedAt: Date.now(),
    });
    res.status(200).send(success("保存设置成功，请重新登录"));
  },
);
