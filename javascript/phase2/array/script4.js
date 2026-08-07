// reduce()

// let arr = [1600, 4000, 500, 800];
// let sum=arr.reduce(function(acc,val){
//     return acc+val;
// });
// console.log(sum);

// let max = arr.reduce(function (acc, val) {
//     if (val > acc) {
//         return val;
//     }
//     return acc;
// }, 0);
// console.log(max);

// let arr = ['apple', 'banana', 'apple', 'mango', 'banana', 'apple'];
// let abc = arr.reduce((acc, val) => {
//     acc[val] = (acc[val] || 0) + 1;
//     return acc;
// }, {});
// console.log(abc);

// let arr = [10, 20, 30, 40];
// let ans = arr.reduce(function (acc, val) {
//     return acc + val;
// }, 0);

// console.log(ans);

// let arr = [10, 20, 30, 40];
// let ans = arr.reduce(function (acc, val) {
//     return acc * val;
// }, 1);

// console.log(ans);

// let arr = [32, 98, 67, 350, 20, 12];
// let ans = arr.reduce(function (acc, val) {
//     if (val > acc) {
//         return val;
//     }
//     return acc;
// }, 0);
// console.log(ans);

// find()

// let arr = ['raja', 'deepak', 'aman', 'virat'];
// let ans = arr.find(e => e == 'virat');
// console.log(ans);

// let arr = [11, 20, 33, 50, 44, 88];
// let ans = arr.find(a => a % 10 == 0);
// let ans2 = arr.findIndex(a => a % 10 == 0);
// console.log(ans);
// console.log(ans2);

// let arr = ['bijoy', 'chandu', 'aman', 'deep'];
// let ans = arr.find(a => a.includes('a'));
// console.log(ans);

// some()

// let arr = ['bijoy', 'chandu', 'aman', 'deep'];
// let ans = arr.some(a => a.includes('a'));
// console.log(ans);

// every()

let arr = ['bijoy', 'chandu', 'aman', 'deep'];
let ans = arr.every(a => a.includes('a'));
console.log(ans);