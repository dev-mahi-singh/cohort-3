// types of functions

// function declaration
function a1(a) {
    console.log('Hello guys 1', a);
}

// function expression
var b1 = function (a) {
    console.log('Hello guys 2', a);
}

// Arrow function
var c1 = (a) => {
    console.log('Hello guys 3', a);
}

var c2 = (a, b) => console.log('Hello guys', a, b);

var c3 = a => console.log('Hello guys', a);

// a1('harsh');
// b1('aman');
// c1('sufia');
// c2('jahnvi', 20);
// c3('harshita');

function aaa(a) {
    console.log('heyyy', a);
}

var bbb = function () {
    console.log('helloooo');
}

var ccc = () => {
    console.log(hellollo);
}

var ddd = (c, b, a) => console.log('heyyylo', a);

// ddd(10, 20, 30);

var eee = a => console.log('helolo');

// IIFE -  Immediately Invoked Function Expression

(function () {
    console.log('This is IIFE');
})();

(() => console.log('hello'))();