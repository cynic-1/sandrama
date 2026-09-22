import express from "express";
import u from "@/utils";
import { z } from "zod";
import { success, error } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { currentUser, requireAdmin } from "@/middleware/auth";
import { hashPassword } from "@/utils/auth";

const router = express.Router();

export default router.post(
  "/",
  requireAdmin,
  validateFields({
    id: z.number().int().positive(),
    name: z.string().trim().min(1).max(64).optional(),
    password: z.string().min(8).max(128).optional(),
    role: z.enum(["admin", "user"]).optional(),
    disabled: z.boolean().optional(),
  }),
  async (req, res) => {
    const { id } = req.body;
    const target = await u.db("o_user").where("id", id).first();
    if (!target) return res.status(404).send(error("用户不存在"));
    if (Number(id) === Number(currentUser(req)?.id) && req.body.disabled === true) {
      return res.status(400).send(error("不能禁用当前登录账号"));
    }

    const updates: Record<string, unknown> = { updatedAt: Date.now() };
    if (req.body.name !== undefined) {
      const name = String(req.body.name).trim();
      const duplicate = await u.db("o_user").where("name", name).whereNot("id", id).first();
      if (duplicate) return res.status(409).send(error("用户名已存在"));
      updates.name = name;
    }
    if (req.body.role !== undefined) updates.role = req.body.role;
    if (req.body.disabled !== undefined) updates.disabled = req.body.disabled;
    if (req.body.password !== undefined) updates.password = await hashPassword(req.body.password);
    if (req.body.password !== undefined || req.body.role !== undefined || req.body.disabled !== undefined) {
      updates.tokenVersion = Number(target.tokenVersion ?? 0) + 1;
    }

    const becomesInactiveAdmin =
      target.role === "admin" && (updates.role === "user" || updates.disabled === true);
    if (becomesInactiveAdmin) {
      const activeAdmins = (await u.db("o_user").where("role", "admin").where("disabled", false).whereNot("id", id).count("id as total").first()) as any;
      if (Number(activeAdmins?.total ?? 0) < 1) return res.status(400).send(error("系统至少需要保留一个启用的管理员"));
    }

    await u.db("o_user").where("id", id).update(updates);
    res.status(200).send(success("更新用户成功"));
  },
);
