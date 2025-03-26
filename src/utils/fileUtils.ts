import fs from "fs";
import path from "path";

export function getTemplateContent(templateName: string): string {
  const templatePath = path.join(__dirname, "../../templates", templateName);
  try {
    return fs.readFileSync(templatePath, "utf8");
  } catch (_error) {
    throw new Error(`Template file not found: ${templateName}`);
  }
}

export function ensureDirectoryExistence(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}
