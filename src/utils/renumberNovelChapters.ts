import db from "@/utils/db";

/** Reorder the novel chapter numbers within the project to be consecutive 1..N according to the current order.*/
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
