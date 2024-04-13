import { colors } from '../src/index';

test('Back string color yellow', () => {
  expect(colors.yellow('Hello!')).toBe(`\x1b[33mHello!\x1b[0m`);
});
