import { Formatter } from '../src/formatter';

test('Back string bold', () => {
  expect(Formatter.bold('Hello!')).toBe(`\x1b[1mHello!\x1b[0m`);
});

test('Back string underline', () => {
  expect(Formatter.underline('Hello!')).toBe(`\x1b[4mHello!\x1b[0m`);
});

test('Back string inverted', () => {
  expect(Formatter.inverted('Hello!')).toBe(`\x1b[7mHello!\x1b[0m`);
});

test('Back string blink', () => {
  expect(Formatter.blink('Hello!')).toBe(`\x1b[5mHello!\x1b[0m`);
});

test('Back string hidden', () => {
  expect(Formatter.hidden('Hello!')).toBe(`\x1b[8mHello!\x1b[0m`);
});

test('Back string strikethrough', () => {
  expect(Formatter.strikethrough('Hello!')).toBe(`\x1b[9mHello!\x1b[0m`);
});
