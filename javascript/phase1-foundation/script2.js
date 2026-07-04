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
// var math = Number(prompt('Enter marks in Maths'));
// var phy = Number(prompt('Enter marks in Physics'));
// var chem = Number(prompt('Enter marks in Chemistry'));

// var marks = (math + phy + chem) / 3
// console.log("Final Marks: ", marks);

// if (marks >= 85) {
//     console.log('A++ ⭐');
// } else if (marks >= 70) {
//     console.log('A+');
// } else if (marks >= 60) {
//     console.log('B+');
// } else if (marks >= 50) {
//     console.log('C+');
// } else if (marks >= 33) {
//     console.log('D');
// } else {
//     console.log('Fail');
// }

// Nested if

// var gender = prompt('Enter gender (M/F)');
// var age = Number(prompt('Enter age'));
// if(gender=='F'){
//     if (age >= 18 && age <= 60) {
//     console.log('You will get 1500 rupees per Month');
// } else {
//     console.log('Bhagg yahan se');
// }
// }else{
//     console.log('Not Allowed');
// }

// Truthy and Falsy values
// Falsy values -> false, 0, "" (empty string), null, undefined, NaN

// if(0){
//     console.log('true');
// }else{
//     console.log('false');
// }

// Ternary Operator
// console.log(10 > 5 ? 'Hello' : 'Bye');
// var a = 10;
// var b = 20;
// a > b ? console.log('a is greater than b'):console.log('b is greater tha a');

// Switch Statement

var marks = 90;
switch (true) {
    case (marks > 80):
        console.log('A+');
        break;
    case (marks > 75):
        console.log('B+');
        break;
    case (marks > 60):
        console.log('C+');
        break;
    case (marks > 33):
        console.log('D+');
        break;
    default:
        console.log('Fail');
        break;
}
