import express from "express";
import u from "@/utils";
import { success } from "@/lib/responseFormat";
import { requireAdmin } from "@/middleware/auth";

const router = express.Router();

export default router.get("/", requireAdmin, async (_req, res) => {
  const users = await u
    .db("o_user")
    .select("id", "name", "role", "disabled", "createdAt", "updatedAt", "lastLoginAt")
    .orderBy("id", "asc");
  res.status(200).send(success(users));
});
