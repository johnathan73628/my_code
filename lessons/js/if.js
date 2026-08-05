let age = 20;
if (age >= 20) {
    console.log("You are eligible to vote");
}

let score1 = 45;
if (score1 >= 50) {
    console.log("You passed the exam");
} else {
    console.log("Fail");
}

let score = 85;
if (score >= 70) {
    console.log("A");
} else if (score >= 60) {
    console.log("B");
} else if (score >= 50) {
    console.log("C");
} else {
    console.log("F");
}


//switch statement

const day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Unknown day");

}

// for loop

for (let i=0; i<5; i++){
    console.log(i);
}

let i = 0;
while(i<5){
    console.log(i);
    i++;
}

// DO WHILE LOOP.
let a = 1;
do{
    console.log(a);
    a++;
} while(a<5);