import express from "express";
import u from "@/utils";
import { z } from "zod";
import { success } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { currentUser } from "@/middleware/auth";
import { isAdmin } from "@/utils/auth";
const router = express.Router();

// 新增项目
export default router.post(
  "/",
  validateFields({
    id: z.number(),
    name: z.string(),
    intro: z.string(),
    type: z.string(),
    artStyle: z.string(),
    directorManual: z.string(),
    videoRatio: z.string(),
    imageModel: z.string(),
    videoModel: z.string(),
    projectType: z.string(),
    imageQuality: z.string(),
    mode: z.string(),
  }),
  async (req, res) => {
    const { id, name, intro, type, artStyle, videoRatio, directorManual, imageModel, videoModel, imageQuality, projectType, mode } = req.body;

    const query = u.db("o_project").where("id", id);
    if (!isAdmin(currentUser(req)!)) query.andWhere("userId", currentUser(req)!.id);
    const updated = await query.update({
      name,
      intro,
      type,
      artStyle,
      videoRatio,
      directorManual,
      imageModel,
      videoModel,
      imageQuality,
      projectType,
      mode,
    });

    if (!updated) return res.status(404).send({ message: "项目不存在或无权访问" });
    res.status(200).send(success({ message: "编辑项目成功" }));
  },
);
