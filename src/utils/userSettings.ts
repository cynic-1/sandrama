import { AsyncLocalStorage } from "node:async_hooks";
import db from "@/utils/db";

type AnyRow = Record<string, any>;

type UserSettingsData = {
  settings: Record<string, any>;
  agentDeploy: Record<string, AnyRow>;
  vendorConfig: Record<string, AnyRow>;
  prompts: Record<string, AnyRow>;
  modelPrompts: Record<string, AnyRow>;
  modelPromptFiles: Record<string, string>;
  deletedModelPromptFiles: Record<string, boolean>;
  vendorCode: Record<string, string>;
};

const userContext = new AsyncLocalStorage<number>();
const cache = new Map<number, UserSettingsData>();

export function runWithUser<T>(userId: number, callback: () => T): T {
  return userContext.run(Number(userId), callback);
}

export function currentUserId(): number | undefined {
  const id = userContext.getStore();
  return id === undefined ? undefined : Number(id);
}

function emptyData(): UserSettingsData {
  return { settings: {}, agentDeploy: {}, vendorConfig: {}, prompts: {}, modelPrompts: {}, modelPromptFiles: {}, deletedModelPromptFiles: {}, vendorCode: {} };
}

function parseData(value: unknown): UserSettingsData {
  if (!value) return emptyData();
  try {
    const parsed = JSON.parse(String(value));
    return {
      ...emptyData(),
      ...parsed,
      settings: { ...(parsed.settings ?? {}) },
      agentDeploy: { ...(parsed.agentDeploy ?? {}) },
      vendorConfig: { ...(parsed.vendorConfig ?? {}) },
      prompts: { ...(parsed.prompts ?? {}) },
      modelPrompts: { ...(parsed.modelPrompts ?? {}) },
      modelPromptFiles: { ...(parsed.modelPromptFiles ?? {}) },
      deletedModelPromptFiles: { ...(parsed.deletedModelPromptFiles ?? {}) },
      vendorCode: { ...(parsed.vendorCode ?? {}) },
    };
  } catch {
    return emptyData();
  }
}

async function createSnapshot(): Promise<UserSettingsData> {
  const data = emptyData();
  const [settings, agents, vendors, prompts, modelPrompts] = await Promise.all([
    db("o_setting").select("key", "value"),
    db("o_agentDeploy").select("*"),
    db("o_vendorConfig").select("*"),
    db("o_prompt").select("*"),
    db("o_modelPrompt").select("*"),
  ]);
  for (const row of settings) if (row.key && row.key !== "tokenKey") data.settings[String(row.key)] = row.value;
  for (const row of agents) if (row.id !== undefined) data.agentDeploy[String(row.id)] = { ...row };
  for (const row of vendors) if (row.id !== undefined) data.vendorConfig[String(row.id)] = { ...row };
  for (const row of prompts) if (row.id !== undefined) data.prompts[String(row.id)] = { ...row };
  for (const row of modelPrompts) {
    if (row.vendorId !== undefined && row.model !== undefined) data.modelPrompts[`${row.vendorId}:${row.model}`] = { ...row };
  }
  return data;
}

async function save(userId: number, data: UserSettingsData): Promise<void> {
  cache.set(userId, data);
  await db("o_user").where("id", userId).update({ settings: JSON.stringify(data) });
}

export async function ensureUserSettings(userId = currentUserId()): Promise<UserSettingsData> {
  if (!userId) throw new Error("未找到当前用户");
  const id = Number(userId);
  const cached = cache.get(id);
  if (cached) return cached;
  const user = await db("o_user").where("id", id).select("settings").first();
  const data = user?.settings ? parseData(user.settings) : await createSnapshot();
  cache.set(id, data);
  if (!user?.settings) await save(id, data);
  return data;
}

export async function getSetting(key: string, userId = currentUserId()): Promise<AnyRow | undefined> {
  if (key === "tokenKey" || !userId) return db("o_setting").where("key", key).select("key", "value").first();
  const data = await ensureUserSettings(userId);
  if (data.settings[key] !== undefined) return { key, value: data.settings[key] };
  const fallback = await db("o_setting").where("key", key).select("key", "value").first();
  if (fallback) {
    data.settings[key] = fallback.value;
    await save(Number(userId), data);
  }
  return fallback;
}

export async function getSettings(keys: string[], userId = currentUserId()): Promise<AnyRow[]> {
  if (!userId) return db("o_setting").whereIn("key", keys);
  const data = await ensureUserSettings(userId);
  const fallback = await db("o_setting").whereIn("key", keys);
  const fallbackMap = new Map(fallback.map((row: AnyRow) => [String(row.key), row.value]));
  const rows = keys.map((key) => ({ key, value: data.settings[key] ?? fallbackMap.get(key) })).filter((row) => row.value !== undefined);
  let changed = false;
  for (const row of rows) {
    if (data.settings[row.key] === undefined) {
      data.settings[row.key] = row.value;
      changed = true;
    }
  }
  if (changed) await save(Number(userId), data);
  return rows;
}

