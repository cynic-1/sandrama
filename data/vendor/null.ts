/**
 * SandDrama AI vendor template
 * @version 2.0
 */

// ============================================================
// Type definitions
// ============================================================

type VideoMode =
  | "singleImage" // Single-image reference
  | "startEndRequired" // First and last frames (both required)
  | "endFrameOptional" // First and last frames (last frame optional)
  | "startFrameOptional" // First and last frames (first frame optional)
  | "text" // Text
  | (`videoReference:${number}` | `imageReference:${number}` | `audioReference:${number}`)[]; // Multiple references (numbers indicate the limit)

interface TextModel {
  name: string;
  modelName: string;
  type: "text";
  think: boolean;
}

interface ImageModel {
  name: string;
  modelName: string;
  type: "image";
  mode: ("text" | "singleImage" | "multiReference")[];
  associationSkills?: string;
}

interface VideoModel {
  name: string;
  modelName: string;
  type: "video";
  mode: VideoMode[];
  associationSkills?: string;
  audio: "optional" | false | true;
  durationResolutionMap: { duration: number[]; resolution: string[] }[];
}

interface TTSModel {
  name: string;
  modelName: string;
  type: "tts";
  voices: { title: string; voice: string }[];
}

interface VendorConfig {
  id: string; // Unique ID, stored as a filename on the user's disk; special characters are prohibited.
  version: string; // Version number, in x.y format, must follow semantic versioning
  name: string; // Supplier Name
  author: string; // Author
  description?: string; // Description, supports Markdown format
  icon?: string; // Icon, Base64 format only, recommended size 128x128 pixels
  inputs: { key: string; label: string; type: "text" | "password" | "url"; required: boolean; placeholder?: string }[];
  inputValues: Record<string, string>;
  models: (TextModel | ImageModel | VideoModel | TTSModel)[];
}

type ReferenceList =
  | { type: "image"; sourceType: "base64"; base64: string }
  | { type: "audio"; sourceType: "base64"; base64: string }
  | { type: "video"; sourceType: "base64"; base64: string };

interface ImageConfig {
  prompt: string;
  referenceList?: Extract<ReferenceList, { type: "image" }>[];
  size: "1K" | "2K" | "4K";
  aspectRatio: `${number}:${number}`;
}

interface VideoConfig {
  duration: number;
  resolution: string;
  aspectRatio: "16:9" | "9:16";
  prompt: string;
  referenceList?: ReferenceList[];
  audio?: boolean;
  mode: VideoMode[];
}

interface TTSConfig {
  text: string;
  voice: string;
  speechRate: number;
  pitchRate: number;
  volume: number;
  referenceList?: Extract<ReferenceList, { type: "audio" }>[];
}

interface PollResult {
  completed: boolean;
  data?: string;
  error?: string;
}

// ============================================================
// Global declaration
// ============================================================

declare const axios: any; // HTTP request library
declare const logger: (msg: string) => void; // Logging function
declare const jsonwebtoken: any; // JWT processing library
declare const zipImage: (base64: string, size: number) => Promise<string>; // Image compression function, returns a base64 string with header
declare const zipImageResolution: (base64: string, w: number, h: number) => Promise<string>; // Image resolution adjustment function, returns a base64 string with header
declare const mergeImages: (base64Arr: string[], maxSize?: string) => Promise<string>; // Image composition function, returns a base64 string with header
declare const urlToBase64: (url: string) => Promise<string>; // URL to Base64 function, returns a Base64 string with header
declare const pollTask: (fn: () => Promise<PollResult>, interval?: number, timeout?: number) => Promise<PollResult>; // Polling function, where fn is an async function, interval is the polling interval, timeout is the timeout duration, and it returns the result of fn.
declare const createOpenAI: any;
declare const createDeepSeek: any;
declare const createZhipu: any;
declare const createQwen: any;
declare const createAnthropic: any;
declare const createOpenAICompatible: any;
declare const createXai: any;
declare const createMinimax: any;
declare const createGoogleGenerativeAI: any;
declare const exports: {
  vendor: VendorConfig;
  textRequest: (m: TextModel, t: boolean, tl: 0 | 1 | 2 | 3) => any; // Text model
  imageRequest: (c: ImageConfig, m: ImageModel) => Promise<string>; // Image model, returns a base64 string with a header
  videoRequest: (c: VideoConfig, m: VideoModel) => Promise<string>; // Video model, returns a base64 string with a header
  ttsRequest: (c: TTSConfig, m: TTSModel) => Promise<string>; // (Not yet available) Voice model, returns a base64 string with headers
  checkForUpdates?: () => Promise<{ hasUpdate: boolean; latestVersion: string; notice: string }>; // Check the update function, returning whether an update is available, the latest version number, and the release notes (supports Markdown format).
  updateVendor?: () => Promise<string>; // Update the function to return the latest code text
};

