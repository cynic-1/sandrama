import { NextFunction, Request, Response } from "express";
import crypto from "node:crypto";
import jwt from "jsonwebtoken";
import db from "@/utils/db";
import { AuthenticatedUser, isAdmin } from "@/utils/auth";

export type TokenPayload = {
  id: number;
  name: string;
  role?: "admin" | "user";
  tokenVersion?: number;
  iat?: number;
  exp?: number;
};

export function currentUser(req: Request): AuthenticatedUser | null {
  return ((req as Request & { user?: AuthenticatedUser }).user as AuthenticatedUser | undefined) ?? null;
}

export async function verifyStaticAccess(req: Request): Promise<boolean> {
  const expires = Number(req.query.sd_expires);
  const signature = String(req.query.sd_access ?? "");
  if (!Number.isSafeInteger(expires) || expires < Math.floor(Date.now() / 1000) || !/^[a-f0-9]{64}$/i.test(signature)) return false;
  const setting = await db("o_setting").where("key", "tokenKey").select("value").first();
  const secret = String(process.env.OSS_SIGNING_SECRET || setting?.value || process.env.NODE_ENV || "sandrama");
  const prefix = String(req.baseUrl || "").replace(/^\/+|\/+$/g, "");
  let publicPath: string;
  try {
    publicPath = decodeURIComponent(req.path).replace(/^\/+/, "");
  } catch {
    return false;
  }
  const expected = crypto.createHmac("sha256", secret).update(`${prefix}:${publicPath}:${expires}`).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}

export async function authenticateStaticRequest(req: Request, res: Response, next: NextFunction) {
  if (await verifyStaticAccess(req)) return next();
  return authenticateRequest(req, res, next);
}

export async function authenticateRequest(req: Request, res: Response, next: NextFunction) {
  if (req.path === "/login/login") return next();

  const setting = await db("o_setting").where("key", "tokenKey").select("value").first();
  if (!setting?.value) return res.status(503).send({ message: "服务器未完成初始化，请联系管理员" });

  const cookieToken = String(req.headers.cookie ?? "")
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith("sd_token="))
    ?.slice("sd_token=".length);
  const rawToken = req.headers.authorization || (req.query.token as string) || cookieToken || "";
  const token = rawToken.replace(/^Bearer\s+/i, "").trim();
  if (!token) return res.status(401).send({ message: "未提供token" });

  try {
    const decoded = jwt.verify(token, String(setting.value)) as TokenPayload;
    if (!decoded?.id) return res.status(401).send({ message: "无效的token" });

    const user = await db("o_user")
      .where("id", decoded.id)
      .select("id", "name", "role", "disabled", "tokenVersion")
      .first();
    if (!user || Number(user.disabled) === 1) return res.status(401).send({ message: "用户不存在或已被禁用" });
    if (decoded.tokenVersion !== undefined && Number(decoded.tokenVersion) !== Number(user.tokenVersion ?? 0)) {
      return res.status(401).send({ message: "登录状态已失效，请重新登录" });
    }

    (req as Request & { user?: AuthenticatedUser }).user = {
      id: Number(user.id),
      name: String(user.name),
      role: user.role === "admin" ? "admin" : "user",
      disabled: Boolean(user.disabled),
      tokenVersion: Number(user.tokenVersion ?? 0),
    };
    return next();
  } catch {
    return res.status(401).send({ message: "无效的token" });
  }
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!isAdmin(currentUser(req))) return res.status(403).send({ message: "仅管理员可执行此操作" });
  return next();
}

function firstValue(value: unknown): unknown {
  return Array.isArray(value) ? value[0] : value;
}

