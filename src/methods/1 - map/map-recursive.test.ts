import map from './map-recursive';

describe('Happy path: map()', () => {
  it('map should be a function', () => {
    expect(map).toBeInstanceOf(Function);
  });

  it('map([1, 2], (item) => item) should return [1, 2]', () => {
    expect(map([1, 2], (item) => item)).toEqual([1, 2]);
  });

  it('map([3, 4], (item) => item) should return [3, 4]', () => {
    expect(map([3, 4], (item) => item)).toEqual([3, 4]);
  });

  it('map([1, 2], (item) => item + 1) should return [2, 3]', () => {
    expect(map([1, 2], (item) => item + 1)).toEqual([2, 3]);
  });

  it('map([4, 6], (item) => item + 1) should return [5, 7]', () => {
    expect(map([4, 6], (item) => item + 1)).toEqual([5, 7]);
  });

  it('map([1, 2], (item, index) => index) should return [0, 1]', () => {
    expect(map([1, 2], (item, index) => index)).toEqual([0, 1]);
  });

  it('map([1, 2], (item, index, array) => array) should return [[1, 2], [1, 2]]', () => {
    expect(map([1, 2], (item, index, array) => array)).toEqual([
      [1, 2],
      [1, 2],
    ]);
  });
});