export async function setSetting(key: string, value: any, userId = currentUserId()): Promise<void> {
  if (!userId || key === "tokenKey") {
    const exists = await db("o_setting").where("key", key).first();
    if (exists) await db("o_setting").where("key", key).update({ value });
    else await db("o_setting").insert({ key, value });
    return;
  }
  const data = await ensureUserSettings(userId);
  data.settings[key] = value;
  await save(Number(userId), data);
}

export async function getAgentDeployRows(userId = currentUserId()): Promise<AnyRow[]> {
  if (!userId) return db("o_agentDeploy").select("*");
  const data = await ensureUserSettings(userId);
  const globalRows = await db("o_agentDeploy").select("*");
  let changed = false;
  for (const row of globalRows) {
    if (row.id !== undefined && !data.agentDeploy[String(row.id)]) {
      data.agentDeploy[String(row.id)] = { ...row };
      changed = true;
    }
  }
  if (changed) await save(Number(userId), data);
  return Object.values(data.agentDeploy);
}

export async function getAgentDeployById(id: number, userId = currentUserId()): Promise<AnyRow | undefined> {
  if (!userId) return db("o_agentDeploy").where("id", id).first();
  const data = await ensureUserSettings(userId);
  return data.agentDeploy[String(id)] ?? (await db("o_agentDeploy").where("id", id).first());
}

export async function getAgentDeployByKey(key: string, userId = currentUserId()): Promise<AnyRow | undefined> {
  const rows = await getAgentDeployRows(userId);
  return rows.find((row) => row.key === key);
}

export async function updateAgentDeploy(id: number, values: AnyRow, userId = currentUserId()): Promise<void> {
  if (!userId) {
    await db("o_agentDeploy").where("id", id).update(values);
    return;
  }
  const data = await ensureUserSettings(userId);
  const current = data.agentDeploy[String(id)] ?? { id };
  data.agentDeploy[String(id)] = { ...current, ...values, id };
  await save(Number(userId), data);
}

export async function getVendorConfigRows(userId = currentUserId()): Promise<AnyRow[]> {
  if (!userId) return db("o_vendorConfig").select("*");
  const data = await ensureUserSettings(userId);
  const globalRows = await db("o_vendorConfig").select("*");
  let changed = false;
  for (const row of globalRows) {
    if (row.id !== undefined && !data.vendorConfig[String(row.id)]) {
      data.vendorConfig[String(row.id)] = { ...row };
      changed = true;
    }
  }
  if (changed) await save(Number(userId), data);
  return Object.values(data.vendorConfig).filter((row) => !row.__deleted);
}

export async function getVendorConfig(id: string, userId = currentUserId()): Promise<AnyRow | undefined> {
  if (!userId) return db("o_vendorConfig").where("id", id).first();
  const data = await ensureUserSettings(userId);
  const configured = data.vendorConfig[id];
  if (configured?.__deleted) return undefined;
  return configured ?? (await db("o_vendorConfig").where("id", id).first());
}

export async function updateVendorConfig(id: string, values: AnyRow, userId = currentUserId()): Promise<void> {
  if (!userId) {
    await db("o_vendorConfig").where("id", id).update(values);
    return;
  }
  const data = await ensureUserSettings(userId);
  const current = data.vendorConfig[id] ?? { id };
  data.vendorConfig[id] = { ...current, ...values, id };
  await save(Number(userId), data);
}

export async function insertVendorConfig(row: AnyRow, userId = currentUserId()): Promise<void> {
  if (!userId) {
    await db("o_vendorConfig").insert(row);
    return;
  }
  const data = await ensureUserSettings(userId);
  data.vendorConfig[String(row.id)] = { ...row };
  await save(Number(userId), data);
}

export async function deleteVendorConfig(id: string, userId = currentUserId()): Promise<void> {
  if (!userId) {
    await db("o_vendorConfig").where("id", id).delete();
    return;
  }
  const data = await ensureUserSettings(userId);
  data.vendorConfig[id] = { id, __deleted: true };
  for (const row of Object.values(data.agentDeploy)) if (row.vendorId === id) {
    row.vendorId = null;
    row.model = null;
    row.modelName = null;
  }
  await save(Number(userId), data);
}

export async function getPromptRows(userId = currentUserId()): Promise<AnyRow[]> {
  if (!userId) return db("o_prompt").select("*");
  const data = await ensureUserSettings(userId);
  const globalRows = await db("o_prompt").select("*");
  let changed = false;
  for (const row of globalRows) {
    if (row.id !== undefined && !data.prompts[String(row.id)]) {
      data.prompts[String(row.id)] = { ...row };
      changed = true;
    }
  }
  if (changed) await save(Number(userId), data);
  return Object.values(data.prompts);
}

export async function getPromptById(id: number, userId = currentUserId()): Promise<AnyRow | undefined> {
  if (!userId) return db("o_prompt").where("id", id).first();
  return (await ensureUserSettings(userId)).prompts[String(id)] ?? (await db("o_prompt").where("id", id).first());
}

