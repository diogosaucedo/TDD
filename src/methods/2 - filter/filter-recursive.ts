import FilterCallback from './type';

const filter = <T>(
  array: Array<T>,
  callbackfn: FilterCallback<T>,
): Array<T> => {
  return (function filterInternal(arrayInternal, counter): any {
    const [head, ...tail] = arrayInternal;

    return arrayInternal.length === 0
      ? []
      : (callbackfn(head, counter, array) ? [head] : []).concat(
          filterInternal(tail, counter + 1),
        );
  })(array, 0);
};

export default filter;
