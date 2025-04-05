import * as utils from '../index';

describe('index.ts exports', () => {
  test('should export isEmpty function', () => {
    expect(typeof utils.isEmpty).toBe('function');
  });

  test('should export isString function', () => {
    expect(typeof utils.isString).toBe('function');
  });
});
