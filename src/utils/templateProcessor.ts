import fs from 'fs';
import path from 'path';

export function processTemplate(templatePath: string, viewName: string) {
  const template = fs.readFileSync(path.resolve(__dirname, templatePath), 'utf-8');
  const content = template.replace(/__VIEW_NAME__/g, viewName);

  const outputPath = path.resolve(process.cwd(), `${viewName}.tsx`);
  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`Created ${viewName}.tsx`);
}
