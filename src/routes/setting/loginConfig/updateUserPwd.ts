import express from "express";
import u from "@/utils";
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
    const rawPassword = typeof req.body.password === "string" ? req.body.password.trim() : "";
    if (rawPassword && rawPassword.length < 6) {
      return res.status(400).send(error("Password must be at least 6 characters"));
    }
    const duplicate = await u.db("o_user").whereRaw("lower(name) = lower(?)", [nextName]).whereNot("id", user.id).first();
    if (duplicate) return res.status(409).send(error("Username already exists"));

    const nextTokenVersion = rawPassword ? user.tokenVersion + 1 : user.tokenVersion;
    const updates: Record<string, unknown> = {
      name: nextName,
      tokenVersion: nextTokenVersion,
      updatedAt: Date.now(),
    };
    if (rawPassword) {
      updates.password = await hashPassword(rawPassword);
    }
    await u.db("o_user").where("id", user.id).update(updates);

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
