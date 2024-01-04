export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(listObject) {
      return Object.keys(listObject).length;
    },
  };
}
