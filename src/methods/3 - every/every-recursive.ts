import EveryCallback from './type';

const every = <T>(array: Array<T>, callbackfn: EveryCallback<T>): boolean => {
  return (function everyInternal(arrayInternal, counter): boolean {
    const [head, ...tail] = arrayInternal;

    return arrayInternal.length === 0
      ? true
      : !callbackfn(head, counter, array)
      ? false
      : everyInternal(tail, counter + 1);
  })(array, 0);
};

export default every;
