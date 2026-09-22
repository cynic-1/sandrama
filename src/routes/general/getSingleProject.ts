import express from "express";
import u from "@/utils";
import { z } from "zod";
import { success } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { currentUser } from "@/middleware/auth";
import { isAdmin } from "@/utils/auth";
const router = express.Router();

// 获取单个项目
export default router.post(
  "/",
  validateFields({
    id: z.number(),
  }),
  async (req, res) => {
    const { id } = req.body;

    const query = u.db("o_project").where("id", id).select("*");
    if (!isAdmin(currentUser(req)!)) query.andWhere("userId", currentUser(req)!.id);
    const data = await query;

    res.status(200).send(success(data));
  }
);
