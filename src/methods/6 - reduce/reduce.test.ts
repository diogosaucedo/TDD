import reduce from './reduce';

describe('Happy path: reduce()', () => {
  it('reduce should be a function', () => {
    expect(reduce).toBeInstanceOf(Function);
  });

  it('reduce([1, 2, 3], (acc, item) => acc + item) should return 6', () => {
    const before = reduce([1, 2, 3], (acc, item) => acc + item, 0);
    const after = 6;
    expect(before).toEqual(after);
  });

  it('reduce([1, 2, 3, 4], (acc, item) => acc + item, 0) should return 10', () => {
    const before = reduce([1, 2, 3, 4], (acc, item) => acc + item, 0);
    const after = 10;
    expect(before).toEqual(after);
  });

  it('reduce([1, 2, 3, 4], (acc, item) => acc + item) should return 10', () => {
    const before = reduce([1, 2, 3, 4], (acc, item) => acc + item);
    const after = 10;
    expect(before).toEqual(after);
  });

  it('reduce([1, 2], (acc, item, index) => acc + index) should return 1', () => {
    const before = reduce([1, 2], (acc, item, index) => acc + index);
    const after = 1;
    expect(before).toEqual(after);
  });

  it('reduce([1, 2], (acc, item) => { acc["number-" + item] = item; return acc }, {}) should return 1', () => {
    const before = reduce(
      [1, 2],
      (acc, item) => {
        acc['number-' + item] = item;
        return acc;
      },
      {},
    );
    const after = { 'number-1': 1, 'number-2': 2 };
    expect(before).toEqual(after);
  });

  it('reduce([1, 2], (acc, item, index, array) => acc + array[index], 0) should return 3', () => {
    const before = reduce(
      [1, 2],
      (acc, item, index, array) => acc + array[index],
      0,
    );
    const after = 3;
    expect(before).toEqual(after);
  });
});
