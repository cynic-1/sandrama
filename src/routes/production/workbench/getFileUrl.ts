import express from "express";
import u from "@/utils";
import { z } from "zod";
import { success } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { currentUser } from "@/middleware/auth";
import { isAdmin } from "@/utils/auth";
const router = express.Router();

export default router.post(
    "/",
    validateFields({
        items: z.array(z.object({
            id: z.number(),
            sources: z.string()
        }))
    }),
    async (req, res) => {
        const { items } = req.body;
        const user = currentUser(req)!;
        if (!isAdmin(user)) {
            const storyboardIds = items.filter((item: any) => item.sources == "storyboard").map((item: any) => item.id);
            const assetsIds = items.filter((item: any) => item.sources == "assets").map((item: any) => item.id);
            const [storyboards, assets] = await Promise.all([
                storyboardIds.length ? u.db("o_storyboard").whereIn("id", storyboardIds).select("projectId") : [],
                assetsIds.length ? u.db("o_assets").whereIn("id", assetsIds).select("projectId") : [],
            ]);
            // 逐项校验归属，避免通过资源 ID 读取其他用户的文件。
            for (const row of [...storyboards, ...assets]) {
                const project = await u.db("o_project").where("id", row.projectId).select("userId").first();
                if (!project || Number(project.userId ?? 1) !== user.id) return res.status(403).send({ message: "无权访问文件" });
            }
        }
        const result: Record<string, string> = {};
        const storyboardIds = items.filter((item: any) => item.sources == "storyboard").map((item: any) => item.id)
        const totalFilePaths = []
        if (storyboardIds.length) {
            const storyBoardPaths = await u.db("o_storyboard").whereIn("id", storyboardIds).select("id", "filePath");
            totalFilePaths.push(...storyBoardPaths.map(i => ({ id: i.id, filePath: i.filePath, sources: "storyboard" })))
        }
        const assetsIds = items.filter((item: any) => item.sources == "assets").map((item: any) => item.id)
        if (assetsIds.length) {
            const assetsPaths = await u.db("o_assets").leftJoin("o_image", "o_image.id", "o_assets.imageId").whereIn("o_assets.id", assetsIds).select("o_assets.id", "o_image.filePath");
            totalFilePaths.push(...assetsPaths.map(i => ({ id: i.id, filePath: i.filePath, sources: "assets" })))
        }

        await Promise.all(
            totalFilePaths.map(async (item: { id: string, filePath: string, sources: string }) => {
                result[`${item.id}:${item.sources}`] = item.filePath ? await u.oss.getSmallImageUrl(item.filePath) : "";
            }))

        res.status(200).send(success({ data: result }));
    },
);
