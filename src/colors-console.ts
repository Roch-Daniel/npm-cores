export class ColorsConsole {
  private static logMessageToConsole(msg: string) {
    console.log(msg);
  }
  static black(msg: string | number): void {
    this.logMessageToConsole(`\x1b[30m${msg}\x1b[0m`);
  }
  static red(msg: string | number): void {
    this.logMessageToConsole(`\x1b[31m${msg}\x1b[0m`);
  }
  static green(msg: string | number): void {
    this.logMessageToConsole(`\x1b[32m${msg}\x1b[0m`);
  }
  static yellow(msg: string | number): void {
    this.logMessageToConsole(`\x1b[33m${msg}\x1b[0m`);
  }
  static blue(msg: string | number): void {
    this.logMessageToConsole(`\x1b[34m${msg}\x1b[0m`);
  }
  static purple(msg: string | number): void {
    this.logMessageToConsole(`\x1b[35m${msg}\x1b[0m`);
  }
  static cyan(msg: string | number): void {
    this.logMessageToConsole(`\x1b[36m${msg}\x1b[0m`);
  }
  static gray(msg: string | number): void {
    this.logMessageToConsole(`\x1b[90m${msg}\x1b[0m`);
  }
}
