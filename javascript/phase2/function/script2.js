// return
function aaa() {
    console.log('Hello');
    return 10;
}

// console.log(aaa());

function abc() {
    return 'hihihi';
}

// let a = abc();
// console.log(a);

function add(a, b) {
    return a + b;
}

console.log(add(29, 89));
console.log(add(98, 1));

function hero() {
    let a = 10;
    let b = 20;
    let c = a + b;
    return c;
}

console.log(hero());

function permission(gen) {
    if (gen == 'F') {
        return "Welcome to Women's Party";
    } else {
        return "Welcome to Men's Party";
    }
}

console.log(permission('F'));

function a() {
    return 10;
}

var b = function () {
    return 20;
}

var c = () => {
    return 30;
}

var d = () => {
    return 'hello';
}

// Implicit return
var sq = (a) => a * a;
console.log(sq(20));


// console.log(a());
// console.log(b());
// console.log(c());
// console.log(d());

// Pure function

function sqrt(a) {
    return a * a;
}

console.log(sqrt(5));
console.log(sqrt(11));

// Impure function

let num = 10;
function abcd(a) {
    num++;
    return a * num;
}

console.log(abcd(10));
console.log(abcd(10));