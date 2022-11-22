import FilterCallback from '../2 - filter/type';

const find = <T>(array: Array<T>, callbackfn: FilterCallback<T>) => {
  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i], i, array)) {
      return array[i];
    }
  }
};

export default find;
