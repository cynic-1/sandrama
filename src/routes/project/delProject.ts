import express from "express";
import u from "@/utils";
import { z } from "zod";
import { success } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { currentUser } from "@/middleware/auth";
import { isAdmin } from "@/utils/auth";
const router = express.Router();

// Delete project
export default router.post(
  "/",
  validateFields({
    id: z.number(),
  }),
  async (req, res) => {
    const { id } = req.body;
    const projectQuery = u.db("o_project").where("id", id);
    if (!isAdmin(currentUser(req)!)) projectQuery.andWhere("userId", currentUser(req)!.id);
    const project = await projectQuery.select("id").first();
    if (!project) return res.status(404).send({ message: "The project does not exist or you do not have access permission" });
    // Delete project
    await u.db("o_project").where("id", id).delete();
    await u.db("o_agentWorkData").where("projectId", id).delete();
    // Delete the original text under the project
    await u.db("o_novel").where("projectId", id).delete();
    // Delete the script information under the project
    const scriptData = await u.db("o_script").where("projectId", id).select("id");
    const scriptIds = scriptData.map((item: any) => item.id);
    if (scriptIds && scriptIds.length > 0) {
      await u.db("o_scriptAssets").whereIn("scriptId", scriptIds).delete();
    }
    await u.db("o_script").where("projectId", id).delete();
    // Delete tasks under the project
    await u.db("o_tasks").where("projectId", id).delete();
    // Delete the storyboard under the project
    const storyboardData = await u.db("o_storyboard").where("projectId", id).select("id");
    const storyboardIds = storyboardData.map((item: any) => item.id);
    if (storyboardIds.length > 0) {
      await u.db("o_assets2Storyboard").whereIn("storyboardId", storyboardIds).delete();
    }
    await u.db("o_storyboard").where("projectId", id).delete();
    // Delete the ownership images of the assets that need to be deleted
    const assetsData = await u.db("o_assets").where("projectId", id).select("id");
    const assetsIds = assetsData.map((item: any) => item.id);
    if (assetsIds && assetsIds.length > 0) {
      // First, set o_assets.imageId to null to remove the foreign key reference to o_image
      await u.db("o_assets").whereIn("id", assetsIds).update({ imageId: null });
      await u.db("o_image").whereIn("assetsId", assetsIds).delete();
    }
    // Delete assets under the project
    await u.db("o_assets").where("projectId", id).delete();
    // Delete the video tracks and videos under the project
    await u.db("o_videoTrack").where("projectId", id).delete();
    await u.db("o_video").where("projectId", id).delete();
    // Delete resources under the project

    await u.db("memories").where("isolationKey", "like", `${id}:%`).delete();

    try {
      await u.oss.deleteDirectory(`${id}/`);
      console.log(`Project${id}The OSS folder was deleted successfully`);
    } catch (error: any) {
      console.log(`Project${id}No corresponding OSS folder, skipping deletion`);
    }

    res.status(200).send(success({ message: "Project deleted successfully" }));
  },
);
