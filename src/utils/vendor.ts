import { transform } from "sucrase";
import fs from "fs";
import path from "path";
import u from "@/utils";

type DiscoveredModel = Record<string, any>;

const discoveredModelCache = new Map<string, { expiresAt: number; models: DiscoveredModel[] }>();

function modelIdOf(model: any): string {
  return String(model?.id ?? model?.model ?? model?.name ?? "").trim();
}

function modelTypeOf(model: any): "text" | "image" | "video" {
  const id = modelIdOf(model).toLowerCase();
  const metadata = JSON.stringify(model ?? {}).toLowerCase();

  if (/seedance|doubao-seedance|sora|veo|kling|vidu|hailuo|wan(?:2|[-_]?\d)|video/.test(`${id} ${metadata}`)) {
    return "video";
  }
  if (/gpt-image|seedream|image|imagen|nano-banana|dall-e|flux|stable-diffusion|qwen-image/.test(`${id} ${metadata}`)) {
    return "image";
  }
  return "text";
}

function discoveredModelConfig(model: any): DiscoveredModel | null {
  const modelName = modelIdOf(model);
  if (!modelName) return null;

  const name = String(model?.name ?? modelName);
  const type = modelTypeOf(model);
  if (type === "image") {
    const supportsReferences = /seedream|gpt-image|nano-banana|dall-e|flux/.test(modelName.toLowerCase());
    return { name, modelName, type, mode: supportsReferences ? ["text", "singleImage", "multiReference"] : ["text"] };
  }
  if (type === "video") {
    return {
      name,
      modelName,
      type,
      mode: ["text", "singleImage"],
      audio: "optional",
      durationResolutionMap: [{ duration: [2, 3, 4, 5, 6, 8, 10], resolution: ["480p", "720p", "1080p"] }],
    };
  }
  return { name, modelName, type, think: false };
}

async function discoverOpenAICompatibleModels(id: string): Promise<DiscoveredModel[]> {
  // OpenSand is an OpenAI-compatible vendor. Other vendors can keep their
  // existing static model declarations until they implement their own catalog.
  if (id !== "openai") return [];

  const inputRow = await u.db("o_vendorConfig").where("id", id).select("inputValues").first();
  let inputValues: Record<string, string> = {};
  try {
    inputValues = JSON.parse(inputRow?.inputValues ?? "{}");
  } catch {
    return [];
  }

  const baseUrl = String(inputValues.baseUrl ?? "").replace(/\/+$/, "");
  const apiKey = String(inputValues.apiKey ?? "").replace(/^Bearer\s+/i, "");
  if (!baseUrl || !apiKey) return [];

  const cached = discoveredModelCache.get(id);
  if (cached && cached.expiresAt > Date.now()) return cached.models;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch(`${baseUrl}/models`, {
      method: "GET",
      headers: { Authorization: `Bearer ${apiKey}`, Accept: "application/json" },
      signal: controller.signal,
    });
    if (!response.ok) return [];
    const payload: any = await response.json();
    const rawModels = Array.isArray(payload) ? payload : payload?.data ?? payload?.models ?? [];
    if (!Array.isArray(rawModels)) return [];
    const models = rawModels.map(discoveredModelConfig).filter(Boolean) as DiscoveredModel[];
    discoveredModelCache.set(id, { expiresAt: Date.now() + 5 * 60 * 1000, models });
    return models;
  } catch {
    return [];
  } finally {
    clearTimeout(timeout);
  }
}

export function clearModelDiscoveryCache(id?: string) {
  if (id) discoveredModelCache.delete(id);
  else discoveredModelCache.clear();
}

export function writeCode(id: string | number, tsCode: string) {
  const rootDir = u.getPath("vendor")
  fs.mkdirSync(rootDir, { recursive: true })
  if (fs.existsSync(path.join(rootDir,  `${id}.ts`))) {
    fs.writeFileSync(path.join(rootDir,  `${id}.ts`), tsCode);
  }
  fs.writeFileSync(path.join(rootDir,  `${id}.ts`), tsCode);
}

export function getCode(id: string): string {
  const rootDir = u.getPath("vendor");
  const targetFile = path.join(rootDir, `${id}.ts`);
  if (!fs.existsSync(targetFile)) return "";
  return fs.readFileSync(targetFile, "utf-8");
}

export async function getModelList(id: string): Promise<Array<any>> {
  const models = await u.db("o_vendorConfig").where("id", id).select("models").first();
  if (!models || !models.models) return [];
  const code = getCode(id);
  const jsCode = transform(code, { transforms: ["typescript"] }).code;
  const vendorData = u.vm(jsCode);
  if(!vendorData || !vendorData.vendor || !vendorData.vendor.models) return [];
  const configuredModels = [...JSON.parse(JSON.stringify(vendorData.vendor.models)), ...JSON.parse(models?.models ?? "[]")];
  const map = new Map<string, any>();
  for (const m of configuredModels) {
    map.set(m.modelName, m);
  }

  // Use the provider's /models catalog as the source of truth when available.
  // Keep metadata for models already configured manually (e.g. reference modes).
  const discoveredModels = await discoverOpenAICompatibleModels(id);
  if (discoveredModels.length > 0) {
    const discoveredMap = new Map(discoveredModels.map((m) => [m.modelName, m]));
    for (const [modelName, configured] of map) {
      if (discoveredMap.has(modelName)) discoveredMap.set(modelName, { ...discoveredMap.get(modelName), ...configured });
    }
    map.clear();
    for (const model of discoveredModels) map.set(model.modelName, { ...model, ...(discoveredMap.get(model.modelName) ?? {}) });
  }
  return [...map.values()];
}

export function getVendor(id: string) {
  const code = getCode(id);
  const jsCode = transform(code, { transforms: ["typescript"] }).code;
  const vendorData = u.vm(jsCode);
  return vendorData.vendor;
}
