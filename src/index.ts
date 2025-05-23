import { Command } from "commander";
import { Commands } from "./commands/commands";
import fs from "fs";
import path from "path";
import chalk from "chalk";

class RACLI {
  private program: Command;
  private commands: Commands;

  constructor() {
    this.program = new Command();
    this.commands = new Commands();
    this.configureCommands();
  }

  private getVersion(): string {
    try {
      const packageJsonPath = path.resolve(__dirname, "../package.json");
      const packageJsonContent = fs.readFileSync(packageJsonPath, "utf8");
      const packageJson = JSON.parse(packageJsonContent);
      return packageJson.version || "1.0.0";
    } catch (error) {
      console.error(
        chalk.red("Error reading version from package.json:"),
        error,
      );
      return "1.0.0";
    }
  }

  private configureCommands(): void {
    const createCommand = this.program
      .version(this.getVersion())
      .command("create")
      .description(
        chalk.blueBright(
          "Create React components, types, interfaces, hooks or contexts",
        ),
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
            chalk.yellow(
              "Please specify what to create (--component, --type, --interface, --hook, or --context)",
            ),
          );
        }
      });

    createCommand.addHelpText(
      "after",
      `
      ${chalk.cyan("Examples:")}
        $ ${chalk.green("ra create --component --name Button")}
        $ ${chalk.green("ra create --type --name TUserData")}
        $ ${chalk.green("ra create --interface --name IUserProfile")}
        $ ${chalk.green("ra create --hook --name useAuth")}
        $ ${chalk.green("ra create --context --name Theme")}
        $ ${chalk.green("ra create --component --name Header --path src/components")}
      `,
    );

    this.program.on("command:*", (operands) => {
      console.error(chalk.red(`Error: Unknown command '${operands[0]}'`));
      const availableCommands = this.program.commands.map((cmd) => cmd.name());
      if (availableCommands.length > 0) {
        console.error(
          chalk.yellow("Available commands:"),
          chalk.green(availableCommands.join(", ")),
        );
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
