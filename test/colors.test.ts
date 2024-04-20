import { Colors } from '../src/colors';

test('Back string color yellow', () => {
  expect(Colors.yellow('Hello!')).toBe(`\x1b[33mHello!\x1b[0m`);
});

test('Back string color purple', () => {
  expect(Colors.purple('Hello!')).toBe(`\x1b[35mHello!\x1b[0m`);
});

test('Back string color green', () => {
  expect(Colors.green('Hello!')).toBe(`\x1b[32mHello!\x1b[0m`);
});

test('Back string color red', () => {
  expect(Colors.red('Hello!')).toBe(`\x1b[31mHello!\x1b[0m`);
});

test('Back string color blue', () => {
  expect(Colors.blue('Hello!')).toBe(`\x1b[34mHello!\x1b[0m`);
});

test('Back string color cyan', () => {
  expect(Colors.cyan('Hello!')).toBe(`\x1b[36mHello!\x1b[0m`);
});

test('Back string color black', () => {
  expect(Colors.black('Hello!')).toBe(`\x1b[30mHello!\x1b[0m`);
});

test('Back string color brightPurple', () => {
  expect(Colors.brightPurple('Hello!')).toBe(`\x1b[95mHello!\x1b[0m`);
});

test('Back string color gray', () => {
  expect(Colors.gray('Hello!')).toBe(`\x1b[90mHello!\x1b[0m`);
});
