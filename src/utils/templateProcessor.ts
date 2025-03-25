import fs from "fs";
import path from "path";

export class TemplateProcessor {
  static processTemplate(
    templatePath: string,
    viewName: string,
    extension: string = "tsx",
  ) {
    try {
      const template = fs.readFileSync(
        path.resolve(__dirname, templatePath),
        "utf-8",
      );
      const content = template.replace(/__VIEW_NAME__/g, viewName);

      const outputPath = path.resolve(
        process.cwd(),
        `${viewName}.${extension}`,
      );
      fs.writeFileSync(outputPath, content, "utf-8");
      console.log(`Created ${viewName}.${extension}`);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      console.error(`Error processing template: ${errorMessage}`);
      console.error(
        `Attempted to read template from: ${path.resolve(__dirname, templatePath)}`,
      );
      process.exit(1);
    }
  }
}
