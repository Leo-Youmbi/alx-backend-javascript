interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

let student1: Student = {
    firstName: "Leo",
    lastName: "Youmbi",
    age: 18,
    location: "Namibia",
};

let student2: Student = {
    firstName: "Ghany",
    lastName: "Neba",
    age: 19,
    location: "Nigeria",
};

let studentsList: Student[] = [student1, student2];

const student_table = document.createElement('table');
const student_body = document.createElement('tbody');

studentsList.forEach((objectList) => {
  const tableName = document.createElement('tableName');
  const tableRow = document.createElement('tableRow');
  const tableLocation = document.createElement('tableLocation');

  tableName.textContent = objectList.firstName;
  tableLocation.textContent = objectList.location;
  tableRow.appendChild(tableName);
  tableRow.appendChild(tableLocation);
  student_body.appendChild(tableRow);
})

student_table.appendChild(student_body);
document.body.appendChild(student_table);
