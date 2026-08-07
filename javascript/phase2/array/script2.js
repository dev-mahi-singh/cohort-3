// non-mutating methods

// slice

// let arr = [10,20,30,40];
// let arr2 = arr.slice(0,2);
// console.log(arr);
// console.log(arr2);

// concat

// let arr = [10, 20, 30, 40];
// let arr2 = [11, 22, 33, 44];

// let brr = arr.concat(arr2);
// console.log(brr);

// includes

// let arr = [10, 20, 30, 40];
// let a = arr.includes(30);
// console.log(a);

// indexOf  (-1 if value not found)

// let arr = [10, 20, 30, 40];
// let a = arr.indexOf(20);
// console.log(a);

// join

// let arr1 = ['aman', 'bijoy', 'chandu'];
// let str = arr1.join(' ');
// console.log(str);


// guess the output

// let str = 'Sheryians Coding School';
// let arr = str.split(' ');
// let brr = arr[1].split('');
// brr.reverse();
// let str3 = brr.join('');
// let str2 = arr.join('');
// console.log(str2);
// console.log(str3);

// copy array
// let arr = [10, 20, 30];
// let arr2 = arr; // not recommended
// arr2[0] = 1;
// console.log(arr2);
// console.log(arr);

// let arr = [10, 20, 30, 40];
// let arr2 = [arr[0], arr[1], arr[2], arr[3]];
// console.log(arr);
// console.log(arr2);

// spread operator

let arr = [10, 20, 30, 40];
let arr2 = [...arr];
arr2.push(99);
console.log(arr);
console.log(arr2);