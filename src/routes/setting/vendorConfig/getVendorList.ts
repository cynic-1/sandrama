import express from "express";
import { success } from "@/lib/responseFormat";
import u from "@/utils";
const router = express.Router();

export default router.post("/", async (req, res) => {
  const data = await u.userSettings.getVendorConfigRows();

  const list = (
    await Promise.all(
      data.map(async (item) => {
        const vendor = u.vendor.getVendor(item.id!);
        if (!vendor) {
          await u.userSettings.deleteVendorConfig(String(item.id));
          return null
        };
        return {
          ...item,
          id: item.id,
          inputValues: JSON.parse(item.inputValues ?? "{}"),
          models: await u.vendor.getModelList(item.id!),
          code: u.vendor.getCode(item.id!),
          description: vendor.description ?? "",
          inputs: vendor.inputs,
          author: vendor.author,
          name: vendor.name,
          version: vendor.version ?? "1.0",
        };
      }),
    )
  ).filter((i) => Boolean(i));

  const priority: Record<string, number> = { openai: 0 };
  list.sort(
    (a, b) =>
      (priority[a!.id!] ?? 10) - (priority[b!.id!] ?? 10),
  );
  res.status(200).send(success(list));
});
