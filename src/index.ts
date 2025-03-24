#!/usr/bin/env node

import { Command } from 'commander';
import { createComponent } from './commands/create';

const program = new Command();

program
  .command('create')
  .option('--template <template>', 'Template type (component/view)')
  .option('--view <view>', 'View name')
  .action((options) => {
    createComponent(options);
  });

program.parse(process.argv);
