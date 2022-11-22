import MapCallback from './type';

const map = <T>(array: Array<T>, callbackfn: MapCallback<T>): Array<any> => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i], i, array));
  }
  return newArray;
};

export default map;
