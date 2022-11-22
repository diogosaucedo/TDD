import MapCallback from './type';

const map = <T>(array: Array<T>, callbackfn: MapCallback<T>): Array<any> => {
  return (function mapInternal(arrayInternal, counter): Array<any> {
    const [head, ...tail] = arrayInternal;

    return arrayInternal.length === 0
      ? []
      : [callbackfn(head, counter, array), ...mapInternal(tail, counter + 1)];
  })(array, 0);
};

export default map;
