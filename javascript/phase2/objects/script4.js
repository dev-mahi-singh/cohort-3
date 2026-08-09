// destructuring in Array

// let arr = [11, 22, 33, 44];
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// console.log(a, b, c);

// let arr = [11, 22, 33, 44];
// let [a, b, c, d] = arr;
// console.log(a);
// console.log(d);

// let arr = [11, 22, 33, 44];
// let [a, b] = arr;
// console.log(a);

//  Rest operator -> used for destructuring

// let arr = ['aman', 'akash', 'prince', 'akshay', 'deep', 'raja'];
// let [a, b, ...c] = arr;
// console.log(c);


// Destructuring in Objects

// let obj = {
//     name: 'aman',
//     age: 20,
//     batch: 'Cohort 3'
// };
// let {a,b}=obj;
// console.log(a); // undefined

// let { name } = obj;
// let { age: myage } = obj;
// console.log(name);
// console.log(myage);


// let obj = {
//     name: 'harsh',
//     age: 20,
//     city: 'bhopal'
// };
// let { name, ...b } = obj
// console.log(b);

// Spread Operator

let arr = [10, 20, 30, 40];
let arr2 = [...arr];
arr2.push(20);
console.log(arr2);
console.log(arr);


let obj = {
    name: 'harsh',
    age: 20,
    marks: 35
};
let obj2 = { ...obj };
obj2.name = 'aditya';
console.log(obj2);
console.log(obj);
