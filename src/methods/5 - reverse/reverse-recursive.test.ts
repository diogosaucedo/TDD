import reverse from './reverse-recursive';

describe('Happy path: reverse()', () => {
  it('reverse should be a function', () => {
    expect(reverse).toBeInstanceOf(Function);
  });

  it('reverse([]) should return []', () => {
    expect(reverse([])).toEqual([]);
  });

  it('reverse([1]) should return [1]', () => {
    expect(reverse([1])).toEqual([1]);
  });

  it('reverse([1, 2]) should return [2, 1]', () => {
    expect(reverse([1, 2])).toEqual([2, 1]);
  });
});
