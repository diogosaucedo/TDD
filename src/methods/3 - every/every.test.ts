import every from './every';

describe('Happy path: every()', () => {
  it('every should be a function', () => {
    expect(every).toBeInstanceOf(Function);
  });

  it('every([], (item) => item) should return true', () => {
    expect(every([], (item) => item)).toBe(true);
  });

  it('every([0, 1, 2], (item) => item) should return false', () => {
    expect(every([0, 1, 2], (item) => item)).toBe(false);
  });

  it('every([1, 2, 3], (item) => item) should return true', () => {
    expect(every([1, 2, 3], (item) => item)).toBe(true);
  });

  it('every([1, 2, 3], (item, index) => index === item - 1) should return true', () => {
    expect(every([1, 2, 3], (item, index) => index === item - 1)).toBe(true);
  });

  it('every([1, 2, 3], (item, index, array) => array.length === 3) should return true', () => {
    expect(every([1, 2, 3], (item, index, array) => array.length === 3)).toBe(
      true,
    );
  });
});
