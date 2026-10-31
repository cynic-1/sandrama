import express from "express";
import u from "@/utils";
import { db } from "@/utils/db";
import { success, error } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { z } from "zod";
import { hashPassword } from "@/utils/auth";
import { setToken } from "@/routes/login/login";
import { allocateUserId } from "@/utils/userId";

const router = express.Router();
const registerAttempts = new Map<string, { count: number; firstAttemptAt: number }>();
const MAX_REGISTER_ATTEMPTS = 8;
const REGISTER_WINDOW_MS = 10 * 60 * 1000;

export default router.post(
  "/",
  validateFields({
    username: z.string().trim().min(2).max(32),
    password: z.string().min(6).max(128),
  }),
  async (req, res) => {
    const username = String(req.body.username).trim();
    const { password } = req.body;

    if (!/^[a-zA-Z0-9_\u4e00-\u9fa5.-]{2,32}$/.test(username)) {
      return res.status(400).send(error("Username must be 2-32 characters (letters, numbers, _, ., -)"));
    }

    const attemptKey = `reg:${req.ip}`;
    const now = Date.now();
    const attempt = registerAttempts.get(attemptKey);
    if (attempt && now - attempt.firstAttemptAt < REGISTER_WINDOW_MS && attempt.count >= MAX_REGISTER_ATTEMPTS) {
      return res.status(429).send(error("Too many registration attempts. Please try again in 10 minutes."));
    }
    if (!attempt || now - attempt.firstAttemptAt >= REGISTER_WINDOW_MS) {
      registerAttempts.set(attemptKey, { count: 1, firstAttemptAt: now });
    } else {
      attempt.count += 1;
    }

    const hashedPassword = await hashPassword(String(password));
    // Serialize the uniqueness check and insert, including concurrent case variants.
    const account = await db.transaction(async (trx) => {
      const exists = await trx("o_user").whereRaw("lower(name) = lower(?)", [username]).first();
      if (exists) return null;
      const count = await trx("o_user").count("id as count").first();
      const role: "admin" | "user" = Number(count?.count ?? 0) === 0 ? "admin" : "user";
      const id = await allocateUserId(trx);
      await trx("o_user").insert({
        id,
        name: username,
        password: hashedPassword,
        role,
        disabled: 0,
        tokenVersion: 0,
        createdAt: now,
        updatedAt: now,
        lastLoginAt: now,
      });
      return { id, role };
    });
    if (!account) return res.status(400).send(error("Username already exists"));
    const { id, role } = account;

    const tokenData = await u.db("o_setting").where("key", "tokenKey").first();
    if (!tokenData?.value) {
      return res.status(500).send(error("Server tokenKey not initialized"));
    }

    const userId = Number(id);
    const token = setToken(
      {
        id: userId,
        name: username,
        role,
        tokenVersion: 0,
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

    return res.status(200).send(
      success(
        {
          token: "Bearer " + token,
          name: username,
          id: userId,
          role,
        },
        "Registration successful",
      ),
    );
  },
);
