// get two numbers form the user

let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:")); 
let operation = prompt("Enter the operation you want to perform (+, -, *, /):");

//perform calculations
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

//Display the results
console.log("first number:", num1);
console.log("second number:", num2);
console.log("sum", sum);
console.log("difference", difference);
console.log("product=", product);
console.log("quotient=",quotient)
