import express from "express";
import u from "@/utils";
import { success } from "@/lib/responseFormat";
import { currentUser } from "@/middleware/auth";
const router = express.Router();

export default router.get("/", async (req, res) => {
  const userId = currentUser(req)?.id;
  if (!userId) return res.status(200).send(success(null));
  const data = await u.db("o_user").where("id", userId).select("id", "name", "role", "disabled", "createdAt", "lastLoginAt").first();
  if (!data) return res.status(200).send(success(null));
  const projectRow = (await u.db("o_project").where("userId", userId).count("id as total").first()) as { total?: number | string } | undefined;
  res.status(200).send(
    success({
      ...data,
      projectCount: Number(projectRow?.total ?? 0),
    }),
  );
});
