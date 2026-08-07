// forEach - iteration
// map - transform
// filter - filter
// reduce - reduce

// forEach

// let arr = [10, 20, 30, 40, 50];

// arr.forEach(function (elem) {
//     console.log(elem);
// });

// let arr1 = ['ajay', 'bittu', 'chhotu', 'dabbu'];

// arr1.forEach(function (elem, idx) {
//     console.log(elem, idx);
// });

// let arr = [10, 20, 30, 40];
// let sum = 0;
// arr.forEach(function (elem) {
//     sum += elem;
// });
// console.log(sum);

// map()

// let arr = [10, 20, 30, 40];

// let arr2 = arr.map(function (elem) {
//     return elem * 2;
// });
// console.log(arr2);

// function double(x) {
//     return x * 2;
// }

// function triple(x) {
//     return x * 3;
// }

// let arr2 = arr.map(double);
// let arr3 = arr.map(triple);
// console.log(arr2);
// console.log(arr3);

// let users = ['Sarthak', 'Rohit', 'Anushka', 'Abhishek'];

// let newUsers = users.map(function (elem) {
//     return elem + ' Sharma';
// });

// let newUsers = users.map(function (elem) {
//     return elem.substring(1,4);
// });

// console.log(newUsers);

// let arr = [11, 22, 33, 44, 55];
// let arr2 = arr.map(function (elem) {
//     if (elem % 2 == 0) {
//         return elem;
//     }
//     else {
//         return elem + 1;
//     }
// });
// console.log(arr2);


// filter()

// let arr = [5, -9, 2, -4, 33, 8];
// let arr2 = arr.filter(function (elem) {
//     return elem > 0;
// });
// console.log(arr2);

// let marks = [56, 22, 90, 51, 88, 93, 15];
// let finalMarks = marks.filter((elem) => {
//     return elem > 33;
// });
// console.log(finalMarks);

/*
let arr = ['aman', 'basundi', 'chintu', 'dev'];

// iteration - foreEach()

arr.forEach(function (elem) {
    console.log(elem);
});

// transformation - map()

let out1 = arr.map(function (elem) {
    return elem.toUpperCase();
});

console.log(out1);

// filteration - filter
let out2 = arr.filter(function (elem) {
    return elem.includes('i');
});

console.log(out2);
*/

let arr = ['aman', 'ajay', 'anju', 'rohit', 'kiran', 'akash'];
let arr2 = arr.filter(function (elem) {
    return elem.startsWith('a');
});
console.log(arr2);

let filterArray = [5, 9, 2, 4, 33, 8];
let newFilterArray = filterArray.filter(function (array_value) {
    console.log(array_value);
    return array_value > 8;
});
console.log(newFilterArray);