async function projectIdFromReference(req: Request): Promise<number | undefined> {
  const body = (req.body ?? {}) as Record<string, unknown>;
  const query = (req.query ?? {}) as Record<string, unknown>;
  const direct = firstValue(body.projectId ?? query.projectId ?? req.params.projectId);
  if (direct !== undefined && direct !== null && direct !== "") return Number(direct);

  const path = req.path;
  const url = firstValue(body.url ?? query.url);
  if (typeof url === "string" && url.startsWith("/oss/")) {
    const urlProjectId = Number(url.split("/").filter(Boolean)[1]);
    if (Number.isFinite(urlProjectId)) return urlProjectId;
  }
  const id = firstValue(body.id ?? query.id);
  if (path.includes("/project/") || path.includes("/general/")) {
    return id === undefined ? undefined : Number(id);
  }
  if (id !== undefined && id !== null && id !== "") {
    let table: string | undefined;
    if (path.includes("/novel/")) table = "o_novel";
    else if (path.includes("/script/")) table = "o_script";
    else if (path.includes("/storyboard/")) table = "o_storyboard";
    else if (path.includes("/assets/")) table = path.includes("delImage") ? "o_image" : "o_assets";
    else if (path.includes("/workbench/")) table = path.includes("delVideo") || path.includes("selectVideo") ? "o_video" : "o_videoTrack";
    if (table) {
      const row = await db(table as any).where("id", Number(id)).select("projectId", "assetsId").first();
      if (row?.projectId !== undefined && row.projectId !== null) return Number(row.projectId);
      if (table === "o_image" && row?.assetsId) {
        const asset = await db("o_assets").where("id", Number(row.assetsId)).select("projectId").first();
        return asset?.projectId === undefined ? undefined : Number(asset.projectId);
      }
    }
  }

  const referenceMap: Array<[string, string]> = [
    ["scriptId", "o_script"],
    ["novelId", "o_novel"],
    ["assetsId", "o_assets"],
    ["assetId", "o_assets"],
    ["storyboardId", "o_storyboard"],
    ["trackId", "o_videoTrack"],
    ["videoId", "o_video"],
    ["taskId", "o_tasks"],
    ["imageId", "o_image"],
  ];
  for (const [key, table] of referenceMap) {
    const value = firstValue(body[key] ?? query[key]);
    if (value === undefined || value === null || value === "") continue;
    const row = await db(table as any).where("id", Number(value)).select("projectId", "assetsId").first();
    if (!row) return undefined;
    if (row.projectId !== undefined && row.projectId !== null) return Number(row.projectId);
    if (table === "o_image" && row.assetsId) {
      const asset = await db("o_assets").where("id", Number(row.assetsId)).select("projectId").first();
      return asset?.projectId === undefined ? undefined : Number(asset.projectId);
    }
  }

  // Common bulk operations carry an id list without projectId. Infer the owning table
  // from the route so legacy endpoints cannot be used to cross tenant boundaries.
  const listKey = ["ids", "assetsIds", "storyboardIds", "videoIds"].find((key) => body[key] || query[key]);
  if (listKey) {
    const values = (Array.isArray(body[listKey]) ? body[listKey] : [body[listKey]]).map(Number).filter(Number.isFinite);
    if (!values.length) return undefined;
    let table: string | undefined;
    if (listKey === "assetsIds") table = "o_assets";
    else if (listKey === "storyboardIds") table = "o_storyboard";
    else if (listKey === "videoIds") table = "o_video";
    else if (path.includes("/novel/")) table = "o_novel";
    else if (path.includes("/script/")) table = "o_script";
    else if (path.includes("/storyboard/")) table = "o_storyboard";
    else if (path.includes("/assets/")) table = path.includes("delImage") ? "o_image" : "o_assets";
    if (table) {
      const row = await db(table as any).whereIn("id", values).select("projectId", "assetsId").first();
      if (row?.projectId !== undefined && row.projectId !== null) return Number(row.projectId);
      if (table === "o_image" && row?.assetsId) {
        const asset = await db("o_assets").where("id", Number(row.assetsId)).select("projectId").first();
        return asset?.projectId === undefined ? undefined : Number(asset.projectId);
      }
    }
  }
  return undefined;
}

/** Enforces tenant isolation for every request that identifies a project or project resource. */
export async function enforceProjectAccess(req: Request, res: Response, next: NextFunction) {
  const user = currentUser(req);
  if (!user || req.path === "/login/login") return next();

  // Database/configuration changes are shared system resources. Some destructive
  // legacy endpoints use GET, so they must be explicitly protected as well.
  const destructiveSettingPath = /\/setting\/(dbConfig\/(clearData|clearTable|importData)|memoryConfig\/delAllMemory)/.test(req.path);
  if (req.path.startsWith("/setting/") && (destructiveSettingPath || (req.method !== "GET" && !req.path.startsWith("/setting/loginConfig/")))) {
    return requireAdmin(req, res, next);
  }
  if (req.path.startsWith("/other/deleteAllData")) return requireAdmin(req, res, next);
  if (req.path.startsWith("/test/")) return requireAdmin(req, res, next);

  const projectId = await projectIdFromReference(req);
  if (projectId === undefined || !Number.isFinite(projectId)) return next();
  const project = await db("o_project").where("id", projectId).select("id", "userId").first();
  if (!project) return res.status(404).send({ message: "项目不存在" });
  if (!isAdmin(user) && Number(project.userId ?? 1) !== user.id) return res.status(403).send({ message: "无权访问该项目" });
  return next();
}

export async function enforceStaticProjectAccess(req: Request, res: Response, next: NextFunction) {
  const user = currentUser(req);
  if (!user || isAdmin(user)) return next();
  const projectId = Number(req.path.split("/").filter(Boolean)[0]);
  if (!Number.isFinite(projectId)) return next();
  const project = await db("o_project").where("id", projectId).select("userId").first();
  if (!project || Number(project.userId ?? 1) !== user.id) return res.status(403).end();
  return next();
}
