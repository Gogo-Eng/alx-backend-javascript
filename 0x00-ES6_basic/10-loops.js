export default function appendToEachArrayValue(array, appendString) {
  // eslint-disable-next-line
  for (let i = 0; i < array.length; i++) {
  // eslint-disable-next-line
    array[i] = appendString + array[i];
  }
  return array;
}
