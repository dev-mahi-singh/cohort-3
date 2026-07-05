// Loops

// while loop

// var a = 1;
// console.log("Before loop");
// while (a < 5) {
//     console.log(a);
//     a++;
// }
// console.log('After loop');

// Print number 1 to 10
/*
var a = 1;
while (a <= 10) {
    console.log(a);
    a++;
}
*/

// Print number 10 to 1
/*
var a = 10;
while (a > 0) {
    console.log(a);
    a--;
}
*/

// var num = Number(prompt("Enter a number"));
// var a = 0;
// while (a <= num) {
//     console.log(a);
//     a++;
// }

// Print Even Numbers
/*
var num = Number(prompt("Enter a number"));
var a = 1;
while (a <= num) {
    if (a % 2 == 0) {
        console.log(a);
    }
    a++;
}
*/

// Print Odd Numbers
/*
var num = Number(prompt("Enter a number"));
var a = 1;
while (a <= num) {
    if (a % 2 != 0) {
        console.log(a);
    }
    a++;
}
*/

// ask a user any number and print its table
/*
var num = Number(prompt("Enter a number"));
var a = 1;
while (a <= 10) {
    console.log(num + ' X ' + a + ' = ' + num * a);
    a++;
}
*/

// do while loop
/*
do {
    var pass = prompt('Enter password');
} while (pass != '123')

console.log('Welcome!');
*/

// for loop

for (var a = 1; a <= 10; a++) {
    console.log(a);
}

for (var a = 10; a > 0; a--) {
    console.log(a);
}