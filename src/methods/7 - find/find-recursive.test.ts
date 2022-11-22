import find from './find-recursive';

describe('Happy path: find()', () => {
  it('find should be a function', () => {
    expect(find).toBeInstanceOf(Function);
  });

  it('find([1, 2, 3], (item) => item === 1) should return 1', () => {
    expect(find([1, 2, 3], (item) => item === 1)).toEqual(1);
  });

  it('find([1, 2, 3], (item) => item === 3) should return 3', () => {
    expect(find([1, 2, 3], (item) => item === 3)).toEqual(3);
  });

  it('find([1, 2, 3], (item, index) => index === 1) should return 2', () => {
    expect(find([1, 2, 3], (item, index) => index === 1)).toEqual(2);
  });

  it('find([1, 2, 3], (item, index, array) => array[index] === 2) should return 2', () => {
    expect(find([1, 2, 3], (item, index, array) => array[index] === 2)).toEqual(
      2,
    );
  });

  it('find([], (item) => item) should return undefined', () => {
    expect(find([], (item) => item)).toEqual(undefined);
  });
});
