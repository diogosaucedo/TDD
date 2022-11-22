type ReduceCallback<U> = (
  accumulator: any,
  item: U,
  index: number,
  array: U[],
) => any;

export default ReduceCallback;
