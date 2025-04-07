import { Command } from "commander";
import { Commands } from "./commands/commands";

class RACLI {
  private program: Command;
  private commands: Commands;

  constructor() {
    this.program = new Command();
    this.commands = new Commands();
    this.configureCommands();
  }

  private configureCommands(): void {
    this.program
      .version("1.0.0")
      .command("create")
      .description(
        "Create React components, types, interfaces, hooks or contexts",
      )
      .option("-c, --component", "Create a React component")
      .option("-t, --type", "Create a TypeScript type")
      .option("-i, --interface", "Create a TypeScript interface")
      .option("-h, --hook", "Create a React hook")
      .option("-x, --context", "Create a React context")
      .option("-p, --path <path>", "Path to create the file (optional)")
      .requiredOption("-n, --name <name>", "Name of the item to create")
      .action((options) => {
        if (options.component) {
          this.commands.createComponent(options.name, options.path);
        } else if (options.type) {
          this.commands.createType(options.name, options.path);
        } else if (options.interface) {
          this.commands.createInterface(options.name, options.path);
        } else if (options.hook) {
          this.commands.createHook(options.name, options.path);
        } else if (options.context) {
          this.commands.createContext(options.name, options.path);
        } else {
          console.info(
            "Please specify what to create (--component, --type, --interface, --hook, or --context)",
          );
        }
      });

    this.program.on("command:*", (operands) => {
      console.error(`Error: Unknown command '${operands[0]}'`);
      const availableCommands = this.program.commands.map((cmd) => cmd.name());
      if (availableCommands.length > 0) {
        console.error("Available commands:", availableCommands.join(", "));
      }
      console.error("");
      this.program.help();
    });

    this.program.showSuggestionAfterError(true);
  }

  public run(): void {
    this.program.parse(process.argv);
  }
}

const cli = new RACLI();

cli.run();
