import fs from "fs";
import path from "path";
import getPath from "./getPath";

/**
 * Pass in a specified path parameter (style name) and a specified file name, recursively retrieve the file, and return its content.
 * @param styleName - Style directory name, e.g., "chinese_sweet_romance"
 * @param fileName - Target file name (without the .md extension), e.g., "art_character", "prefix"
 * @returns The file content as a string, or an empty string if not found
 */
export function getArtPrompt(styleName: string, source: string, fileName: string): string {
  const baseDir = getPath(["skills", source, styleName]);

  if (!fs.existsSync(baseDir)) {
    return "";
  }

  // Get the content of prefix.md
  const prefixFile = findFileRecursive(baseDir, "prefix.md");
  const prefixContent = prefixFile ? fs.readFileSync(prefixFile, "utf-8") : "";

  const target = fileName.endsWith(".md") ? fileName : `${fileName}.md`;
  const found = findFileRecursive(baseDir, target);

  if (!found) {
    return prefixContent;
  }

  const fileContent = fs.readFileSync(found, "utf-8");
  return prefixContent ? `${prefixContent}\n${fileContent}` : fileContent;
}
/**
 * Pass in a style directory name, retrieve the contents of all .md files under that style, and return them mapped by filename.
 * @param styleName - Style directory name, e.g., "chinese_sweet_romance"
 * @returns Record<filename (without extension), file content>
 */
export function getAllArtPrompts(styleName: string, source: string): Record<string, string> {
  const baseDir = getPath(["skills", source, styleName]);

  if (!fs.existsSync(baseDir)) {
    return {};
  }

  const result: Record<string, string> = {};
  collectMdFiles(baseDir, result);
  return result;
}

/**
 * Recursively search for a file with the specified filename and return the full path of the first match.
 */
function findFileRecursive(dir: string, targetName: string): string | null {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isFile() && entry.name === targetName) {
      return fullPath;
    }

    if (entry.isDirectory()) {
      const found = findFileRecursive(fullPath, targetName);
      if (found) return found;
    }
  }

  return null;
}

/**
 * Recursively collect the contents of all .md files in the directory
 */
function collectMdFiles(dir: string, result: Record<string, string>): void {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isFile() && entry.name.endsWith(".md")) {
      const key = entry.name.replace(/\.md$/, "");
      result[key] = fs.readFileSync(fullPath, "utf-8");
    }

    if (entry.isDirectory()) {
      collectMdFiles(fullPath, result);
    }
  }
}
