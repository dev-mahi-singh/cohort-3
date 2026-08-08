// 1. Create a string and print its length

let str = "Hello World!";
console.log(str.length);

// 2. Convert a string into uppercase
console.log(str.toUpperCase());

// 3. Convert a string into lowercase.
console.log(str.toLowerCase());

// 4. Check if a string includes the word "JavaScript".
let str1 = "Hello JavaScript!";
console.log(str1.includes("JavaScript"));

// 5. Extract the word "World" from "Hello World"
let str2 = "Hello World";
console.log(str2.slice(5, 11));

// 6. Replace "apple" with "mango" in a sentence.
let str3 = "Apple is a fruit";
console.log(str3.replace('Apple', 'Mango'));

// 7. Split "HTML,CSS,JS" into an array.
let arr = ['HTML', 'CSS', 'JS', 'React'];
console.log(arr.splice(0, 3));

// 8. Remove extra spaces from a string.
let str4 = '   Hello World ';
console.log(str4.trim());

// 9. Repeat the word "Hi" 5 times.
let str5 = 'Hi';
console.log(str5.repeat(5));

// 10. Print the first character of a string.
let str6 = 'Hello JS';
console.log(str6[0]);

// 11. Use template literals to print:"My name is Aman and I am 20 years old"
let str7 = `My name is Aman and I am 20 years old`;
console.log(str7);