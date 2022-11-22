import SomeCallback from './type';
const some = <T>(array: Array<T>, callbackfn: SomeCallback<T>) => {
  return (function someInternal(arrayInternal, counter): boolean {
    const [head, ...tail] = arrayInternal;

    return arrayInternal.length === 0
      ? false
      : callbackfn(head, counter, array)
      ? true
      : someInternal(tail, counter + 1);
  })(array, 0);
};

export default some;
