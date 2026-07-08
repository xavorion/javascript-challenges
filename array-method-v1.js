let employees = [
  { name: 'Juan', department: 'IT', salary: 35000, yearsWorked: 3 },
  { name: 'Maria', department: 'HR', salary: 28000, yearsWorked: 5 },
  { name: 'Pedro', department: 'IT', salary: 42000, yearsWorked: 7 },
  { name: 'Anna', department: 'Finance', salary: 55000, yearsWorked: 2 },
  { name: 'Mike', department: 'HR', salary: 31000, yearsWorked: 4 },
  { name: 'Lisa', department: 'IT', salary: 38000, yearsWorked: 6 }
];

// Get IT employees
function getITEmployees() {
  return employees.filter(({department}) => department === "IT");
}

console.log(getITEmployees());

// Get Salary Above 35,000
function getHighEarners() {
  return employees.filter(({salary}) => salary >= 35000);
}

console.log(getHighEarners());

// Get total average of salary
function getAverageSalary() {
  const avg = employees.reduce((acc,{salary}) => acc + salary,0) / employees.length;

  return avg;
}

console.log(getAverageSalary());

// Get seniors
function getSeniors() {
  return employees.filter(({yearsWorked}) => yearsWorked >= 5);
}

console.log(getSeniors());



// Get unique departments
function getDepartmentNames() {
  return employees.map(({department}) => department)
                  .filter((department, index, array) => array.indexOf(department) === index);
}

console.log(getDepartmentNames());


