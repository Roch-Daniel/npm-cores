import { colors } from '../src/index';

test('Back string color yellow', () => {
  console.log(colors.yellow('Hello!'));
  expect(colors.yellow('Hello!')).toBe(`\x1b[33mHello!\x1b[0m`);
});

test('Back string color purple', () => {
  console.log(colors.purple('Hello!'));
  expect(colors.purple('Hello!')).toBe(`\x1b[35mHello!\x1b[0m`);
});
