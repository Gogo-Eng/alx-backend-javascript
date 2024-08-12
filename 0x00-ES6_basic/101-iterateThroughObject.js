export default function iterateThroughObject(reportWithIterator) {
  let newReturn = '';
  for (const employee of reportWithIterator) {
    newReturn += `${employee} | `;
  }
  return newReturn.slice(0, -3);
}
