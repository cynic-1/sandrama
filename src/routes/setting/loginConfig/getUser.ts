import express from "express";
import u from "@/utils";
import { success } from "@/lib/responseFormat";
import { currentUser } from "@/middleware/auth";
const router = express.Router();

export default router.get("/", async (req, res) => {
  const userId = currentUser(req)?.id;
  const data = userId
    ? await u.db("o_user").where("id", userId).select("id", "name", "role", "disabled", "createdAt", "lastLoginAt").first()
    : null;
  res.status(200).send(success(data));
});
