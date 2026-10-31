import express from "express";
import { db } from "@/utils/db";
import { z } from "zod";
import { success, error } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { currentUser, requireAdmin } from "@/middleware/auth";

const router = express.Router();

export default router.post("/", requireAdmin, validateFields({ id: z.number().int().positive() }), async (req, res) => {
  const { id } = req.body;
  if (Number(id) === Number(currentUser(req)?.id)) return res.status(400).send(error("Cannot delete the currently logged-in account"));
  await db.transaction(async (trx) => {
    const target = await trx("o_user").where("id", id).first();
    if (!target) return res.status(404).send(error("User not found"));
    if (target.role === "admin") {
      const admins = (await trx("o_user")
        .where("role", "admin")
        .where("disabled", false)
        .whereNot("id", id)
        .count("id as total")
        .first()) as any;
      if (Number(admins?.total ?? 0) < 1) return res.status(400).send(error("At least one active administrator must remain in the system"));
    }
    // Transfer ownership and delete atomically so a failed transfer cannot orphan projects.
    const adminId = currentUser(req)?.id;
    if (adminId) await trx("o_project").where("userId", id).update({ userId: adminId });
    await trx("o_user").where("id", id).delete();
  });
  if (!res.headersSent) res.status(200).send(success("User deleted successfully"));
});
