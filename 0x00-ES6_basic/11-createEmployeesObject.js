export default function createEmployeesObject(departmentName, employees) {
  const EmployeeObject = {
    [`${departmentName}`]:
      employees,
  };
  return EmployeeObject;
}
