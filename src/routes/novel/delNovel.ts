import express from "express";
import u from "@/utils";
import { z } from "zod";
import { success } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import renumberNovelChapters from "@/utils/renumberNovelChapters";
const router = express.Router();

// 删除原文
export default router.post(
  "/",
  validateFields({
    id: z.number(),
  }),
  async (req, res) => {
    const { id } = req.body;
    const novel = await u.db("o_novel").where("id", id).select("projectId").first();
    if (!novel) {
      return res.status(404).send({ code: 404, data: null, message: "原文不存在" });
    }

    const chapterData = await u.db("o_eventChapter").where("novelId", id);
    await u.db("o_eventChapter").where("novelId", id).delete();
    const eventIds = chapterData.map((i) => i.eventId).filter((eventId): eventId is number => eventId !== null && eventId !== undefined);
    if (eventIds.length) await u.db("o_event").whereIn("id", eventIds).delete();
    await u.db("o_novel").where("id", id).del();
    await renumberNovelChapters(Number(novel.projectId));

    res.status(200).send(success({ message: "删除原文成功" }));
  },
);
