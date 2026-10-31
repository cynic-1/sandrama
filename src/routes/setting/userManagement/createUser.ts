import express from "express";
import { db } from "@/utils/db";
import { z } from "zod";
import { success, error } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { requireAdmin } from "@/middleware/auth";
import { hashPassword } from "@/utils/auth";
import { allocateUserId } from "@/utils/userId";

const router = express.Router();

export default router.post(
  "/",
  requireAdmin,
  validateFields({
    name: z.string().trim().min(2).max(64),
    password: z.string().min(6).max(128),
    role: z.enum(["admin", "user"]).optional(),
  }),
  async (req, res) => {
    const name = String(req.body.name).trim();
    const password = await hashPassword(req.body.password);
    const id = await db.transaction(async (trx) => {
      const exists = await trx("o_user").whereRaw("lower(name) = lower(?)", [name]).first();
      if (exists) return null;
      const id = await allocateUserId(trx);
      const now = Date.now();
      await trx("o_user").insert({
        id,
        name,
        password,
        role: req.body.role === "admin" ? "admin" : "user",
        disabled: false,
        tokenVersion: 0,
        createdAt: now,
        updatedAt: now,
      });
      return id;
    });
    if (id === null) return res.status(409).send(error("Username already exists"));
    res.status(201).send(success({ id, name, role: req.body.role === "admin" ? "admin" : "user" }, "User created successfully"));
  },
);
