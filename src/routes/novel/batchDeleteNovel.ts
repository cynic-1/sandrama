import express from "express";
import u from "@/utils";
import { z } from "zod";
import { error, success } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import renumberNovelChapters from "@/utils/renumberNovelChapters";
const router = express.Router();

export default router.post(
  "/",
  validateFields({
    ids: z.array(z.number()),
  }),
  async (req, res) => {
    const { ids } = req.body;
    if (!ids.length) {
      return res.status(400).send(error("Please select the content to be deleted"));
    }
    const novels = await u.db("o_novel").whereIn("id", ids).select("id", "projectId");
    const projectIds = [...new Set(novels.map((novel) => Number(novel.projectId)).filter(Number.isFinite))];
    const chapterData = await u.db("o_eventChapter").whereIn("novelId", ids);
    await u.db("o_eventChapter").whereIn("novelId", ids).delete();
    const eventIds = chapterData.map((i) => i.eventId).filter((eventId): eventId is number => eventId !== null && eventId !== undefined);
    if (eventIds.length) await u.db("o_event").whereIn("id", eventIds).delete();

    await u.db("o_novel").whereIn("id", ids).del();
    for (const projectId of projectIds) await renumberNovelChapters(projectId);

    res.status(200).send(success({ message: "The original text was successfully deleted" }));
  },
);
