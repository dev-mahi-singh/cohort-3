// Destructuring

// Old way
// let arr = [10, 20, 30, 40];
// let a = arr[0];
// let b = arr[1];
// console.log(a);
// console.log(b);

// new way
// let arr = [10, 20, 30, 40];
// let [a, b] = arr;
// console.log(a);

// let arr = [10, 20, 30, 40];
// let [a, b, ...c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);

// let arr = [10, 20, 30, 40];
// let [a, , c] = arr;
// console.log(a);
// console.log(c);

// let arr = [10, 20, 30, 40];
// let [a, , , b] = arr;
// console.log(a);
// console.log(b);

const arr = [10, 20, 30, 40];
arr[0] = 99;
arr.pop();
arr.push(100);
console.log(arr);
