import fs from "fs";
import path from "path";
import {
  getTemplateContent,
  ensureDirectoryExistence,
} from "../utils/fileUtils";

export class Commands {
  createComponent(name: string, targetPath?: string): void {
    try {
      const componentTemplate = getTemplateContent("component.template");
      const formattedContent = componentTemplate.replace(
        /{{ComponentName}}/g,
        name,
      );
      const rootDir = process.cwd();

      let componentFilePath: string;
      if (targetPath) {
        const fullTargetPath = path.join(rootDir, targetPath);
        ensureDirectoryExistence(fullTargetPath);
        componentFilePath = path.join(fullTargetPath, `${name}.tsx`);
      } else {
        componentFilePath = path.join(rootDir, `${name}.tsx`);
      }

      fs.writeFileSync(componentFilePath, formattedContent);
      console.info(`Component ${name} created successfully!`);
    } catch (error) {
      console.error(
        `Error creating component: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  createType(name: string, targetPath?: string): void {
    try {
      const typeTemplate = getTemplateContent("type.template");
      const formattedContent = typeTemplate.replace(/{{TypeName}}/g, name);
      const rootDir = process.cwd();

      let typeFilePath: string;
      if (targetPath) {
        const fullTargetPath = path.join(rootDir, targetPath);
        ensureDirectoryExistence(fullTargetPath);
        typeFilePath = path.join(fullTargetPath, `${name}.ts`);
      } else {
        typeFilePath = path.join(rootDir, `${name}.ts`);
      }

      fs.writeFileSync(typeFilePath, formattedContent);
      console.info(`Type ${name} created successfully!`);
    } catch (error) {
      console.error(
        `Error creating type: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  createInterface(name: string, targetPath?: string): void {
    try {
      const interfaceTemplate = getTemplateContent("interface.template");
      const formattedContent = interfaceTemplate.replace(
        /{{InterfaceName}}/g,
        name,
      );
      const rootDir = process.cwd();

      let interfaceFilePath: string;
      if (targetPath) {
        const fullTargetPath = path.join(rootDir, targetPath);
        ensureDirectoryExistence(fullTargetPath);
        interfaceFilePath = path.join(fullTargetPath, `${name}.ts`);
      } else {
        interfaceFilePath = path.join(rootDir, `${name}.ts`);
      }

      fs.writeFileSync(interfaceFilePath, formattedContent);
      console.info(`Interface ${name} created successfully!`);
    } catch (error) {
      console.error(
        `Error creating interface: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  createHook(name: string, targetPath?: string): void {
    try {
      const hookTemplate = getTemplateContent("hook.template");
      const formattedContent = hookTemplate.replace(/{{HookName}}/g, name);
      const rootDir = process.cwd();

      let hookFilePath: string;
      if (targetPath) {
        const fullTargetPath = path.join(rootDir, targetPath);
        ensureDirectoryExistence(fullTargetPath);
        hookFilePath = path.join(fullTargetPath, `${name}.ts`);
      } else {
        hookFilePath = path.join(rootDir, `${name}.ts`);
      }

      fs.writeFileSync(hookFilePath, formattedContent);
      console.info(`Hook ${name} created successfully!`);
    } catch (error) {
      console.error(
        `Error creating hook: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  createContext(name: string, targetPath?: string): void {
    try {
      const contextTemplate = getTemplateContent("context.template");
      const formattedContent = contextTemplate.replace(
        /{{ContextName}}/g,
        name,
      );
      const rootDir = process.cwd();

      let contextFilePath: string;
      if (targetPath) {
        const fullTargetPath = path.join(rootDir, targetPath);
        ensureDirectoryExistence(fullTargetPath);
        contextFilePath = path.join(fullTargetPath, `${name}.tsx`);
      } else {
        contextFilePath = path.join(rootDir, `${name}.tsx`);
      }

      fs.writeFileSync(contextFilePath, formattedContent);
      console.info(`Context ${name} created successfully!`);
    } catch (error) {
      console.error(
        `Error creating context: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }
}
