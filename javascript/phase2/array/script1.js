// let arr = new Array(5);
// console.log(arr);

// let arr = [10, 20, 30, 40];
// arr[10] = 100;

// console.log(arr.length);
// console.log(arr);

// multi-dimensional array

// let arr = [10, 20.5, 'lol', [11, 22, 33]];

// console.log(arr[3][1]);

// let arr = [
//     [10, 20, 30, 40],
//     [11, 22, 33, 44],
//     [99, 88, 77, 66],
// ];

// console.log(arr[0][0]);
// console.log(arr[2][2] + arr[0][1] + arr.length);

// reverse

// let arr = [10, 20, 30, 40, 50, 60];
// arr.reverse();
// console.log(arr);

// sort

// let arr = [6, 3, 9, 2, 7, 1];
// arr.sort();
// console.log(arr);

// let arr1 = [45, 10, 89, 100, 5, 30, 9];

// arr1.sort((a, b) => a - b);
// console.log(arr1);

// guess the output
/*
let arr = [55, 88, 22, 99, 11];

arr.push(77);

arr.unshift(66);
arr.unshift(33);

arr.push(88);
arr.shift();

arr.reverse();
arr.sort((a, b) => a - b);

arr.reverse();

console.log(arr[1]);
*/

// let arr = [10, 20, 30, 40];

// for (let a = 0; a < arr.length; a++) {
//     console.log(arr[a]);
// }

// for (value of arr) {
//     console.log(value);
// }

let arr = [];

for (let a = 0; a < 100; a++) {
    if (a % 2 == 0) {
        arr.push(a);
    }
}

console.log(arr);
