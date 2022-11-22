const reverse = <T>(array: Array<T>): Array<T> => {
  const newArray = [];

  for (let i = array.length; i--; ) {
    newArray.push(array[i]);
  }
  return newArray;
};

export default reverse;
