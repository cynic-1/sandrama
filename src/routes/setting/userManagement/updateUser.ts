import express from "express";
import u from "@/utils";
import { db } from "@/utils/db";
import { z } from "zod";
import { success, error } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { currentUser, requireAdmin } from "@/middleware/auth";
import { hashPassword } from "@/utils/auth";
import { setToken } from "@/routes/login/login";

const router = express.Router();

export default router.post(
  "/",
  requireAdmin,
  validateFields({
    id: z.number().int().positive(),
    name: z.string().trim().min(2).max(64).optional(),
    password: z.string().min(6).max(128).optional(),
    role: z.enum(["admin", "user"]).optional(),
    disabled: z.boolean().optional(),
  }),
  async (req, res) => {
    const { id } = req.body;
    const passwordHash = req.body.password === undefined ? undefined : await hashPassword(req.body.password);
    const result = await db.transaction(async (trx) => {
      const target = await trx("o_user").where("id", id).first();
      if (!target) return res.status(404).send(error("User not found"));
      if (Number(id) === Number(currentUser(req)?.id) && req.body.disabled === true) {
        return res.status(400).send(error("Cannot disable the currently signed-in account"));
      }

      const updates: Record<string, unknown> = { updatedAt: Date.now() };
      if (req.body.name !== undefined) {
        const name = String(req.body.name).trim();
        const duplicate = await trx("o_user").whereRaw("lower(name) = lower(?)", [name]).whereNot("id", id).first();
        if (duplicate) return res.status(409).send(error("Username already exists"));
        updates.name = name;
      }
      if (req.body.role !== undefined) updates.role = req.body.role;
      if (req.body.disabled !== undefined) updates.disabled = req.body.disabled;
      if (passwordHash !== undefined) updates.password = passwordHash;
      if (
        req.body.password !== undefined ||
        (req.body.role !== undefined && req.body.role !== target.role) ||
        (req.body.disabled !== undefined && req.body.disabled !== Boolean(target.disabled))
      ) {
        updates.tokenVersion = Number(target.tokenVersion ?? 0) + 1;
      }

      const becomesInactiveAdmin = target.role === "admin" && (updates.role === "user" || updates.disabled === true);
      if (becomesInactiveAdmin) {
        const activeAdmins = (await trx("o_user")
          .where("role", "admin")
          .where("disabled", false)
          .whereNot("id", id)
          .count("id as total")
          .first()) as any;
        if (Number(activeAdmins?.total ?? 0) < 1)
          return res.status(400).send(error("At least one active administrator must remain in the system"));
      }

      await trx("o_user").where("id", id).update(updates);
      return { ...target, ...updates };
    });
    if (res.headersSent || !result || !("name" in result)) return;
    // Editing your own password/role must refresh both cookie and Bearer sessions.
    let token: string | undefined;
    if (Number(id) === Number(currentUser(req)?.id)) {
      const key = await u.db("o_setting").where("key", "tokenKey").first();
      token = setToken(
        {
          id,
          name: result.name,
          role: result.role,
          tokenVersion: result.tokenVersion,
        },
        "12h",
        String(key?.value),
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
          id,
          name: result.name,
          role: result.role,
          token: token ? "Bearer " + token : undefined,
        },
        "User updated successfully",
      ),
    );
  },
);
