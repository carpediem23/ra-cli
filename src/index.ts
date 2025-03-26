import { Command } from "commander";

class CLI {
  private program: Command;

  constructor() {
    this.program = new Command();
    this.configureCommands();
  }

  private configureCommands(): void {
    this.program.version("1.0.0")
      .command("hello")
      .action(() => {
        console.info("hello from ra cli");
      });
  }

  public run(): void {
    this.program.parse(process.argv);
  }
}

const cli = new CLI();
cli.run();
