import FilterCallback from './type';

const filter = <T>(
  array: Array<T>,
  callbackfn: FilterCallback<T>,
): Array<T> => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

export default filter;
