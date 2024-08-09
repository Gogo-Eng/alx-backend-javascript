import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

export default function createIteratorObject(report) {
  const employees = [];
  for (const eachemployee of report) {
    employees.push(eachemployee);
  }

}
