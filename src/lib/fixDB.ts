import { eventExtractionPrompt, scriptAssetExtractionPrompt, videoPromptGenerationPrompt, audioBindPrompt } from "@/lib/defaultPrompts";
import u from "@/utils";
import path from "path";
import fs from "fs";
import { Knex } from "knex";
import db from "@/utils/db";
import { transform } from "sucrase";
import rawVendorData from "./vendor.json";
import { createTokenKey, hashPassword, isLegacyPassword } from "@/utils/auth";

const vendorData = rawVendorData as Record<string, string>;

export default async (knex: Knex): Promise<void> => {
  const addColumn = async (table: string, column: string, type: string) => {
    if (!(await knex.schema.hasTable(table))) return;
    if (!(await knex.schema.hasColumn(table, column))) {
      await knex.schema.alterTable(table, (t) => (t as any)[type](column));
    }
  };

  const dropColumn = async (table: string, column: string) => {
    if (!(await knex.schema.hasTable(table))) return;
    if (await knex.schema.hasColumn(table, column)) {
      await knex.schema.alterTable(table, (t) => t.dropColumn(column));
    }
  };

  const alterColumnType = async (table: string, column: string, type: string) => {
    if (!(await knex.schema.hasTable(table))) return;
    if (await knex.schema.hasColumn(table, column)) {
      await knex.schema.alterTable(table, (t) => {
        (t as any)[type](column).alter();
      });
    }
  };
  // User table migration: compatible with the legacy single-user database, while adding fields for multi-user support and password security.
  await addColumn("o_user", "role", "string");
  await addColumn("o_user", "disabled", "boolean");
  await addColumn("o_user", "tokenVersion", "integer");
  await addColumn("o_user", "settings", "text");
  await addColumn("o_user", "createdAt", "integer");
  await addColumn("o_user", "updatedAt", "integer");
  await addColumn("o_user", "lastLoginAt", "integer");
  const users = await knex("o_user").select("id", "password", "role", "disabled", "tokenVersion", "createdAt", "updatedAt");
  const now = Date.now();
  for (const user of users) {
    const updates: Record<string, unknown> = {};
    if (!user.role) updates.role = Number(user.id) === 1 ? "admin" : "user";
    if (user.disabled === null || user.disabled === undefined) updates.disabled = false;
    if (user.tokenVersion === null || user.tokenVersion === undefined) updates.tokenVersion = 0;
    if (!user.createdAt) updates.createdAt = now;
    if (!user.updatedAt) updates.updatedAt = now;
    if (isLegacyPassword(user.password)) updates.password = await hashPassword(String(user.password));
    if (Object.keys(updates).length) await knex("o_user").where("id", user.id).update(updates);
  }
  // The old project previously hardcoded userId=1, assigning it to the administrator to prevent project loss after an upgrade.
  await addColumn("o_project", "userId", "integer");
  await knex("o_project").whereNull("userId").update({ userId: 1 });
  const tokenSetting = await knex("o_setting").where("key", "tokenKey").first();
  if (!tokenSetting || typeof tokenSetting.value !== "string" || tokenSetting.value.length < 32) {
    if (tokenSetting) await knex("o_setting").where("key", "tokenKey").update({ value: createTokenKey() });
    else await knex("o_setting").insert({ key: "tokenKey", value: createTokenKey() });
  }

  // Fix state inconsistency issues caused by abnormal software termination
  await db("o_novel").where("eventState", 0).update({
    eventState: -1,
    errorReason: "Software exit caused failure",
  });
  await db("o_script").where("extractState", 0).update({
    extractState: -1,
    errorReason: "Software exit caused failure",
  });
  await db("o_assets").where("promptState", "Generating").update({
    promptState: "Generation failed",
    promptErrorReason: "Software exit caused failure",
  });
  await db("o_image").where("state", "Generating").update({
    state: "Generation failed",
    errorReason: "Software exit caused failure",
  });
  await db("o_storyboard").where("state", "Generating").update({
    state: "Generation failed",
    reason: "Software exit caused failure",
  });
  await db("o_video").where("state", "Generating").update({
    state: "Generation failed",
    errorReason: "Software exit caused failure",
  });

  // Add a new field
  await addColumn("o_prompt", "useData", "text");
  // Add a new field
  await addColumn("o_agentDeploy", "type", "string");
  // Add a new field
  await addColumn("o_agentDeploy", "temperature", "integer");
  // Add a new field
  await addColumn("o_agentDeploy", "maxOutputTokens", "integer");
  await addColumn("o_assets", "audioBindState", "integer");
  await addColumn("o_modelPrompt", "fileName", "string");
  await addColumn("o_modelPrompt", "path", "string");
  const vendorDataSelect = await u.db("o_vendorConfig").whereIn("id", ["deepseek", "atlascloud"]).select("*");
  if (!vendorDataSelect.find((i) => i.id == "deepseek")) {
    await u.db("o_vendorConfig").insert({
      id: "deepseek",
      inputValues: "{}",
      models: "[]",
      enable: 0,
    });
  }
  if (!vendorDataSelect.find((i) => i.id == "atlascloud")) {
    await u.db("o_vendorConfig").insert({
      id: "atlascloud",
      inputValues: "{}",
      models: "[]",
      enable: 0,
    });
  }
  // Detect whether it contains the new voice binding prompt
  const existAudioPrompt = await db("o_prompt").where("type", "audioBindPrompt").first();
  if (!existAudioPrompt)
    await db("o_prompt").insert({
      name: "Voice Matching",
      type: "audioBindPrompt",
      data: audioBindPrompt,
    });
  // Check whether o_setting has agentUseMode
  const agentUserMode = await u.db("o_setting").where("key", "agentUseMode").first();
  if (!agentUserMode) {
    const allDeployData = await u
      .db("o_agentDeploy")
      .leftJoin("o_vendorConfig", "o_vendorConfig.id", "o_agentDeploy.vendorId")
      .select("o_agentDeploy.*");
    const advancedData = allDeployData.filter((item: any) => item.key?.includes(":"));
    const notValModelData = advancedData.filter((item) => !item.modelName);

    await u.db("o_setting").insert({
      key: "agentUseMode",
      value: notValModelData.length ? "0" : "1",
    });
  }
  // Add data advanced configuration
  const advancedAgentList = [
    { key: "scriptAgent:decisionAgent", name: "Script Agent: Decision Layer", desc: "Decision-making level" },
    { key: "scriptAgent:supervisionAgent", name: "Script Agent: Supervision Layer", desc: "Supervisory layer" },
    { key: "scriptAgent:storySkeletonAgent", name: "Script Agent: Story Skeleton", desc: "Story Skeleton Generation" },
    { key: "scriptAgent:adaptationStrategyAgent", name: "Script Agent: Adaptation Strategy", desc: "Adaptation Strategy Generation" },
    { key: "scriptAgent:scriptAgent", name: "Script Agent: Script Generation", desc: "Script Generation" },
    { key: "productionAgent:decisionAgent", name: "Production Agent: Decision Layer", desc: "Decision-making level" },
    { key: "productionAgent:supervisionAgent", name: "Production Agent: Supervision Layer", desc: "Supervisory layer" },
    { key: "productionAgent:deriveAssetsAgent", name: "Production Agent: Derivative Assets", desc: "Derivative assets" },
    { key: "productionAgent:generateAssetsAgent", name: "Production Agent: Generate Assets", desc: "Generate assets" },
    { key: "productionAgent:directorPlanAgent", name: "Production Agent: Director Planning", desc: "Director's Plan" },
    { key: "productionAgent:storyboardGenAgent", name: "Production Agent: Storyboard Generation", desc: "Storyboard generation" },
    { key: "productionAgent:storyboardPanelAgent", name: "Production Agent: Storyboard Panel", desc: "Storyboard panel generation" },
    { key: "productionAgent:storyboardTableAgent", name: "Production Agent: Storyboard Table", desc: "Storyboard Table Generation" },
  ];
  for (const agent of advancedAgentList) {
    const exists = await db("o_agentDeploy").where("key", agent.key).select("*").first();
    if (!exists) {
      await db("o_agentDeploy").insert({
        model: "",
        modelName: "",
        vendorId: null,
        key: agent.key,
        name: agent.name,
        desc: agent.desc,
        temperature: 1,
        maxOutputTokens: 0,
        disabled: false,
      });
    }
  }
  // Skill descriptions are regenerated from the English skill files. Clear stale
  // translated descriptions so no Chinese metadata survives an upgrade.
  const skillRows = await db("o_skillList").select("id", "description");
  for (const row of skillRows) {
    if (typeof row.description === "string" && /[\u3400-\u9fff]/.test(row.description)) {
      await db("o_skillList").where("id", row.id).update({ description: "", state: -1 });
    }
  }

  // Built-in prompt library is English. Update the base text while preserving any
  // user customization stored in `useData`.
  for (const [type, data] of [
    ["eventExtraction", eventExtractionPrompt],
    ["scriptAssetExtraction", scriptAssetExtractionPrompt],
    ["videoPromptGeneration", videoPromptGenerationPrompt],
    ["audioBindPrompt", audioBindPrompt],
  ] as const) {
    await db("o_prompt").where("type", type).update({ data });
  }

  // Migrate supplier function
  const data = await knex("o_vendorConfig").select("*");
  for (const item of data) {
    let { id, code } = item;
    const filename = `${id}.ts`;
    const rootDir = u.getPath("vendor");
    if (!code && fs.existsSync(path.join(rootDir, filename))) continue;
    if (!fs.existsSync(rootDir)) fs.mkdirSync(rootDir, { recursive: true });
    if (!fs.existsSync(path.join(rootDir, filename))) {
      code = vendorData[filename] || code;
      code = code ?? "";
      fs.writeFileSync(path.join(rootDir, filename), code);
    }
  }
  const defList = Object.keys(vendorData)
    .map((filename) => filename.replace(/\.ts$/, ""))
    .filter((id) => id !== "sanddrama");
  const existingIds = data.map((i: any) => i.id);
  for (const id of defList) {
    if (!existingIds.includes(id)) {
      const tsCode = vendorData[`${id}.ts`];
      if (tsCode) await tempOnsert(tsCode);
    }
  }

  await dropColumn("o_vendorConfig", "author");
  await dropColumn("o_vendorConfig", "description");
  await dropColumn("o_vendorConfig", "name");
  await dropColumn("o_vendorConfig", "icon");
  await dropColumn("o_vendorConfig", "inputs");
  await dropColumn("o_vendorConfig", "createTime");

  const volcengineVer = await u.vendor.getVendor("volcengine").version;
  if (Number(volcengineVer) < 2.4) {
    u.vendor.writeCode("volcengine", vendorData["volcengine.ts"]);
  }
  const minimaxVer = await u.vendor.getVendor("minimax").version;
  if (Number(minimaxVer) < 2.1) {
    u.vendor.writeCode("minimax", vendorData["minimax.ts"]);
  }
  await knex("o_vendorConfig").where("id", "sanddrama").delete();
};

async function tempOnsert(tsCode: string) {
  const jsCode = transform(tsCode, { transforms: ["typescript"] }).code;
  const exports = u.vm(jsCode);
  const vendor = exports.vendor;
  const data = await u.db("o_vendorConfig").where("id", vendor.id).first();
  if (data) return;
  await u.db("o_vendorConfig").insert({
    id: vendor.id,
    inputValues: JSON.stringify(vendor.inputValues ?? {}),
    models: JSON.stringify([]),
    enable: vendor.id == "sanddrama" ? 1 : 0,
  });
  u.vendor.writeCode(vendor.id, tsCode);
}
