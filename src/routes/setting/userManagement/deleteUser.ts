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
    if (Number(id) === Number(currentUser(req)?.id)) return res.status(400).send(error("不能删除当前登录账号"));
    const target = await u.db("o_user").where("id", id).first();
    if (!target) return res.status(404).send(error("用户不存在"));
    if (target.role === "admin") {
      const admins = (await u.db("o_user").where("role", "admin").where("disabled", false).whereNot("id", id).count("id as total").first()) as any;
      if (Number(admins?.total ?? 0) < 1) return res.status(400).send(error("系统至少需要保留一个启用的管理员"));
    }
    await u.db("o_user").where("id", id).delete();
    // 项目不删除，转交当前管理员，避免删除账号造成客户数据丢失。
    const adminId = currentUser(req)?.id;
    if (adminId) await u.db("o_project").where("userId", id).update({ userId: adminId });
    res.status(200).send(success("删除用户成功"));
  },
);
