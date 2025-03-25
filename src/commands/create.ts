import { TemplateProcessor } from "../utils/templateProcessor";
import { ICreateOptions } from "../interfaces/commands.type";

export class ComponentCreator {
  static createComponent(options: ICreateOptions) {
    const { template, view } = options;

    if (!template || !view) {
      console.error("Both template and view options are required.");
      process.exit(1);
    }

    const extension = "tsx";
    const templatePath = `../templates/${template}.${extension}.template`;
    TemplateProcessor.processTemplate(templatePath, view, extension);
  }
}
