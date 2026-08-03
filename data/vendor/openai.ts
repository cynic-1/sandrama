type VideoMode =
  | "singleImage"
  | "startEndRequired"
  | "endFrameOptional"
  | "startFrameOptional"
  | "text"
  | (`videoReference:${number}` | `imageReference:${number}` | `audioReference:${number}`)[];

declare const axios: any;

interface TextModel { name: string; modelName: string; type: "text"; think: boolean; }
interface ImageModel { name: string; modelName: string; type: "image"; mode: ("text" | "singleImage" | "multiReference")[]; }
interface VideoModel {
  name: string;
  modelName: string;
  type: "video";
  mode: VideoMode[];
  audio: "optional" | false | true;
  durationResolutionMap: { duration: number[]; resolution: string[] }[];
}
interface VendorConfig {
  id: string;
  version: string;
  author: string;
  name: string;
  description: string;
  icon: string;
  inputs: { key: string; label: string; type: "text" | "password" | "url"; required: boolean; placeholder?: string }[];
  inputValues: Record<string, string>;
  models: (TextModel | ImageModel | VideoModel)[];
}
interface ImageConfig { prompt: string; referenceList?: { type: "image"; base64: string }[]; size: "1K" | "2K" | "4K"; aspectRatio: string; }
interface VideoConfig {
  duration: number;
  resolution: string;
  aspectRatio: string;
  prompt: string;
  referenceList?: { type: "image" | "video" | "audio"; base64: string }[];
  audio?: boolean;
  mode: VideoMode | VideoMode[];
}

