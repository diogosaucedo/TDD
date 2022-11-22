const reverse = <T>(array: Array<T>): Array<T> => {
  return array.length === 0
    ? []
    : [array.slice(-1)[0], ...reverse(array.slice(0, -1))];
};

export default reverse;
