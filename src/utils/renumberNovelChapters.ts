import db from "@/utils/db";

/** 将项目内小说章节序号按当前顺序重排为连续的 1..N。 */
export default async function renumberNovelChapters(projectId: number): Promise<void> {
  const rows = await db("o_novel")
    .where("projectId", projectId)
    .select("id")
    .orderBy("chapterIndex", "asc")
    .orderBy("id", "asc");

  for (const [index, row] of rows.entries()) {
    await db("o_novel").where("id", row.id).update({ chapterIndex: index + 1 });
  }
}
