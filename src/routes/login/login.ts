import express from "express";
import u from "@/utils";
import jwt from "jsonwebtoken";
import { success, error } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { z } from "zod";
import { hashPassword, isLegacyPassword, verifyPassword } from "@/utils/auth";
const router = express.Router();
const failedAttempts = new Map<string, { count: number; firstAttemptAt: number }>();
const MAX_LOGIN_ATTEMPTS = 5;
const LOGIN_WINDOW_MS = 10 * 60 * 1000;

export function setToken(payload: string | object, expiresIn: string | number, secret: string): string {
  if (!payload || typeof secret !== "string" || !secret) {
    throw new Error("参数不合法");
  }
  return (jwt.sign as any)(payload, secret, { expiresIn });
}

// 登录
export default router.post(
  "/",
  validateFields({
    username: z.string(),
    password: z.string(),
  }),
  async (req, res) => {
    const username = String(req.body.username).trim();
    const { password } = req.body;
    const attemptKey = `${req.ip}:${username.toLowerCase()}`;
    const attempt = failedAttempts.get(attemptKey);
    if (attempt && Date.now() - attempt.firstAttemptAt < LOGIN_WINDOW_MS && attempt.count >= MAX_LOGIN_ATTEMPTS) {
      return res.status(429).send(error("登录失败次数过多，请 10 分钟后再试"));
    }
    if (attempt && Date.now() - attempt.firstAttemptAt >= LOGIN_WINDOW_MS) failedAttempts.delete(attemptKey);

    const data = await u.db("o_user").where("name", "=", username).first();
    if (!data || Number(data.disabled) === 1) {
      registerFailedAttempt(attemptKey);
      return res.status(400).send(error("用户名或密码错误"));
    }

    if (await verifyPassword(password, String(data.password))) {
      failedAttempts.delete(attemptKey);
      const tokenData = await u.db("o_setting").where("key", "tokenKey").first();
      if (!tokenData) return res.status(400).send(error("未找到tokenKey"));
      const tokenVersion = Number(data.tokenVersion ?? 0);
      const token = setToken(
        {
          id: data.id,
          name: data.name,
          role: data.role === "admin" ? "admin" : "user",
          tokenVersion,
        },
        "12h",
        tokenData.value as string,
      );
      const updates: Record<string, unknown> = { lastLoginAt: Date.now(), updatedAt: Date.now() };
      if (isLegacyPassword(String(data.password))) updates.password = await hashPassword(password);
      await u.db("o_user").where("id", data.id).update(updates);

      res.cookie("sd_token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "prod" && process.env.HTTPS === "1",
        maxAge: 12 * 60 * 60 * 1000,
      });
      return res.status(200).send(
        success({ token: "Bearer " + token, name: data.name, id: data.id, role: data.role === "admin" ? "admin" : "user" }, "登录成功"),
      );
    } else {
      registerFailedAttempt(attemptKey);
      return res.status(400).send(error("用户名或密码错误"));
    }
  },
);

function registerFailedAttempt(key: string) {
  const now = Date.now();
  const current = failedAttempts.get(key);
  if (!current || now - current.firstAttemptAt >= LOGIN_WINDOW_MS) {
    failedAttempts.set(key, { count: 1, firstAttemptAt: now });
  } else {
    current.count += 1;
  }
}
