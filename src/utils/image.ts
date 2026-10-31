import fs from "node:fs/promises";
import fss from "fs";
import path from "node:path";
import sharp from "sharp";

/**
 * Image scaling options
 */
export interface ResizeOptions {
  /** Maximum width (default 256*/
  width?: number;
  /** Maximum height (default 256*/
  height?: number;
  /** Zoom strategy: default to proportional scaling without exceeding the boundaries*/
  fit?: keyof sharp.FitEnum;
  /** Whether to disable zoom (default true)*/
  withoutEnlargement?: boolean;
}

const defaultResizeOptions: Required<ResizeOptions> = {
  width: 256,
  height: 256,
  fit: "inside",
  withoutEnlargement: true,
};

/**
 * Scale the image and write it to the target path (automatically creating the parent directory).
 * @param srcPath Absolute path of the source image
 * @param dstPath Absolute path of the target image
 * @param opts Zoom options
 */
export async function resizeImage(srcPath: string, dstPath: string, opts?: ResizeOptions): Promise<void> {
  const { width, height, fit, withoutEnlargement } = { ...defaultResizeOptions, ...opts };
  await fs.mkdir(path.dirname(dstPath), { recursive: true });
  await sharp(srcPath).resize(width, height, { fit, withoutEnlargement }).toFile(dstPath);
}

/**
 * Thumbnail custom size options
 */
export type ThumbnailSize =
  | { type: "dimensions"; width: number; height: number }
  | { type: "percentage"; value: number };

/**
 * Generate a thumbnail.
 * - If the thumbnail already exists, return its path directly.
 * - If it does not exist, generate it and return the target path; return null if generation fails.
 *
 * @param originalPath Absolute path of the original image
 * @param thumbnailPath Absolute path of the thumbnail
 * @param size Optional custom size: fixed width and height or percentage (default 256x256 inside)
 * @returns The thumbnail path, or null if it fails
 */
export async function ensureThumbnail(
  originalPath: string,
  thumbnailPath: string,
  size?: ThumbnailSize,
): Promise<string | null> {
  // The small image already exists, return directly
  if (fss.existsSync(thumbnailPath)) {
    return thumbnailPath;
  }
  // The original image does not exist, so it cannot be generated
  if (!fss.existsSync(originalPath)) {
    return null;
  }
  try {
    if (size?.type === "percentage") {
      // Percentage scaling: First obtain the original image dimensions, then calculate the target dimensions proportionally.
      const meta = await sharp(originalPath).metadata();
      if (!meta.width || !meta.height) {
        console.warn("[image] Unable to retrieve the original image dimensions:", originalPath);
        return null;
      }
      const pct = size.value / 100;
      const w = Math.round(meta.width * pct);
      const h = Math.round(meta.height * pct);
      await resizeImage(originalPath, thumbnailPath, { width: w, height: h });
    } else if (size?.type === "dimensions") {
      // Fixed width and height: proportionally scaled to fit the specified boundary
      await resizeImage(originalPath, thumbnailPath, {
        width: size.width,
        height: size.height,
      });
    } else {
      // Default 256x256 inside
      await resizeImage(originalPath, thumbnailPath);
    }
    console.info(`[${thumbnailPath}] Small image generated successfully`);
    return thumbnailPath;
  } catch (e) {
    console.warn("[image] Failed to generate thumbnail:", e);
    return null;
  }
}
