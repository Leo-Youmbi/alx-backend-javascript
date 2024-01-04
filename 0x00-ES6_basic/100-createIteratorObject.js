export default function createIteratorObject(report) {
  const employeesArray = [];
  // eslint-disable-next-line no-unused-vars
  Object.entries(report.allEmployees).forEach(([key, value]) => {
    for (const employee of value) {
      employeesArray.push(employee);
    }
  });
  return employeesArray;
}
