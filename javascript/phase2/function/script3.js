// extra parameters -- undefined

function abc(a, b) {
    console.log('hello guys', a, b);
}

abc(10);

// Rest Operator

function abcd(...arr) {
    console.log(arr);
}

abcd(10, 20, 30, 40, 50, 60);

// default parameters
function greet(user = 'Sir', age = 20) {
    console.log('Welcome', user, 'your age is', age);
}

greet();
greet('harsh', 29);
greet(undefined, 19);

function sayHi(u = 'Mam') {
    console.log('Hello', u);
}

sayHi('sherya');
sayHi();

// Callback function

function hero() {
    console.log('I am Hero Function');
}

function main(cb) {
    console.log('This is Main Function');
    cb();
}

// main(hero);

// var footpath = () => {
//     console.log('I am Footpath');
// }

// function mainRoad(cb) {
//     console.log('This is Main Road');
//     cb();
// }

// mainRoad(footpath);

// First Class Functions
function parent() {
    console.log('I am Parent...');

    function child() {
        console.log('I am Child...');
        return 40;
    }
    return child;
}

var a = parent();
console.log(a());

function dada() {
    console.log('I am dada');

    function papa() {
        console.log('I am papa');

        function child() {
            console.log('I am child');
        }
        return child;
    }
    return papa;
}

dada()()();

function footpath(w=10){
    console.log('I am Footpath',w,'feet');
}

function mainRoad(wid,cb){
    console.log('I am Main road',wid,'Feet');
    cb(wid/10);
    cb();
}

mainRoad(80,footpath);