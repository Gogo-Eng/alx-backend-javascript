export default function appendToEachArrayValue(array, appendString) {
  // eslint-disable-next-line
  const newArray = [];
  for (const idx of array) {
    newArray.push(appendString + idx);
  }
  return newArray;
}
