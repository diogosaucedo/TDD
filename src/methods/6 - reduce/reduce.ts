import ReduceCallback from './type';

const reduce = <T>(
  array: Array<T>,
  callbackfn: ReduceCallback<T>,
  initialValue: any = 0,
) => {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulator = callbackfn(accumulator, array[i], i, array);
  }

  return accumulator;
};

export default reduce;
