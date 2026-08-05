function greet() {
    console.log("good day ladies and gentlemen")
}

greet();

function greetStudent(name) {
    console.log("good day " + name);
}

greetStudent("John");
greetStudent("Gilbert");


//FUNCTION WITH MULTIPLE PARAMETERS
function addnumber(num1, num2) {
    console.log("Sum =", num1 + num2);
}

addnumber(20, 10);

// RETURNING A VALUE FROM A FUNCTION

function multiply(a, z) {
    return a * z;
}

let answer = multiply(10, 10);
console.log(answer);

//GLOBAL SCOPE
let name = "Ezekiel";

function showName() {
    console.log(name);
}

showName();

//FUNCTION SCOPE
function student() {
    let age = 15;
    console.log(age);
}

student();

//THE VAR STATEMENT

if (true) {
    var name1 = "Ezekiel & Gilbert"

}

console.log(name1);
