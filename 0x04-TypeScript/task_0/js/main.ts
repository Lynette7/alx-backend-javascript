export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const stud1: Student = {
    firstName: "Lynette",
    lastName: "Mwangi",
    age: 20,
    location: "Kenya",
};
const stud2: Student = {
    firstName: "Jenny",
    lastName: "Doe",
    age: 21,
    location: "Madagascar",
};
  
const studentsList: Array<Student> = [
    stud1,
    stud2,
];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const cell1Head: HTMLTableCellElement = rowHead.insertCell(0);
const cell2Head: HTMLTableCellElement = rowHead.insertCell(1);

cell1Head.innerHTML = "First Name";
cell2Head.innerHTML = "Location";
table.append(thead);

studentsList.forEach((stud) => {
  const row: HTMLTableRowElement = tbody.insertRow(0);
  const cell1: HTMLTableCellElement = row.insertCell(0);
  const cell2: HTMLTableCellElement = row.insertCell(1);

  cell1.innerHTML = stud.firstName;
  cell2.innerHTML = stud.location;
});

table.append(tbody);
body.append(table);