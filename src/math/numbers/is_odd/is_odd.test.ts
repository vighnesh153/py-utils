import { isOdd } from './is_odd';

describe('Math > isOdd tests', () => {
  it('should return false if number is even', () => {
    const num = 42;
    expect(isOdd(num)).toBe(false);
  });

  it('should return true if the number is odd', () => {
    const num = 69;
    expect(isOdd(num)).toBe(true);
  });
});
