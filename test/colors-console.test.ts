import { ColorsConsole } from '../src/colors-console';

describe('ColorsConsole', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Back string color gray', () => {
    ColorsConsole.gray('Hello!');
    expect(consoleSpy).toHaveBeenCalledWith(`\x1b[90mHello!\x1b[0m`);
  });
});
