import express from "express";
import u from "@/utils";
import { z } from "zod";
import { success, error } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { currentUser, requireAdmin } from "@/middleware/auth";

const router = express.Router();

export default router.post(
  "/",
  requireAdmin,
  validateFields({ id: z.number().int().positive() }),
  async (req, res) => {
    const { id } = req.body;
    if (Number(id) === Number(currentUser(req)?.id)) return res.status(400).send(error("Cannot delete the currently logged-in account"));
    const target = await u.db("o_user").where("id", id).first();
    if (!target) return res.status(404).send(error("User not found"));
    if (target.role === "admin") {
      const admins = (await u.db("o_user").where("role", "admin").where("disabled", false).whereNot("id", id).count("id as total").first()) as any;
      if (Number(admins?.total ?? 0) < 1) return res.status(400).send(error("At least one active administrator must remain in the system"));
    }
    await u.db("o_user").where("id", id).delete();
    // Reassign projects to current admin so deleting an account does not orphan project data.
    const adminId = currentUser(req)?.id;
    if (adminId) await u.db("o_project").where("userId", id).update({ userId: adminId });
    res.status(200).send(success("User deleted successfully"));
  },
);
