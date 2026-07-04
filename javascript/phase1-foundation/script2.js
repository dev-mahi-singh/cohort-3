// Conditional Statements

// if-else statement
// if (condition) {
//     //inside block if
// }
// else {
//     // inside block else
// }

// if (10 == 10) {
//     console.log("badhiyaaaa");
// } else {
//     console.log("not badhiya");

// }

// var a = 10;
// var b = 20;
// if (a > b) {
//     console.log('sahi hai');
// } else {
//     console.log('false condition');
// }

// var a = 10;
// var b = '10';
// if (a == b) {
//     console.log('I love JS');
// } else {
//     console.log('I hate JS');
// }

// var age = Number(prompt("Enter your age"));
// if (age >= 18) {
//     console.log("You can Vote");
// } else {
//     console.log("No Voting");
// }

// if-else ladder
var math = Number(prompt('Enter marks in Maths'));
var phy = Number(prompt('Enter marks in Physics'));
var chem = Number(prompt('Enter marks in Chemistry'));

var marks = (math + phy + chem) / 3
console.log("Final Marks: ", marks);

if (marks >= 85) {
    console.log('A++');
} else if (marks >= 70) {
    console.log('A+');
} else if (marks >= 60) {
    console.log('B+');
} else if (marks >= 50) {
    console.log('C+');
} else if (marks >= 33) {
    console.log('D');
} else {
    console.log('Fail');
}
