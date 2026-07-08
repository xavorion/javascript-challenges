// Exercise 1

let employee = {
    name: "Maria",
    hoursWorked: 40,
    hourlyRate: 250
};
/*

Create a function that computes the employee's salary.
Return the total salary.
Print the result.

*/

function computeSalary() {
  return employee.hourlyRate * employee.hoursWorked;
}

console.log("\n" + computeSalary());

console.log("\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-\n");

// Exercise 2
let temperature = 33;

/*
Create a function that converts Celsius to Fahrenheit.
Return the converted value.
*/

function toFahrenheit() {
  let fahrenheit = `${(temperature * 9) / 5 + 32}F`;
  return fahrenheit;
}

console.log(toFahrenheit());

