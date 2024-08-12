export default function createIteratorObject(report) {
  let theEmployees = [];
  for (const departments of Object.values(report.allEmployees)) {
    theEmployees = [...theEmployees, ...departments];
  }

  return theEmployees; // theEmployees[Symbol.iterator]();
}
