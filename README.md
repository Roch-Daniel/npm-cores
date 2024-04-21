## Description

This project was created to solve common problems encountered when trying to install libraries to add colors to the terminal that are compatible with the latest versions of other dependencies. It provides a simple and easy-to-use library that allows you to add colors to the terminal.

## Installation

To install this library, you can use the following command:

```bash
npm i colors_terminal
```

## Usage

Here is an example of how you can use this library to add colors to your terminal:

```js
const { Colors } = require('colors_terminal');

console.log(Colors.yellow('Hello, world!'));
```

```ts
import { Colors } from 'colors_terminal';

console.log(Colors.yellow('Hello, world!'));
```

In this example, the message ‘Hello, world!’ will be displayed in yellow in the terminal.

# New Features

### ColorsConsole

The `ColorsConsole` class is a new addition to the library that allows you to add colors to your console output without needing to use the console object directly. You can import it using:

```js
import { ColorsConsole } from 'colors_terminal';
```

And use it like this:

```js
ColorsConsole.red('Hello World!');
```

In this example, the message ‘Hello World!’ will be displayed in red in the terminal.

### Formatter

The `Formatter` class provides additional formatting options for your console output. It includes the following methods:

- `bold(msg: string | number)` : Makes the text bold.
- `underline(msg: string | number)` : Underlines the text.
- `inverted(msg: string | number)`: Inverts the foreground and background colors.
- `blink(msg: string)`: Makes the text blink (note: might not work in all terminals).
- `hidden(msg: string)`: Hides the text (can be revealed by selecting the text in the terminal).
- `strikethrough(msg: string)`: Strikes through the text.

Here’s an example of how to use the Formatter class:

```ts
import { Formatter } from 'colors_terminal';
console.log(Formatter.bold('Hello World!'));
```

In this example, the message ‘Hello, world!’ will be displayed in bold in the terminal.

**Please note that the actual appearance of the formatted text may vary depending on the terminal you are using. Some terminals may not support all formatting options.**

## GitHub

[More information](https://github.com/Daniel-Roch/npm-cores)

## Contribution

Contributions are welcome! Please read the contribution guidelines before submitting a pull request.

## License

This project is licensed under the MIT license.
