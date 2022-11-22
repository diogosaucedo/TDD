import SomeCallback from './type';
const some = <T>(array: Array<T>, callbackfn: SomeCallback<T>) => {
  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i], i, array)) {
      return true;
    }
  }
  return false;
};

export default some;