const vendor: VendorConfig = {
  id: "openai",
  version: "3.0",
  author: "Toonflow",
  name: "OpenSand 全模态",
  description: "OpenSand 中转站的文本、图像和视频模型服务。",
  icon: "",
  inputs: [
    { key: "apiKey", label: "API密钥", type: "password", required: true },
    { key: "baseUrl", label: "请求地址", type: "url", required: true, placeholder: "https://api.opensand.ai/v1" },
    { key: "mediaUploadUrl", label: "参考图床上传地址", type: "url", required: false, placeholder: "http://公网服务器/upload" },
    { key: "mediaUploadToken", label: "参考图床上传Token", type: "password", required: false },
  ],
  inputValues: { apiKey: "", baseUrl: "https://api.opensand.ai/v1", mediaUploadUrl: "", mediaUploadToken: "" },
  models: [
    { name: "GPT 5.4", modelName: "gpt-5.4", type: "text", think: false },
    { name: "GPT 5.5", modelName: "gpt-5.5", type: "text", think: false },
    { name: "DeepSeek V4 Pro", modelName: "deepseek-v4-pro", type: "text", think: false },
    { name: "DeepSeek V4 Flash", modelName: "deepseek-v4-flash", type: "text", think: false },
    { name: "Claude Sonnet 4.6", modelName: "claude-sonnet-4-6", type: "text", think: false },
    { name: "Gemini 3.5 Flash", modelName: "gemini-3.5-flash", type: "text", think: false },
    { name: "Kimi K2.6", modelName: "kimi-k2.6", type: "text", think: false },
    { name: "GLM 5.2", modelName: "glm-5.2", type: "text", think: false },
    { name: "Qwen 3.7 Plus", modelName: "qwen3.7-plus", type: "text", think: false },
    { name: "GPT Image 2", modelName: "gpt-image-2", type: "image", mode: ["text", "singleImage", "multiReference"] },
    {
      name: "Seedance 2.0",
      modelName: "seedance-2-0-260128",
      type: "video",
      mode: ["text", "singleImage", ["imageReference:1", "videoReference:1"]],
      audio: "optional",
      durationResolutionMap: [{ duration: [2, 3, 4, 5, 6, 8, 10], resolution: ["480p", "720p", "1080p", "4k"] }],
    },
    {
      name: "Seedance 2.0 HC",
      modelName: "seedance-2-0-hc",
      type: "video",
      mode: ["text", "singleImage", ["imageReference:1", "videoReference:1"]],
      audio: "optional",
      durationResolutionMap: [{ duration: [2, 3, 4, 5, 6, 8, 10], resolution: ["480p", "720p", "1080p", "4k"] }],
    },
    {
      name: "Seedance 2.0 EP",
      modelName: "seedance-2-0-ep",
      type: "video",
      mode: ["text", "singleImage", ["imageReference:1", "videoReference:1"]],
      audio: "optional",
      durationResolutionMap: [{ duration: [2, 3, 4, 5, 6, 8, 10], resolution: ["480p", "720p", "1080p", "4k"] }],
    },
    {
      name: "Seedance 2.0 Fast",
      modelName: "seedance-2-0-fast-260128",
      type: "video",
      mode: ["text", "singleImage", ["imageReference:1", "videoReference:1"]],
      audio: "optional",
      durationResolutionMap: [{ duration: [2, 3, 4, 5, 6, 8, 10], resolution: ["480p", "720p"] }],
    },
    {
      name: "Seedance 2.0 Fast HC",
      modelName: "seedance-2-0-fast-hc",
      type: "video",
      mode: ["text", "singleImage", ["imageReference:1", "videoReference:1"]],
      audio: "optional",
      durationResolutionMap: [{ duration: [2, 3, 4, 5, 6, 8, 10], resolution: ["480p", "720p"] }],
    },
    {
      name: "Seedance 2.0 Fast EP",
      modelName: "seedance-2-0-fast-ep",
      type: "video",
      mode: ["text", "singleImage", ["imageReference:1", "videoReference:1"]],
      audio: "optional",
      durationResolutionMap: [{ duration: [2, 3, 4, 5, 6, 8, 10], resolution: ["480p", "720p"] }],
    },
    {
      name: "Seedance 2.0 Mini",
      modelName: "seedance-2-0-mini-260615",
      type: "video",
      mode: ["text", "singleImage", ["imageReference:1", "videoReference:1"]],
      audio: "optional",
      durationResolutionMap: [{ duration: [2, 3, 4, 5, 6, 8, 10], resolution: ["480p", "720p"] }],
    },
    {
      name: "Seedance 2.0 Mini HC",
      modelName: "seedance-2-0-mini-hc",
      type: "video",
      mode: ["text", "singleImage", ["imageReference:1", "videoReference:1"]],
      audio: "optional",
      durationResolutionMap: [{ duration: [2, 3, 4, 5, 6, 8, 10], resolution: ["480p", "720p"] }],
    },
    {
      name: "Seedance 2.0 Mini EP",
      modelName: "seedance-2-0-mini-ep",
      type: "video",
      mode: ["text", "singleImage", ["imageReference:1", "videoReference:1"]],
      audio: "optional",
      durationResolutionMap: [{ duration: [2, 3, 4, 5, 6, 8, 10], resolution: ["480p", "720p"] }],
    },
    {
      name: "豆包 Seedance 2.0 国内版",
      modelName: "doubao-seedance-2.0",
      type: "video",
      mode: ["text", "singleImage", ["imageReference:1", "videoReference:1"]],
      audio: "optional",
      durationResolutionMap: [{ duration: [2, 3, 4, 5, 6, 8, 10], resolution: ["480p", "720p", "1080p", "4k"] }],
    },
  ],
};

