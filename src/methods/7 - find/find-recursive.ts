import FilterCallback from '../2 - filter/type';

const find = <T>(array: Array<T>, callbackfn: FilterCallback<T>) => {
  return (function findInternal(arrInternal, counter): any {
    const [head, ...tail] = arrInternal;

    return arrInternal.length === 0
      ? undefined
      : callbackfn(head, counter, array)
      ? head
      : findInternal(tail, counter + 1);
  })(array, 0);
};

export default find;
