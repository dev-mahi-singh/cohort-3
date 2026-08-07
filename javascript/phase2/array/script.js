// Creating Arrays

/*
let a = [10, 20, 30, 40, 50];
console.log(a);
console.log(a[3]);
console.log(a[5]); // undefined

let a1 = ['ritik', 'aman', 'raja', 'harsh'];
console.log(a1[1]);
a1[0] = 'ankush';
console.log(a1);

let a2 = [10, 20.5, 'sarthak', false, 'null'];
console.log(a2);

let arr = [10, 44, 66, 22, 33, 88, 30, 87, 67, 50, 23, 67, 88, 56];
console.log(arr.length);
console.log(arr[arr.length - 1]);
*/

// push and pop, unshift and shift

// push - last me element add
// pop - last me element remove
// unshift - starting me element add
// shift - starting me element remove

/*
let arr = [10,20,30,40];
arr.push(99);
arr.push(100);

console.log(arr);
  
arr.pop();
console.log(arr);

arr.unshift(1);
arr.unshift(2);

console.log(arr);

arr.shift();
console.log(arr);
*/

// Predict output
/*
let arr = [15, 45, 78, 90, 78];

arr.shift();
arr.shift();
arr.unshift(99);

arr.pop();
arr.pop();

arr.push(89);

arr.unshift(67);
arr.push(89);

arr.unshift(1);

console.log(arr[3]);
*/

// splice
// arr.splice(startindex,deletecount)
// arr.splice(startindex,deletecount,newItems)

let arr = [11, 22, 33, 44, 55];

// arr.splice(1, 2);
arr.splice(1, 0, 99);
console.log(arr);

let arr1 = ['aman', 'bijoy', 'chandu', 'dev', 'ekansh', 'farukh'];

arr.splice(3, 2, 'nandu', 'swaraj');
console.log(arr1[arr1.length - 1]);
console.log(arr.length);

