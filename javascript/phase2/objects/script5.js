// Swallow Copy

// let obj = {
//     name: 'harsh',
//     age: 20,
//     marks: 35
// };
// let obj2 = { ...obj };
// obj2.name = 'aditya';
// console.log(obj2);
// console.log(obj);

// let obj = {
//     name: 'harsh',
//     age: 20,
//     marks: 65,
//     college: {
//         name: 'LNCT',
//         student: 20000
//     }
// };
// let obj2 = { ...obj };
// obj2.name = 'Sahil';
// obj2.college.name = 'IIT';
// console.log(obj2);
// console.log(obj);

// let obj = {
//     name: 'harsh',
//     age: 20,
//     marks: 65,
//     college: {
//         name: 'LNCT',
//         student: 20000
//     },
//     skills: ['HTML', 'CSS', 'JS']
// };
// let obj2 = { ...obj };
// obj2.skills.push('React');
// console.log(obj2);
// console.log(obj);

// Deep Copy -> JSON.stringify()

let obj = {
    name: 'harsh',
    age: 20,
    marks: 65,
    college: {
        name: 'LNCT',
        student: 20000
    },
    skills: ['HTML', 'CSS', 'JS']
};

let str = JSON.stringify(obj);
let obj2 = JSON.parse(str);

obj2.college.name = 'IIT';

console.log(obj2);
console.log(obj);

let arr = [10, { name: 'harsh', age: 29 }, 30];
let str1 = JSON.stringify(arr);
let arr2 = JSON.parse(str1);
arr2[1].name = 'Aman';

console.log(arr2);
console.log(arr);