// ============================================================
// Supplier configuration
// ============================================================

const vendor: VendorConfig = {
  id: "null",
  version: "2.0",
  author: "SandDrama",
  name: "Empty template",
  description: "## Development template，You can use this templateVibe Coding",
  inputs: [
    { key: "apiKey", label: "APIKey", type: "password", required: true },
    { key: "baseUrl", label: "Request address", type: "url", required: true, placeholder: "Example：https://api.openai.com/v1" },
  ],
  inputValues: { apiKey: "", baseUrl: "https://api.openai.com/v1" },
  models: [{ name: "GPT-4o", modelName: "gpt-4o", type: "text", think: false }],
};

// ============================================================
// Adapter function
// ============================================================

const textRequest = (model: TextModel, think: boolean, thinkLevel: 0 | 1 | 2 | 3) => {
  if (!vendor.inputValues.apiKey) throw new Error("MissingAPI Key");
  const apiKey = vendor.inputValues.apiKey.replace(/^Bearer\s+/i, "");
  return createOpenAI({ baseURL: vendor.inputValues.baseUrl, apiKey }).chat(model.modelName);
};

const imageRequest = async (config: ImageConfig, model: ImageModel): Promise<string> => {
  return "";
};

const videoRequest = async (config: VideoConfig, model: VideoModel): Promise<string> => {
  return "";
};

const ttsRequest = async (config: TTSConfig, model: TTSModel): Promise<string> => {
  return "";
};

const checkForUpdates = async (): Promise<{ hasUpdate: boolean; latestVersion: string; notice: string }> => {
  return { hasUpdate: false, latestVersion: "2.0", notice: "## New Version Update Announcement" };
};

const updateVendor = async (): Promise<string> => {
  return "";
};

// ============================================================
// Export
// ============================================================

exports.vendor = vendor;
exports.textRequest = textRequest;
exports.imageRequest = imageRequest;
exports.videoRequest = videoRequest;
exports.ttsRequest = ttsRequest;
exports.checkForUpdates = checkForUpdates;
exports.updateVendor = updateVendor;

// This line ensures the current file is recognized as a module, preventing global variable conflicts.
export {};