function baseUrl(): string { return (vendor.inputValues.baseUrl || "https://api.opensand.ai/v1").replace(/\/+$/, ""); }
function apiKey(): string {
  const key = (vendor.inputValues.apiKey || "").replace(/^Bearer\s+/i, "");
  if (!key) throw new Error("缺少API Key");
  return key;
}
async function jsonRequest(path: string, init: any = {}): Promise<any> {
  const headers = { ...(init.headers || {}), Authorization: "Bearer " + apiKey() };
  const response = await fetch(baseUrl() + path, { ...init, headers });
  const text = await response.text();
  let data: any;
  try { data = JSON.parse(text); } catch (_) { data = { raw: text }; }
  if (!response.ok) {
    throw new Error(data?.error?.message || data?.message || data?.raw || `OpenSand请求失败（HTTP ${response.status}）`);
  }
  return data;
}
function outputUrl(data: any): string {
  const item = Array.isArray(data?.data) ? data.data[0] || {} : data?.data || data?.output || data || {};
  if (typeof item === "string" && (/^https?:\/\//i.test(item) || item.startsWith("data:image/"))) return item;
  if (item.url) return item.url;
  if (item.b64_json) return "data:image/png;base64," + item.b64_json;
  if (item.image_url) return item.image_url;
  throw new Error("OpenSand未返回图片地址");
}
function imageSize(aspectRatio: string): string {
  if (aspectRatio === "9:16") return "1024x1536";
  if (aspectRatio === "16:9") return "1536x1024";
  return "1024x1024";
}
function dataUrlParts(value: string): { mime: string; data: string } | null {
  const match = String(value || "").match(/^data:([^;]+);base64,(.+)$/);
  return match ? { mime: match[1], data: match[2] } : null;
}
function uploadUrl(): string {
  return String(vendor.inputValues.mediaUploadUrl || "").replace(/\/+$/, "");
}
function uploadToken(): string {
  return String(vendor.inputValues.mediaUploadToken || "");
}
function absoluteUploadedUrl(value: string): string {
  if (/^https?:\/\//i.test(value)) return value;
  return uploadUrl().replace(/\/upload$/, "") + "/" + String(value).replace(/^\/+/, "");
}
function fileExtension(mime: string, kind: string): string {
  const ext = mime.split("/")[1]?.split(";")[0] || kind;
  return ext === "jpeg" ? "jpg" : ext;
}
async function registerOpenSandAsset(publicUrl: string, modelName: string, assetType: string): Promise<string> {
  const data = await jsonRequest("/sd/assets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ URL: publicUrl, Name: "toonflow-reference", AssetType: assetType, model: modelName }),
  });
  const assetId = data?.data?.Id;
  if (!assetId) throw new Error("OpenSand素材登记未返回素材ID");
  return "asset://" + assetId;
}
async function toOpenSandAsset(ref: { type: string; base64: string }, modelName: string): Promise<string> {
  if (/^asset:\/\//i.test(ref.base64)) return ref.base64;
  let publicUrl = ref.base64;
  const parts = dataUrlParts(ref.base64);
  if (parts) {
    if (!uploadUrl() || !uploadToken()) throw new Error("未配置参考图床上传地址或上传Token");
    const form = new FormData();
    const kind = ref.type === "video" ? "video" : ref.type === "audio" ? "audio" : "image";
    form.append("file", Buffer.from(parts.data, "base64"), {
      filename: "toonflow-reference-" + Date.now() + "." + fileExtension(parts.mime, kind),
      contentType: parts.mime,
    });
    let uploadData: any;
    try {
      const uploadResponse = await axios.post(uploadUrl(), form, {
        headers: { ...form.getHeaders(), "X-Upload-Token": uploadToken() },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        timeout: 120000,
      });
      uploadData = uploadResponse.data;
    } catch (error: any) {
      const detail = error?.response?.data?.message || error?.message || "未知网络错误";
      throw new Error("图床上传失败: " + detail);
    }
    if (!uploadData?.url) throw new Error(uploadData?.message || "图床上传失败：未返回文件地址");
    publicUrl = absoluteUploadedUrl(uploadData.url);
  }
  if (!/^https?:\/\//i.test(publicUrl)) throw new Error("参考素材必须是公网URL或asset://地址");
  return registerOpenSandAsset(publicUrl, modelName, ref.type === "video" ? "Video" : ref.type === "audio" ? "Audio" : "Image");
}

const textRequest = (model: TextModel) => createOpenAI({ baseURL: baseUrl(), apiKey: apiKey() }).chat(model.modelName);

function seedreamSize(size: ImageConfig["size"]): string {
  // Seedream 5 Pro supports 1K/2K. Keep the UI's 4K option usable by
  // automatically falling back to the provider's maximum supported tier.
  return size === "1K" ? "1K" : "2K";
}

function seedreamTaskId(data: any): string {
  const candidate = data?.id ?? data?.task_id ?? data?.taskId ?? data?.data?.id ?? (typeof data?.data === "string" ? data.data : "");
  return String(candidate || "").trim();
}

async function seedreamResult(data: any): Promise<string> {
  try {
    return outputUrl(data);
  } catch {
    // Some OpenAI-compatible relays return an async task ID instead of data[].url.
  }

  const taskId = seedreamTaskId(data);
  if (!taskId || taskId.startsWith("data:image/")) throw new Error("OpenSand未返回Seedream任务ID或图片地址");

  const result = await pollTask(async () => {
    const response = await fetch(`${baseUrl()}/images/generations/${encodeURIComponent(taskId)}`, {
      method: "GET",
      headers: { Authorization: "Bearer " + apiKey(), Accept: "application/json" },
    });
    const text = await response.text();
    let payload: any;
    try {
      payload = text ? JSON.parse(text) : {};
    } catch {
      throw new Error(`OpenSand Seedream轮询返回了无效响应（HTTP ${response.status}）`);
    }
    if (!response.ok) {
      throw new Error(payload?.error?.message || payload?.message || `OpenSand Seedream轮询失败（HTTP ${response.status}）`);
    }
    try {
      return { completed: true, data: outputUrl(payload) };
    } catch {
      const status = String(payload?.status ?? payload?.data?.status ?? "").toLowerCase();
      if (["failed", "error", "cancelled", "canceled"].includes(status)) {
        return { completed: true, error: payload?.error?.message || payload?.message || "Seedream生成失败" };
      }
      return { completed: false };
    }
  }, 5000, 600000);

  if (result.error) throw new Error(result.error);
  if (!result.data) throw new Error("OpenSand Seedream任务完成但未返回图片地址");
  return result.data;
}

async function seedreamImageRequest(config: ImageConfig, model: ImageModel): Promise<string> {
  const references = (config.referenceList || []).map((ref) => ref.base64).filter(Boolean);
  const body: Record<string, any> = {
    model: model.modelName,
    prompt: config.prompt,
    size: seedreamSize(config.size),
    ...(references.length ? { images: references } : {}),
  };

  try {
    const data = await jsonRequest("/images/generations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return await seedreamResult(data);
  } catch (error: any) {
    const detail = error?.message || "未知网络错误";
    throw new Error(`OpenSand Seedream图像请求失败: ${detail}`);
  }
}

const imageRequest = async (config: ImageConfig, model: ImageModel): Promise<string> => {
  if (model.modelName.toLowerCase().includes("seedream")) {
    return seedreamImageRequest(config, model);
  }
  const refs = config.referenceList || [];
  if (refs.length === 0) {
    const data = await jsonRequest("/images/generations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: model.modelName, prompt: config.prompt, n: 1, size: imageSize(config.aspectRatio) }),
    });
    return outputUrl(data);
  }
  const form = new FormData();
  form.append("model", model.modelName);
  form.append("prompt", config.prompt);
  form.append("n", "1");
  form.append("size", imageSize(config.aspectRatio));
  refs.forEach((ref, index) => {
    const parts = dataUrlParts(ref.base64);
    if (parts) form.append("image[]", Buffer.from(parts.data, "base64"), { filename: "reference-" + index + ".png", contentType: parts.mime });
  });
  try {
    const response = await axios.post(baseUrl() + "/images/edits", form, {
      headers: { ...form.getHeaders(), Authorization: "Bearer " + apiKey() },
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      timeout: 180000,
    });
    return outputUrl(response.data);
  } catch (error: any) {
    const detail = error?.response?.data?.error?.message || error?.response?.data?.message || error?.message || "未知网络错误";
    throw new Error("OpenSand图像编辑请求失败: " + detail);
  }
};

const videoRequest = async (config: VideoConfig, model: VideoModel): Promise<string> => {
  const content: any[] = [{ type: "text", text: config.prompt }];
  const refs = config.referenceList || [];
  const addImage = async (ref: any, role = "reference_image") => content.push({ type: "image_url", image_url: { url: await toOpenSandAsset(ref, model.modelName) }, role });
  const addVideo = async (ref: any, role = "reference_video") => content.push({ type: "video_url", video_url: { url: await toOpenSandAsset(ref, model.modelName) }, role });
  const addAudio = async (ref: any, role = "reference_audio") => content.push({ type: "audio_url", audio_url: { url: await toOpenSandAsset(ref, model.modelName) }, role });

  // Toonflow 的 mode 会明确限制每类参考素材数量；不能把上传列表中的所有图片都提交给上游。
  if (Array.isArray(config.mode)) {
    const imageRefs = refs.filter((ref) => ref.type === "image");
    const videoRefs = refs.filter((ref) => ref.type === "video");
    const audioRefs = refs.filter((ref) => ref.type === "audio");
    let imageIndex = 0;
    let videoIndex = 0;
    let audioIndex = 0;
    for (const mode of config.mode.flat(Infinity) as string[]) {
      const match = String(mode).match(/^(image|video|audio)Reference:(\d+)$/);
      if (!match) continue;
      const count = Number(match[2]);
      if (match[1] === "image") {
        for (const ref of imageRefs.slice(imageIndex, imageIndex + count)) await addImage(ref);
        imageIndex += count;
      } else if (match[1] === "video") {
        for (const ref of videoRefs.slice(videoIndex, videoIndex + count)) await addVideo(ref);
        videoIndex += count;
      } else {
        for (const ref of audioRefs.slice(audioIndex, audioIndex + count)) await addAudio(ref);
        audioIndex += count;
      }
    }
  } else if (config.mode === "singleImage") {
    const first = refs.find((ref) => ref.type === "image");
    if (first) await addImage(first);
  } else if (config.mode === "startFrameOptional" || config.mode === "endFrameOptional" || config.mode === "startEndRequired") {
    const images = refs.filter((ref) => ref.type === "image");
    if (images[0]) await addImage(images[0], "first_frame");
    if (images[1]) await addImage(images[1], "last_frame");
  }
  const created = await jsonRequest("/video/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model: model.modelName, content, duration: config.duration, resolution: config.resolution, ratio: config.aspectRatio, generate_audio: config.audio !== false, watermark: false }),
  });
  const taskId = created?.task?.id || created?.id;
  if (!taskId) throw new Error("OpenSand未返回视频任务ID");
  const result = await pollTask(async () => {
    const data = await jsonRequest("/video/tasks/" + encodeURIComponent(taskId));
    const task = data?.task || data;
    const status = String(task?.status || "").toLowerCase();
    if (["completed", "success", "succeeded"].includes(status)) {
      const output = task?.outputs?.[0] || task?.output?.[0] || task?.video_url;
      return output ? { completed: true, data: output } : { completed: false, error: "视频任务完成但未返回地址" };
    }
    if (["failed", "error", "cancelled"].includes(status)) return { completed: false, error: task?.error?.message || task?.error || "视频生成失败" };
    return { completed: false };
  }, 10000, 1800000);
  if (result.error) throw new Error(result.error);
  if (!result.data) throw new Error("视频生成未返回地址");
  return result.data;
};

exports.vendor = vendor;
exports.textRequest = textRequest;
exports.imageRequest = imageRequest;
exports.videoRequest = videoRequest;
exports.ttsRequest = async () => "";
exports.checkForUpdates = async () => ({ hasUpdate: false, latestVersion: "3.0", notice: "" });
exports.updateVendor = async () => "";
export {};
