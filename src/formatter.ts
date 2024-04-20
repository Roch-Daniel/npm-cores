export class Formatter {
  static bold(msg: string | number) {
    return `\x1b[1m${msg}\x1b[0m`;
  }

  static underline(msg: string | number) {
    return `\x1b[4m${msg}\x1b[0m`;
  }

  static inverted(msg: string | number) {
    return `\x1b[7m${msg}\x1b[0m`;
  }

  static blink(msg: string) {
    return `\x1b[5m${msg}\x1b[0m`;
  }

  static hidden(msg: string) {
    return `\x1b[8m${msg}\x1b[0m`;
  }

  static strikethrough(msg: string) {
    return `\x1b[9m${msg}\x1b[0m`;
  }
}
