import filter from './filter';

describe('Happy path: filter()', () => {
  it('filter should be a function', () => {
    expect(filter).toBeInstanceOf(Function);
  });

  it('filter([1, 2, 3], (item) => item) should return [1, 2, 3]', () => {
    expect(filter([1, 2, 3], (item) => item)).toEqual([1, 2, 3]);
  });

  it('filter([0, 1, 2], (item) => item) should return [1, 2]', () => {
    expect(filter([0, 1, 2], (item) => item)).toEqual([1, 2]);
  });

  it('filter([1, 2, 3], (item) => item < 2) should return [1]', () => {
    expect(filter([1, 2, 3], (item) => item < 2)).toEqual([1]);
  });

  it('filter([1, 2, 3, 4, 7], (item, index) => item === index + 1) should return [1, 2, 3, 4]', () => {
    expect(
      filter([1, 2, 3, 4, 7], (item, index) => item === index + 1),
    ).toEqual([1, 2, 3, 4]);
  });

  it('filter([1, 2, 1, 4, 2], (item, index, array) => index === array.indexOf(item)) should return [1, 2, 4]', () => {
    expect(
      filter(
        [1, 2, 1, 4, 2],
        (item, index, array) => index === array.indexOf(item),
      ),
    ).toEqual([1, 2, 4]);
  });
});
