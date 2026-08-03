import u from "@/utils";

export type VideoReferenceSource = "assets" | "storyboard";
export type VideoReferenceType = "image" | "video" | "audio";

export interface VideoReferenceInput {
  id: number;
  sources: string;
}

export interface ResolvedVideoReference {
  id: number;
  sources: VideoReferenceSource;
  type: VideoReferenceType;
  filePath: string;
  storyboardId?: number;
  name?: string;
}

interface StoryboardRow {
  id: number;
  filePath?: string | null;
  index?: number | null;
}

interface AssetRow {
  id: number;
  name?: string | null;
  type?: string | null;
  imageType?: string | null;
  filePath?: string | null;
  storyboardId?: number | null;
}

interface ResolveVideoReferencesOptions {
  projectId: number;
  scriptId: number;
  trackId?: number;
  manualReferences?: VideoReferenceInput[];
  mode?: unknown;
  includeAllAssets?: boolean;
}

interface ResolveVideoReferencesResult {
  references: ResolvedVideoReference[];
  storyboardIds: number[];
}

type ParsedMode = string | string[];

function normalizeSource(source: string): VideoReferenceSource | null {
  const normalized = String(source || "").toLowerCase();
  if (normalized === "storyboard" || normalized === "storyboarditem") return "storyboard";
  if (normalized === "assets" || normalized === "asset") return "assets";
  return null;
}

function normalizeType(type: unknown): VideoReferenceType {
  const normalized = String(type || "image").toLowerCase();
  if (normalized.includes("audio") || normalized.includes("音频")) return "audio";
  if (normalized.includes("video") || normalized.includes("视频")) return "video";
  return "image";
}

function parseMode(mode: unknown): ParsedMode {
  if (Array.isArray(mode)) {
    return mode.flat(Infinity).filter((item): item is string => typeof item === "string");
  }
  if (typeof mode === "string") {
    const trimmed = mode.trim();
    if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
      try {
        const parsed = JSON.parse(trimmed);
        if (Array.isArray(parsed)) {
          return parsed.flat(Infinity).filter((item): item is string => typeof item === "string");
        }
      } catch {
        // 保留原始模式，让下方按单模式处理。
      }
    }
    return trimmed;
  }
  return "";
}

function getReferenceLimit(mode: ParsedMode, prefix: "imageReference" | "videoReference" | "audioReference"): number | undefined {
  if (!Array.isArray(mode)) return undefined;
  const item = mode.find((value) => value.toLowerCase().startsWith(`${prefix.toLowerCase()}:`));
  if (!item) return undefined;
  const count = Number(item.split(":")[1]);
  return Number.isFinite(count) && count > 0 ? count : undefined;
}

function isTextMode(mode: ParsedMode): boolean {
  return mode === "text";
}

function isSingleImageMode(mode: ParsedMode): boolean {
  return mode === "singleImage";
}

function isFrameMode(mode: ParsedMode): boolean {
  return mode === "startEndRequired" || mode === "endFrameOptional" || mode === "startFrameOptional";
}

function addUniqueReference(
  output: ResolvedVideoReference[],
  seen: Set<string>,
  reference: ResolvedVideoReference | null,
) {
  if (!reference || !reference.filePath) return;
  const key = `${reference.sources}:${reference.id}`;
  if (seen.has(key)) return;
  seen.add(key);
  output.push(reference);
}

function takeByType(references: ResolvedVideoReference[], type: VideoReferenceType, limit?: number) {
  const candidates = references.filter((reference) => reference.type === type);
  return typeof limit === "number" ? candidates.slice(0, limit) : candidates;
}

/**
 * 解析视频参考媒体。
 * 手动选择仍然排在最前面；没有手动选择时，自动使用当前轨道的分镜图及其关联资产。
 */
