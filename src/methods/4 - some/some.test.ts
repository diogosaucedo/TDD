import some from './some';

describe('Happy path: some()', () => {
  it('some should be a function', () => {
    expect(some).toBeInstanceOf(Function);
  });

  it('some([], (item) => item) should return false', () => {
    expect(some([], (item) => item)).toBe(false);
  });

  it('some([1, 2], (item) => item) should return true', () => {
    expect(some([1, 2], (item) => item)).toBe(true);
  });

  it('some([1, 2, 3], (item) => item % 2) should return true', () => {
    expect(some([1, 2, 3], (item) => item % 2)).toBe(true);
  });

  it('some([1, 2, 3], (item, index) => index % 2) should return true', () => {
    expect(some([1, 2, 3], (item, index) => index % 2)).toBe(true);
  });

  it('some([1, 2, 3], (item, index, array) => array.indexOf(2) > -1) should return true', () => {
    expect(some([1, 2, 3], (item, index, array) => array.indexOf(2) > -1)).toBe(
      true,
    );
  });
});
