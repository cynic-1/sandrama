import isPathInside from "is-path-inside";
import getPath, { isEletron } from "@/utils/getPath";
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import crypto from "node:crypto";
import db from "@/utils/db";

// Normalize the path: remove leading slashes and convert path separators to the system separator
function normalizeUserPath(userPath: string): string {
  // Remove leading / or \
  const trimmedPath = userPath.replace(/^[/\\]+/, "");
  // Replace all / with the system path separator (path.sep)
  // This converts to \ on Windows and remains / on Unix
  return trimmedPath.split("/").join(path.sep);
}

// Validate the path
function resolveSafeLocalPath(userPath: string, rootDir: string): string {
  const safePath = normalizeUserPath(userPath);
  const absPath = path.join(rootDir, safePath);
  if (!isPathInside(absPath, rootDir)) {
    throw new Error(`${userPath}Not in the OSS root directory`);
  }
  return absPath;
}

class OSS {
  private rootDir: string;
  private initPromise: Promise<void>;

  constructor() {
    this.rootDir = getPath("oss");
    // Automatically create the root directory during initialization
    this.initPromise = fs.mkdir(this.rootDir, { recursive: true }).then(() => {});
  }

  /**
   * Wait for the root directory initialization to complete. Ensures all file operations are executed after the directory has been created.
   * @private
   */
  private async ensureInit() {
    await this.initPromise;
  }

  /**
   * Get the access URL for a file at the specified relative path.
   * @param userRelPath Relative file path provided by the user (using / as the separator)
   * @returns The HTTP link of the file (local service address)
   */
  async getFileUrl(userRelPath: string, prefix?: string): Promise<string> {
    if (!prefix) prefix = "oss";
    await this.ensureInit();
    const safePath = normalizeUserPath(userRelPath);
    // URLs always use `/`, so the system separator needs to be converted back to `/` here.
    let url = `/${prefix}/`;
    const publicBaseUrl = process.env.ossURL || process.env.OSSURL;
    if (publicBaseUrl) url = publicBaseUrl.replace(/\/+$/, "") + `/${prefix}/`;
    if (isEletron()) url = `http://localhost:${process.env.PORT}/${prefix}/`;
    const publicPath = safePath.split(path.sep).join("/");
    const expires = Math.floor(Date.now() / 1000) + 60 * 60;
    const signingSecret = await this.getSigningSecret();
    const signature = crypto.createHmac("sha256", signingSecret).update(`${prefix}:${publicPath}:${expires}`).digest("hex");
    return `${url}${publicPath}?sd_expires=${expires}&sd_access=${signature}`;
  }

  /**
   * Read the file content at the specified path into a Buffer.
   * @param userRelPath Relative file path provided by the user (using / as the separator)
   * @returns Buffer of the file content
   * @throws Errors such as the path not being within the OSS root directory, or the file not existing.
   */
  async getFile(userRelPath: string): Promise<Buffer> {
    await this.ensureInit();
    return fs.readFile(resolveSafeLocalPath(userRelPath, this.rootDir));
  }

  /**
   * Read the image file and convert it to a base64-encoded Data URL.
   * @param userRelPath Relative file path provided by the user (using / as the separator)
   * @returns A base64-encoded Data URL (e.g., data:image/png;base64,iVBORw0KGgo...)
   * @throws Errors such as the path not being within the OSS root directory, the file not existing, or the file not being an image
   */
  async getImageBase64(userRelPath: string): Promise<string> {
    await this.ensureInit();
    const absPath = resolveSafeLocalPath(userRelPath, this.rootDir);

    // Check if the file exists and is a file
    const stat = await fs.stat(absPath);
    if (!stat.isFile()) {
      throw new Error(`${userRelPath}Not a file`);
    }

    // Get the file extension and determine the MIME type
    const ext = path.extname(userRelPath).toLowerCase();
    const mimeTypes: Record<string, string> = {
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".png": "image/png",
      ".gif": "image/gif",
      ".webp": "image/webp",
      ".bmp": "image/bmp",
      ".svg": "image/svg+xml",
      ".ico": "image/x-icon",
      ".tiff": "image/tiff",
      ".tif": "image/tiff",
      ".mp4": "video/mp4",
      ".mp3": "audio/mpeg",
    };

    const mimeType = mimeTypes[ext];
    if (!mimeType) {
      throw new Error(`Unsupported image format:${ext}Supported formats:{Object.keys(mimeTypes).join(", ")}`);
    }

    // Read the file and convert it to base64
    const data = await fs.readFile(absPath);
    const base64 = data.toString("base64");
    // Return the complete Data URL
    return `data:${mimeType};base64,${base64}`;
  }
  /**
   * Delete the file at the specified path.
   * @param userRelPath Relative file path provided by the user (using / as the separator)
   * @throws Errors such as the path not being within the OSS root directory, or the file not existing.
   */
  async deleteFile(userRelPath: string): Promise<void> {
    await this.ensureInit();
    await fs.unlink(resolveSafeLocalPath(userRelPath, this.rootDir));
  }

