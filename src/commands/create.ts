import { processTemplate } from '../utils/templateProcessor';

export function createComponent(options: { template: string; view: string }) {
  const { template, view } = options;
  if (!template || !view) {
    console.error('Both template and view options are required.');
    process.exit(1);
  }

  const templatePath = `../templates/${template}.${view}.template`;
  processTemplate(templatePath, view);
}
