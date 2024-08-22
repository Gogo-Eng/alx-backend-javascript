// eslint-disable-next-line consistent-return
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  }
  try {
    const result = numerator / denominator;
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