  /**
   * Delete the specified folder and all its contents.
   * @param userRelPath Relative folder path provided by the user (using / as the separator)
   * @throws Errors such as the path not being within the OSS root directory, the folder not existing, or the target being a file instead of a folder
   */
  async deleteDirectory(userRelPath: string): Promise<void> {
    await this.ensureInit();
    const absPath = resolveSafeLocalPath(userRelPath, this.rootDir);
    const stat = await fs.stat(absPath);
    if (!stat.isDirectory()) {
      throw new Error(`${userRelPath}Not a folder`);
    }
    await fs.rm(absPath, { recursive: true, force: true });
  }

  /**
   * Write data to a new file at the specified path or overwrite an existing file.
   * Automatically create required parent folders before writing.
   * @param userRelPath Relative file path provided by the user (using / as the separator)
   * @param data The data to write, which can be a Buffer or a string
   * @throws Errors such as the path not being within the OSS root directory
   */
  async writeFile(userRelPath: string, data: Buffer | string): Promise<void> {
    await this.ensureInit();
    const absPath = resolveSafeLocalPath(userRelPath, this.rootDir);
    await fs.mkdir(path.dirname(absPath), { recursive: true });
    // If `data` is a string, treat it as base64-encoded: decode it first, then write.
    // Automatically strip any possible Data URL prefix (e.g., "data:image/png;base64,")
    const buffer = typeof data === "string" ? Buffer.from(data.replace(/^data:[^;]+;base64,/, ""), "base64") : data;
    await fs.writeFile(absPath, buffer);
  }

  /**
   * Check whether the file at the specified path exists.
   * @param userRelPath Relative file path provided by the user (using / as the separator)
   * @returns true if the file exists, otherwise false
   */
  async fileExists(userRelPath: string): Promise<boolean> {
    await this.ensureInit();
    try {
      const stat = await fs.stat(resolveSafeLocalPath(userRelPath, this.rootDir));
      return stat.isFile();
    } catch {
      return false;
    }
  }

  /**
   * Get the thumbnail URL of the image (longest side ≤ 512px, scaled proportionally).
   * Thumbnails are saved in the `smallImage` subfolder within the same directory as the original path.
   * If the thumbnail already exists, return its URL directly; otherwise, generate and save it synchronously, then return the thumbnail URL.
   * Return the original image URL when generation fails.
   * @param userRelPath Relative file path provided by the user (using / as the separator)
   * @returns Thumbnail URL (if it already exists or was generated successfully) or the original image URL (if generation failed)
   */
  async getSmallImageUrl(userRelPath: string): Promise<string> {
    // Construct the thumbnail relative path by inserting the `smallImage` directory before the directory hierarchy of the original path.
    // For example: 123/abc.jpg => smallImage/123/abc.jpg
    // const smallImageRelPath = `smallImage/${userRelPath.replace(/^[/\\]+/, "")}`;

    // if (await this.fileExists(smallImageRelPath)) {
    //   return this.getFileUrl(smallImageRelPath);
    // }

    // // Thumbnail not found: generate synchronously; return the original image URL if generation fails
    // const originalUrl = await this.getFileUrl(userRelPath);

    // try {
    //   await this.ensureInit();
    //   const srcAbsPath = resolveSafeLocalPath(userRelPath, this.rootDir);
    //   const dstAbsPath = resolveSafeLocalPath(smallImageRelPath, this.rootDir);
    //   await fs.mkdir(path.dirname(dstAbsPath), { recursive: true });
    //   await sharp(srcAbsPath)
    //     .resize(512, 512, { fit: "inside", withoutEnlargement: true })
    //     .toFile(dstAbsPath);
    // console.info(`[${dstAbsPath}] Small image written successfully`);
    const url = await this.getFileUrl(userRelPath);
    return `${url}&size=20`;
    // } catch (e) {
    // // Return the original image if generation fails
    // console.warn("[OSS] Failed to generate thumbnail:", e);
    //   return originalUrl;
    // }
  }

  private async getSigningSecret(): Promise<string> {
    if (process.env.OSS_SIGNING_SECRET) return process.env.OSS_SIGNING_SECRET;
    const setting = await db("o_setting").where("key", "tokenKey").select("value").first();
    return String(setting?.value || process.env.NODE_ENV || "sandrama");
  }
}

export default new OSS();
