import express from "express";
import u from "@/utils";
import { db } from "@/utils/db";
import { z } from "zod";
import { success, error } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { currentUser } from "@/middleware/auth";
import { hashPassword } from "@/utils/auth";
import { setToken } from "@/routes/login/login";
const router = express.Router();

export default router.post(
  "/",
  validateFields({
    name: z.string().trim().min(2).max(64),
    password: z.string().max(128).optional().or(z.literal("")),
    id: z.number().int().positive().optional(),
  }),
  async (req, res) => {
    const user = currentUser(req);
    if (!user || (req.body.id !== undefined && Number(req.body.id) !== user.id)) {
      return res.status(403).send(error("You can only modify your own account"));
    }
    const nextName = req.body.name.trim();
    const rawPassword = typeof req.body.password === "string" ? req.body.password : "";
    if (rawPassword && rawPassword.length < 6) {
      return res.status(400).send(error("Password must be at least 6 characters"));
    }
    const passwordHash = rawPassword ? await hashPassword(rawPassword) : undefined;
    const nextTokenVersion = await db.transaction(async (trx) => {
      const duplicate = await trx("o_user").whereRaw("lower(name) = lower(?)", [nextName]).whereNot("id", user.id).first();
      if (duplicate) return null;
      const latest = await trx("o_user").where("id", user.id).first();
      const version = Number(latest?.tokenVersion ?? 0) + (rawPassword ? 1 : 0);
      const updates: Record<string, unknown> = {
        name: nextName,
        tokenVersion: version,
        updatedAt: Date.now(),
      };
      if (passwordHash) updates.password = passwordHash;
      await trx("o_user").where("id", user.id).update(updates);
      return version;
    });
    if (nextTokenVersion === null) return res.status(409).send(error("Username already exists"));

    const tokenData = await u.db("o_setting").where("key", "tokenKey").first();
    let token: string | undefined;
    if (tokenData?.value) {
      token = setToken(
        {
          id: user.id,
          name: nextName,
          role: user.role,
          tokenVersion: nextTokenVersion,
        },
        "12h",
        String(tokenData.value),
      );
      res.cookie("sd_token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "prod" && process.env.HTTPS === "1",
        maxAge: 12 * 60 * 60 * 1000,
      });
    }

    res.status(200).send(
      success(
        {
          id: user.id,
          name: nextName,
          role: user.role,
          token: token ? "Bearer " + token : undefined,
        },
        "Account updated successfully",
      ),
    );
  },
);
