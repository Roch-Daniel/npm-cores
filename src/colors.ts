export class Colors {
  static yellow(msg: string | number) {
    return `\x1b[33m${msg}\x1b[0m`;
  }
  static green(msg: string | number) {
    return `\x1b[32m${msg}\x1b[0m`;
  }
  static red(msg: string | number) {
    return `\x1b[31m${msg}\x1b[0m`;
  }
  static blue(msg: string | number) {
    return `\x1b[34m${msg}\x1b[0m`;
  }
  static cyan(msg: string | number) {
    return `\x1b[36m${msg}\x1b[0m`;
  }
  static black(msg: string | number) {
    return `\x1b[30m${msg}\x1b[0m`;
  }
  static purple(msg: string | number) {
    return `\x1b[35m${msg}\x1b[0m`;
  }
  static brightPurple(msg: string | number) {
    return `\x1b[95m${msg}\x1b[0m`;
  }
  static gray(msg: string | number) {
    return `\x1b[90m${msg}\x1b[0m`;
  }
  static brightGray(msg: string | number) {
    return `\x1b[37m${msg}\x1b[0m`;
  }
}