export async function getPromptByType(type: string, userId = currentUserId()): Promise<AnyRow | undefined> {
  return (await getPromptRows(userId)).find((row) => row.type === type);
}

export async function updatePrompt(id: number, values: AnyRow, userId = currentUserId()): Promise<void> {
  if (!userId) {
    await db("o_prompt").where("id", id).update(values);
    return;
  }
  const data = await ensureUserSettings(userId);
  const current = data.prompts[String(id)] ?? { id };
  data.prompts[String(id)] = { ...current, ...values, id };
  await save(Number(userId), data);
}

export async function getModelPrompt(vendorId: string, model: string, userId = currentUserId()): Promise<AnyRow | undefined> {
  if (!userId) return db("o_modelPrompt").where({ vendorId, model }).first();
  return (await ensureUserSettings(userId)).modelPrompts[`${vendorId}:${model}`];
}

export async function getModelPrompts(vendorId?: string, userId = currentUserId()): Promise<AnyRow[]> {
  if (!userId) {
    const query = db("o_modelPrompt").select("*");
    if (vendorId !== undefined) query.where("vendorId", vendorId);
    return query;
  }
  const rows = Object.values((await ensureUserSettings(userId)).modelPrompts);
  return vendorId === undefined ? rows : rows.filter((row) => row.vendorId === vendorId);
}

export async function getModelPromptFilePaths(userId = currentUserId()): Promise<string[]> {
  if (!userId) return [];
  const data = await ensureUserSettings(userId);
  return Object.keys(data.modelPromptFiles).filter((filePath) => !data.deletedModelPromptFiles[filePath]);
}

export async function getModelPromptFile(filePath: string, fallback: () => Promise<string | undefined> | string, userId = currentUserId()): Promise<string | undefined> {
  if (!userId) return fallback();
  const data = await ensureUserSettings(userId);
  if (data.deletedModelPromptFiles[filePath]) return undefined;
  if (Object.prototype.hasOwnProperty.call(data.modelPromptFiles, filePath)) return data.modelPromptFiles[filePath];
  return fallback();
}

export async function setModelPromptFile(filePath: string, content: string, userId = currentUserId()): Promise<void> {
  if (!userId) return;
  const data = await ensureUserSettings(userId);
  data.modelPromptFiles[filePath] = content;
  delete data.deletedModelPromptFiles[filePath];
  await save(Number(userId), data);
}

export async function deleteModelPromptFile(filePath: string, userId = currentUserId()): Promise<void> {
  if (!userId) return;
  const data = await ensureUserSettings(userId);
  delete data.modelPromptFiles[filePath];
  data.deletedModelPromptFiles[filePath] = true;
  await save(Number(userId), data);
}

export async function saveModelPrompt(row: AnyRow, userId = currentUserId()): Promise<void> {
  if (!userId) {
    const existing = await db("o_modelPrompt").where({ vendorId: row.vendorId, model: row.model }).first();
    if (existing) await db("o_modelPrompt").where({ vendorId: row.vendorId, model: row.model }).update(row);
    else await db("o_modelPrompt").insert(row);
    return;
  }
  const data = await ensureUserSettings(userId);
  const key = `${row.vendorId}:${row.model}`;
  data.modelPrompts[key] = { ...(data.modelPrompts[key] ?? {}), ...row };
  await save(Number(userId), data);
}

export async function deleteModelPrompt(vendorId: string, model: string, userId = currentUserId()): Promise<void> {
  if (!userId) {
    await db("o_modelPrompt").where({ vendorId, model }).delete();
    return;
  }
  const data = await ensureUserSettings(userId);
  delete data.modelPrompts[`${vendorId}:${model}`];
  await save(Number(userId), data);
}

export function getVendorCode(id: string, fallback: () => string): string {
  const userId = currentUserId();
  const data = userId ? cache.get(Number(userId)) : undefined;
  return data?.vendorCode[id] ?? fallback();
}

export async function setVendorCode(id: string, code: string, userId = currentUserId()): Promise<void> {
  if (!userId) return;
  const data = await ensureUserSettings(userId);
  data.vendorCode[id] = code;
  await save(Number(userId), data);
}

export default {
  runWithUser,
  currentUserId,
  ensureUserSettings,
  getSetting,
  getSettings,
  setSetting,
  getAgentDeployRows,
  getAgentDeployById,
  getAgentDeployByKey,
  updateAgentDeploy,
  getVendorConfigRows,
  getVendorConfig,
  updateVendorConfig,
  insertVendorConfig,
  deleteVendorConfig,
  getPromptRows,
  getPromptById,
  getPromptByType,
  updatePrompt,
  getModelPrompt,
  getModelPrompts,
  saveModelPrompt,
  deleteModelPrompt,
  getModelPromptFilePaths,
  getModelPromptFile,
  setModelPromptFile,
  deleteModelPromptFile,
  getVendorCode,
  setVendorCode,
};
