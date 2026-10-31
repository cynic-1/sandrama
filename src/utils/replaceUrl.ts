import path from "node:path";

export default function replaceUrl(url: string): string {
  if (typeof url !== "string" || !url.trim()) return "";
  let cleanedPath = "";
  try {
    const pathname = new URL(url).pathname;
    cleanedPath = pathname;
  } catch (e) {
    // If it is not a valid URL, use the original string directly
    cleanedPath = url;
  }
  cleanedPath = cleanedPath.replace(/^\/oss/, "").replace(/^\/smallImage/, "");
  // Remove the query parameters
  cleanedPath = cleanedPath.split("?")[0];
  // Prevent path traversal: after normalizing the path, ensure it does not contain upward components
  // Use POSIX normalization (preserving / separators), and remove all .. and .
  const normalized = path.posix.normalize(cleanedPath);

  // After normalization, if the path starts with ../ or equals .., it indicates path traversal; reject it and return an empty string.
  if (normalized.startsWith("../") || normalized === "..") {
    return "";
  }

  // Remove the leading slash to ensure the returned path is relative.
  return normalized.replace(/^\/+/, "");
}
