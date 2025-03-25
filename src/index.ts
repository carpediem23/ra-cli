import { Command } from "commander";
import { ComponentCreator } from "./commands/create";

class CLI {
  private program: Command;

  constructor() {
    this.program = new Command();
    this.configureCommands();
  }

  private configureCommands(): void {
    this.program
      .command("create")
      .option("--template <template>", "Template type (component/view)")
      .option("--view <view>", "View name")
      .action((options) => {
        ComponentCreator.createComponent(options);
      });
  }

  public run(): void {
    this.program.parse(process.argv);
  }
}

const cli = new CLI();
cli.run();
