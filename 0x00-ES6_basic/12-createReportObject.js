export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(allEmployees) {
      return Object.keys(allEmployees).length;
    },
  };
  return reportObject;
}
