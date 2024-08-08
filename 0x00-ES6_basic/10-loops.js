export default function appendToEachArrayValue(array, appendString) {
  // eslint-disable-next-line
  for (let idx of array) {
    const newArray = [];
    newArray.push(appendString + idx);
  }
  return array;
}
