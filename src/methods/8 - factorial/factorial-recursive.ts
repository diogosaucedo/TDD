const factorial = (value: number): number => {
  const isNumberOutOfRange = value < 0 || value > 20;
  const isOneOrZero = value === 0 || value === 1;

  if (isNumberOutOfRange) {
    throw new RangeError(
      'factorial should receive a positive number between 0 and 20 as argument',
    );
  }

  return isOneOrZero ? 1 : value * factorial(value - 1);
};
export default factorial;
