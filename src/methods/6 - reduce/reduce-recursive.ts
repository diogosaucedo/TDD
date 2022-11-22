import ReduceCallback from './type';
const reduce = <T>(
  array: Array<T>,
  callbackfn: ReduceCallback<T>,
  initialValue: any = 0,
) => {
  const acc = initialValue;

  return (function mainReduceInternal(accInternal, arrInternal, counter): any {
    const [head, ...tail] = arrInternal;
    const accNext = () => callbackfn(accInternal, head, counter, array);

    return arrInternal.length === 0
      ? accInternal
      : mainReduceInternal(accNext(), tail, counter + 1);
  })(acc, array, 0);
};

export default reduce;
