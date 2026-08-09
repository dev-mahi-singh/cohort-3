// let greet = () => {
//     console.log("Hello");
// };
// let bye = () => {
//     console.log('bye bye');
// };

// let obj = {
//     name: 'Sarthak',
//     age: 10 > 5 ? greet : bye
// };
// console.log(obj);


// let user = {
//     name: 'Harsh',
//     city: 'Bhopal'
// };
// user['name'] = 'Aditya';
// console.log(user);

// let obj = {
//     name: 'abhas',
//     age: 20
// };
// obj['city'] = 'delhi';
// console.log(obj);

const groom = {
    name: 'Selmon',
    age: 60
};
const bride = {
    name: 'Kat',
    age: 42
};
groom.name = 'Vicky';
console.log(groom.name, 'weds', bride.name);

// Object.seal()

// const user = {
//     name: 'aditya',
//     age: 29,
//     city: 'mumbai'
// };
// Object.seal(user);
// user.name = 'Aman';
// user.isSingle = true; // not add new properties
// console.log(user);

// Object.freeze()

const user = {
    name: 'aditya',
    age: 29,
    city: 'mumbai'
};
Object.freeze(user);
user.name = 'aman'; // no updation
console.log(user);


// Array

// const arr = [10, 20, 30];
// Object.seal(arr);
// arr[2] = 99;
// console.log(arr);

const arr = [10, 20, 30];
Object.freeze(arr);
arr[2] = 99;
console.log(arr);