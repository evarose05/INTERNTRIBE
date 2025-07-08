const employees = [
  { name: "Rose", age: 25, department: "Engineering", role: "Developer", salary: 100000 },
  { name: "Gopi", age: 27, department: "Sales", role: "Manager", salary: 80000 },
  { name: "Feni", age: 26, department: "Engineering", role: "Salesperson", salary: 90000 },
  { name: "Abi", age: 25, department: "Engineering", role: "Tester", salary: 45000 },
  { name: "Evan", age: 22, department: "Sales", role: "Sales Manager", salary: 965000 }
];

let filteredEmployees = [...employees];

const tableBody = document.getElementById("employeeTableBody");
const searchInput = document.getElementById("searchInput");
const departmentFilter = document.getElementById("departmentFilter");
const avgSalaryDisplay = document.getElementById("averageSalary");
const searchResult = document.getElementById("searchResult");
const employeeCount = document.getElementById("employeeCount");

function renderTable(data) {
  tableBody.innerHTML = "";
  data.forEach(emp => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${emp.name}</td>
      <td>${emp.age}</td>
      <td>${emp.department}</td>
      <td>${emp.role}</td>
      <td>$${emp.salary}</td>
    `;
    tableBody.appendChild(row);
  });
  employeeCount.textContent = `Total Employees: ${data.length}`;
}

function convertNamesToUppercase() {
  filteredEmployees = filteredEmployees.map(emp => {
    return { ...emp, name: emp.name.toUpperCase() };
  });
  renderTable(filteredEmployees);
}

departmentFilter.addEventListener("change", () => {
  const dept = departmentFilter.value;
  filteredEmployees = dept
    ? employees.filter(emp => emp.department === dept)
    : [...employees];
  renderTable(filteredEmployees);
});

function calculateAverageSalary() {
  const total = filteredEmployees.reduce((sum, emp) => sum + emp.salary, 0);
  const avg = filteredEmployees.length ? (total / filteredEmployees.length).toFixed(2) : 0;
  avgSalaryDisplay.textContent = `Average Salary: $${avg}`;
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const found = employees.find(emp => emp.name.toLowerCase() === query);
  searchResult.textContent = found
    ? `Search Result: ${found.name}, ${found.age} years old, ${found.role} in ${found.department}, $${found.salary}`
    : "Search Result: No match found";
});

renderTable(filteredEmployees);
