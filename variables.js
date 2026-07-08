// Variables Exercise 1

let firstName = "Juan";
let lastName = "Dela Cruz";
let age = 24;

/*
Task

Create a new variable that stores the person's full name.
Create another variable that tells how old they will be after 5 years.
Print a sentence using template literals.

*/

let fullName = `${firstName} ${lastName}`;
let afterFive = 24 + 5;

console.log(`\n${fullName} is ${afterFive} after five years.`);

console.log("\n+-+-+-+-+-+-+-+-+-+-+--+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+--+-+-+-+-+-+-+-\n");


/*Exercise 2

Compute the total price.
Apply a 10% discount.
Print the final amount.

*/

let price = 350;
let quantity = 4;

let totaPrice = price * quantity;
let finalAmount = 0.1 * totaPrice;

console.log(finalAmount);

