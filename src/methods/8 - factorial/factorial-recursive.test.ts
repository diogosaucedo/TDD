import factorial from './factorial-recursive';

describe('Happy path: factorial', () => {
  it('fatorial should be a function', () => {
    expect(factorial).toBeInstanceOf(Function);
  });

  it('fatorial(3) should return 6', () => {
    const actual = factorial(3);
    const expected = 6;

    expect(actual).toEqual(expected);
  });

  it('fatorial(4) should return 24', () => {
    const actual = factorial(4);
    const expected = 24;

    expect(actual).toEqual(expected);
  });

  it('fatorial(5) should return 120', () => {
    const actual = factorial(5);
    const expected = 120;

    expect(actual).toEqual(expected);
  });
});

// ===========================================================================

describe('Unhappy path: factorial', () => {
  it('fatorial(0) should return 1', () => {
    const actual = factorial(0);
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('fatorial(-1) should throw a RangeError', () => {
    let error;
    try {
      factorial(-1);
    } catch (e: any) {
      error = e;
    }
    expect(error.name).toEqual('RangeError');
  });

  it('fatorial(-1) should throw a RangeError with message "factorial should receive a positive number between 0 and 20 as argument"', () => {
    let error;
    try {
      factorial(-1);
    } catch (e: any) {
      error = e;
    }
    expect(error.message).toEqual(
      'factorial should receive a positive number between 0 and 20 as argument',
    );
  });
});
