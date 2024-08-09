import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie']),
};

const report = createReportObject(employees);

export default function createIteratorObject(report) {
  //const theEmployees = [];
  let theEmployees = [];

  const arrays_arrays = Object.values(report.allEmployees);
  console.log(arrays_arrays);

  for (const departments of Object.values(report.allEmployees)) {
    theEmployees = [...theEmployees, ...departments];
    console.log(departments);
  }
  const thething = theEmployees[Symbol.iterator]();
  console.log(thething);
  console.log(theEmployees);

}
createIteratorObject(report);
console.log(report.getNumberOfDepartments(report.allEmployees));
