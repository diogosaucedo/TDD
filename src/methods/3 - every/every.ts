import EveryCallback from './type';

const every = <T>(array: Array<T>, callbackfn: EveryCallback<T>): boolean => {
  for (let i = 0; i < array.length; i++) {
    if (!callbackfn(array[i], i, array)) {
      return false;
    }
  }
  return true;
};

export default every;
