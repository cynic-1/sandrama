import express from "express";
import u from "@/utils";
import { z } from "zod";
import { success, error } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { requireAdmin } from "@/middleware/auth";
import { hashPassword } from "@/utils/auth";

const router = express.Router();

export default router.post(
  "/",
  requireAdmin,
  validateFields({
    name: z.string().trim().min(1).max(64),
    password: z.string().min(8).max(128),
    role: z.enum(["admin", "user"]).optional(),
  }),
  async (req, res) => {
    const name = String(req.body.name).trim();
    const exists = await u.db("o_user").where("name", name).first();
    if (exists) return res.status(409).send(error("用户名已存在"));
    const max = (await u.db("o_user").max("id as maxId").first()) as any;
    const id = Math.max(Number(max?.maxId ?? 0) + 1, Date.now());
    const now = Date.now();
    await u.db("o_user").insert({
      id,
      name,
      password: await hashPassword(req.body.password),
      role: req.body.role === "admin" ? "admin" : "user",
      disabled: false,
      tokenVersion: 0,
      createdAt: now,
      updatedAt: now,
    });
    res.status(201).send(success({ id, name, role: req.body.role === "admin" ? "admin" : "user" }, "创建用户成功"));
  },
);
