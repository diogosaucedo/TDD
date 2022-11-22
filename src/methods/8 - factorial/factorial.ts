const factorial = (value: number): number => {
  if (value === 0) return 1;

  if (value < 0 || value > 20) {
    throw new RangeError(
      'factorial should receive a positive number between 0 and 20 as argument',
    );
  }

  let accumulator = 1;

  for (let i = value; i >= 1; i--) {
    accumulator = accumulator * i;
  }

  return accumulator;
};
export default factorial;