/**
 * ============================================================
 * AI Code Generation Guide
 * ============================================================
 *
 * [Overview]
 * This file is the SandDrama AI vendor adaptation template. When AI generates new vendor adaptation code,
 * Strictly adhere to the following rules and require the user to provide a target platform curl invocation example or API documentation as input.
 *
 * 【Prerequisites】
 * Before generating code, please ask the user for the following information (at least one):
 * 1. Example curl request for the target API (including request URL, Headers, Body structure, and response structure)
 * 2. Official documentation link or documentation screenshot/text content of the target API
 * 3. Model types to be supported (text / image / video / tts) and their capability descriptions
 * When insufficient information is available, proactively ask for clarification rather than fabricating API structures.
 *
 * 【Code Rules】
 *
 * 1. Prohibit the introduction of any external packages
 * Do not use `import` / `require`; only methods and objects declared in the "Global Declarations" section of this file may be used.
 * Includes: axios, logger, jsonwebtoken, zipImage, zipImageResolution, mergeImages,
 * urlToBase64, pollTask, as well as createOpenAI, createDeepSeek, createZhipu, createQwen,
 *    createAnthropic、createOpenAICompatible、createXai、createMinimax、
 * AI SDK factory functions such as createGoogleGenerativeAI.
 *
 * 2. Do not declare discrete all-uppercase constants outside of `exports.*` functions.
 * Error example: const API_URL = "https://..."; const MAX_RETRY = 3;
 * If configurable constant values are indeed required, they must be declared in `vendor.inputValues`.
 * Access via `vendor.inputValues.xxx` to allow users to configure it in the UI.
 * If a temporary variable is used purely for internal logic, it should be inlined within the corresponding `exports.*` function body and named using lower camelCase.
 *
 * 3. Keep logic as aggregated as possible within the corresponding `exports.*` functions.
 * Each adapter function (textRequest / imageRequest / videoRequest / ttsRequest)
 * It should be self-contained, with request construction, sending, polling, and result parsing logic written inside the function body, avoiding the splitting into numerous external helper functions.
 * If multiple functions indeed share common logic (e.g., signature calculation, token generation, request header construction),
 * Extract as a camelCase function within the file, placed in the "Helper Utilities" section before the "Adapter Functions" section.
 * And all-uppercase naming is not allowed.
 *
 * 4. Naming Conventions
 * Use camelCase for all variables and functions; UPPER_SNAKE_CASE is prohibited.
 *
 * 5. No need to redeclare the type
 * All interfaces and types (VendorConfig, ImageConfig, VideoConfig,
 * TTSConfig, TextModel, ImageModel, VideoModel, TTSModel, ReferenceList, PollResult, etc.
 * Use the AI-generated code as-is; do not redeclare it.
 *
 * 6. Return Value Specification
 * - textRequest(model): Returns an AI SDK chat model instance (created via factory functions such as createOpenAI).
 * - imageRequest(config, model): Returns a base64 string with a header (e.g., "data:image/png;base64,...").
 * `config.referenceList` is of type `Extract<ReferenceList, { type: "image" }>[]`,
 * Each citation entry is in base64 format (sourceType is fixed to "base64").
 * - videoRequest(config, model): Returns a base64 string with a header (e.g., "data:video/mp4;base64,...").
 * `config.referenceList` is of type `ReferenceList[]` and can contain three types of references: `image`, `video`, and `audio`.
 * Each citation entry is in base64 format (sourceType is fixed to "base64").
 * config.mode is the array of currently active video modes; determine how to use referenceList based on mode.
 * - ttsRequest(config, model): Returns a base64 string with a header (e.g., "data:audio/mp3;base64,...").
 * `config.referenceList` is of type `Extract<ReferenceList, { type: "audio" }>[]` (audio references).
 * When the API returns a URL instead of binary data, use urlToBase64(url) to convert it.
 *
 * 7. ReferenceList and VideoMode Description
 * ReferenceList is a unified multimedia reference type, where each entry contains:
 * - type: "image" | "audio" | "video" (media type)
 * - sourceType: "base64" (currently fixed to base64 in the template)
 * - base64 (corresponding data)
 *
 * VideoMode defines the input modes supported by the video model:
 * - "text": Generate video from plain text
 * - "singleImage": Single first-frame image
 * - "startEndRequired": First and last frames (both must be provided)
 * - "endFrameOptional": First and last frames (last frame optional)
 * - "startFrameOptional": First and last frames (first frame optional)
 * - Array format such as ["imageReference:9", "videoReference:3", "audioReference:3"]:
 * Multimodal reference mode; the number indicates the maximum quantity limit for this type.
 *
 * In `videoRequest`, `config.mode` indicates the currently selected mode; its value determines:
 * How to extract references of the corresponding type from config.referenceList
 * How to construct image/video/audio parameters in the API request body
 *
 * 8. Asynchronous Task Processing
 * For asynchronous tasks requiring polling, such as video generation, use the global `pollTask` function:
 *    const result = await pollTask(async () => {
 *      const resp = await axios.get(...);
 *      if (resp.data.status === "SUCCESS") return { completed: true, data: resp.data.url };
 *      if (resp.data.status === "FAILED") return { completed: true, error: resp.data.message };
 *      return { completed: false };
 * }, 5000, 600000); // Poll every 5 seconds, timeout after 10 minutes
 *    if (result.error) throw new Error(result.error);
 *    return await urlToBase64(result.data!);
 *
 * 9. Error Handling
 * Validate required parameters (e.g., API Key) at the beginning of each function; throw `new Error("...")` if missing.
 * When an API request fails, extract meaningful error information from the response and throw it; do not swallow the exception.
 *
 * 10. Log Output
 * Use logger("...") to output logs at key steps (e.g., "Starting task submission", "Task ID: xxx", "Polling...").
 * For easier debugging.
 *
 * 11. Fill in the vendor configuration
 * - id: lowercase English letters only, used as a filename; special characters and spaces are prohibited.
 * - version: Semantic versioning format "x.y".
 * - inputs: Configure the authentication details required by the target API (API Key, Secret, request URL, etc.).
 * - models: Fill in based on the list of models supported by the target platform, ensuring the `type` and model-specific fields are set correctly.
 * The `mode` of `VideoModel` corresponds to the input modes supported by the API (see the `VideoMode` description in Rule 7).
 * - VideoModel audio field: true (always generate audio), false (do not generate), "optional" (user-selectable).
 * - The `durationResolutionMap` in `VideoModel` maps each duration to the available resolutions.
 * - The `associationSkills` field of `VideoModel` is optional and is used to describe the model's special capabilities.
 * - The `mode` of `ImageModel` corresponds to the image generation modes supported by the API ("text" for pure text, "singleImage" for single-image reference, and "multiReference" for multi-image reference).
 * - The `voices` of TTSModel correspond to the list of selectable voice options.
 *
 * 12. Image Processing
 * Use zipImage(base64, maxSizeKB) when image size compression is required.
 * Use zipImageResolution(base64, width, height) when adjusting image resolution is required.
 * Use mergeImages(base64Arr, maxSize) when multiple images need to be combined into a single image.
 * All of the above functions accept and return base64 strings with headers.
 *
 * 13. File Structure
 * The generated code must preserve the overall structure of this template.
 * Type definition section → Global declaration section → Vendor configuration section → [Utility section (optional)] → Adapter function section → Export section
 * Do not disrupt the order, and do not remove existing structural comment separators.
 * The auxiliary tools area is used to place small camelCase helper functions shared by multiple adapter functions (e.g., getHeaders, getBaseUrl).
 *
 * 14. Export Specification
 * The following fields must be exported (via `exports.xxx = xxx` assignment):
 * - exports.vendor (required)
 * - exports.textRequest (required)
 * - exports.imageRequest (required)
 * - exports.videoRequest (required)
 * - exports.ttsRequest (required)
 * - exports.checkForUpdates (optional)
 * - exports.updateVendor (optional)
 * Unimplemented adapter functions retain empty implementations (return "") and must not omit the export.
 * The file must end with `export {};` to ensure it is recognized as a module.
 *
 * 【Generation Process】
 * When the user requests to generate a new vendor adaptation:
 * 1. Confirm that the user has provided a curl example or API documentation.
 * 2. Analyze the API's authentication method, endpoint addresses, and request/response structures.
 * 3. Based on this template structure, populate the vendor configuration and the corresponding adapter functions.
 * 4. Based on the current template's ReferenceList definition, construct and consume the referenceList in base64 format.
 * 5. Implement only the model types required by the user; keep unused functions as empty implementations (return "").
 * 6. Generate complete, usable code, ensuring no syntax errors and no missing exports.
 */
