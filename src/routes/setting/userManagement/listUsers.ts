import express from "express";
import u from "@/utils";
import { success } from "@/lib/responseFormat";
import { requireAdmin } from "@/middleware/auth";

const router = express.Router();

export default router.get("/", requireAdmin, async (_req, res) => {
  const [users, projectCounts] = await Promise.all([
    u
      .db("o_user")
      .select("id", "name", "role", "disabled", "createdAt", "updatedAt", "lastLoginAt")
      .orderBy("id", "asc"),
    u
      .db("o_project")
      .select("userId")
      .count("id as projectCount")
      .groupBy("userId"),
  ]);
  const countMap = new Map<number, number>();
  for (const row of projectCounts as any[]) {
    if (row.userId !== undefined && row.userId !== null) {
      countMap.set(Number(row.userId), Number(row.projectCount ?? 0));
    }
  }
  const enriched = users.map((user: any) => ({
    ...user,
    projectCount: countMap.get(Number(user.id)) ?? 0,
  }));
  res.status(200).send(success(enriched));
});
