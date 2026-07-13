// Functions in JS
// - accessible
// - reusable
// - systematic
// - block of code

function abc() {
    console.log('hello');
}

abc();

function greet(num) {
    console.log('Good Evening...', num);
}

greet(100);
greet(89);
greet();
greet("mahii");


function add(a, b) {
    console.log(a + b);
}

add(); //NaN
add(10, 20);

function mul(a, b) {
    console.log(a * b);
}

add(80, 5);
add(20, 3);

function greets(user, age) {
    console.log('Good Morning...', user);
    if (age >= 18) {
        console.log('You are welcome in party');
    }
    else {
        console.log('Not Allowed');
    }
}

greets('Deepak',34);
greets('Latikesh',17);