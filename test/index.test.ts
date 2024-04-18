import { colors } from '../src/index';

test('Back string color yellow', () => {
  expect(colors.yellow('Hello!')).toBe(`\x1b[33mHello!\x1b[0m`);
});

test('Back string color purple', () => {
  expect(colors.purple('Hello!')).toBe(`\x1b[35mHello!\x1b[0m`);
});

test('Back string color green', () => {
  expect(colors.green('Hello!')).toBe(`\x1b[32mHello!\x1b[0m`);
});

test('Back string color red', () => {
  expect(colors.red('Hello!')).toBe(`\x1b[31mHello!\x1b[0m`);
});

test('Back string color blue', () => {
  expect(colors.blue('Hello!')).toBe(`\x1b[34mHello!\x1b[0m`);
});

test('Back string color cyan', () => {
  expect(colors.cyan('Hello!')).toBe(`\x1b[36mHello!\x1b[0m`);
});

test('Back string color black', () => {
  expect(colors.black('Hello!')).toBe(`\x1b[30mHello!\x1b[0m`);
});

test('Back string color brightPurple', () => {
  expect(colors.brightPurple('Hello!')).toBe(`\x1b[95mHello!\x1b[0m`);
});

test('Back string color gray', () => {
  expect(colors.gray('Hello!')).toBe(`\x1b[90mHello!\x1b[0m`);
});