export async function resolveVideoReferences(options: ResolveVideoReferencesOptions): Promise<ResolveVideoReferencesResult> {
  const mode = parseMode(options.mode);
  if (isTextMode(mode)) return { references: [], storyboardIds: [] };

  const manualReferences = (options.manualReferences ?? []).filter((item) => Number.isFinite(item.id));
  const trackStoryboards: StoryboardRow[] = options.trackId
    ? await u
        .db("o_storyboard")
        .where({ projectId: options.projectId, scriptId: options.scriptId, trackId: options.trackId })
        .orderBy("index", "asc")
        .select("id", "filePath", "index")
    : [];
  const manualStoryboardIds = manualReferences
    .filter((item) => normalizeSource(item.sources) === "storyboard")
    .map((item) => item.id);
  const storyboardIds = [...new Set([...trackStoryboards.map((item) => item.id), ...manualStoryboardIds])];

  const storyboardRows: StoryboardRow[] = (
    storyboardIds.length ? await u.db("o_storyboard").whereIn("id", storyboardIds).select("id", "filePath", "index") : []
  ) as unknown as StoryboardRow[];
  const storyboardById = new Map<number, StoryboardRow>(storyboardRows.map((row: StoryboardRow) => [row.id, row]));
  const orderedStoryboards = [...trackStoryboards, ...storyboardRows.filter((row: StoryboardRow) => !trackStoryboards.some((item) => item.id === row.id))].sort(
    (left, right) => Number(left.index ?? 0) - Number(right.index ?? 0),
  );

  const assetRows: AssetRow[] = storyboardIds.length
    ? await u
        .db("o_assets2Storyboard")
        .leftJoin("o_assets", "o_assets2Storyboard.assetId", "o_assets.id")
        .leftJoin("o_image", "o_assets.imageId", "o_image.id")
        .whereIn("o_assets2Storyboard.storyboardId", storyboardIds)
        .select("o_assets.id", "o_assets.name", "o_assets.type", "o_image.filePath", "o_image.type as imageType", "o_assets2Storyboard.storyboardId")
        .orderBy("o_assets2Storyboard.storyboardId", "asc")
        .orderBy("o_assets.id", "asc")
    : [];
  const manualAssetIds = manualReferences
    .filter((item) => normalizeSource(item.sources) === "assets")
    .map((item) => item.id);
  const manualAssetRows: AssetRow[] = (
    manualAssetIds.length
      ? await u
          .db("o_assets")
          .leftJoin("o_image", "o_assets.imageId", "o_image.id")
          .whereIn("o_assets.id", manualAssetIds)
          .select("o_assets.id", "o_assets.name", "o_assets.type", "o_image.filePath", "o_image.type as imageType")
      : []
  ) as unknown as AssetRow[];
  const allManualAssetRows = [...assetRows, ...manualAssetRows.filter((row) => !assetRows.some((item) => item.id === row.id))];

  const resolvedManual: ResolvedVideoReference[] = [];
  const resolvedAutomatic: ResolvedVideoReference[] = [];
  const seenManual = new Set<string>();
  const seenAutomatic = new Set<string>();

  for (const item of manualReferences) {
    const source = normalizeSource(item.sources);
    if (!source) continue;
    if (source === "storyboard") {
      const row = storyboardById.get(item.id);
      addUniqueReference(resolvedManual, seenManual, row?.filePath ? { id: row.id, sources: source, type: "image", filePath: row.filePath } : null);
      continue;
    }
    const row = allManualAssetRows.find((asset) => asset.id === item.id);
    addUniqueReference(
      resolvedManual,
      seenManual,
      row?.filePath
        ? {
            id: row.id,
            sources: source,
            type: normalizeType(row.imageType || row.type),
            filePath: row.filePath,
            storyboardId: row.storyboardId ?? undefined,
            name: row.name ?? undefined,
          }
        : null,
    );
  }

  for (const row of orderedStoryboards) {
    addUniqueReference(
      resolvedAutomatic,
      seenAutomatic,
      row.filePath ? { id: row.id, sources: "storyboard", type: "image", filePath: row.filePath } : null,
    );
  }
  for (const row of assetRows) {
    addUniqueReference(
      resolvedAutomatic,
      seenAutomatic,
      row.filePath
        ? {
            id: row.id,
            sources: "assets",
            type: normalizeType(row.imageType || row.type),
            filePath: row.filePath,
            storyboardId: row.storyboardId ?? undefined,
            name: row.name ?? undefined,
          }
        : null,
    );
  }

  const allReferences: ResolvedVideoReference[] = [];
  const allSeen = new Set<string>();
  for (const reference of [
    ...resolvedAutomatic.filter((item) => item.sources === "storyboard"),
    ...resolvedManual.filter((item) => item.sources === "storyboard"),
    ...resolvedAutomatic.filter((item) => item.sources === "assets"),
    ...resolvedManual.filter((item) => item.sources === "assets"),
  ]) {
    addUniqueReference(allReferences, allSeen, reference);
  }
  if (options.includeAllAssets) {
    return { references: allReferences, storyboardIds };
  }
  if (isSingleImageMode(mode)) {
    return { references: takeByType(allReferences, "image", 1), storyboardIds };
  }
  if (isFrameMode(mode)) {
    return { references: takeByType(allReferences, "image", 2), storyboardIds };
  }

  if (Array.isArray(mode)) {
    return {
      references: [
        ...takeByType(allReferences, "image", getReferenceLimit(mode, "imageReference")),
        ...takeByType(allReferences, "video", getReferenceLimit(mode, "videoReference")),
        ...takeByType(allReferences, "audio", getReferenceLimit(mode, "audioReference")),
      ],
      storyboardIds,
    };
  }

  // 未声明多媒体能力时，只传图片，避免把音频/视频资产误当成图片参考。
  return { references: takeByType(allReferences, "image"), storyboardIds };
}

export function parseVideoMode(mode: unknown): string | string[] {
  return parseMode(mode);
}
