// 1. Check whether a number is positive or negative.
let num = 20;
if (num < 0) {
    console.log(`${num} is a positive number`);
}
else {
    console.log(`${num} is a negative number`);
}

// 2. Check whether a number is even or odd.
let n = 23;
if (n % 2 === 0) {
    console.log(`${n} is even`);
}
else {
    console.log(`${n} is odd`);
}

// 3.Check whether a person is eligible to vote.
let age = 22;
if (age <= 18) {
    console.log("You can vote");
}
else {
    console.log("You cannot vote");
}

// 4. Find the largest among two numbers.
let n1 = 54;
let n2 = 32;
if (n1 > n2) {
    console.log(`${n1} is greater than ${n2}`);
}
else if (n2 > n1) {
    console.log(`${n2} is greater than ${n1}`);
} else {
    console.log("Both numbers are equal");
}

// 5. Find the largest among three numbers.
let num1 = 30;
let num2 = 12;
let num3 = 23;
if (num1 >= num2 && num1 >= num3) {
    console.log(`${num1} is largest number`);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`${num2} is largest number`);
} else {
    console.log(`${num3} is largest number`);
}

// 6. Check whether a year is a leap year.
let year = 2024;
if (year % 400 === 0 || (year % 4 == 0 && year % 100 != 0)) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}

// 7. Check whether a number is divisible by both 3 and 5.
let a = 30;
if (a % 3 === 0 && a % 5 === 0) {
    console.log(`${a} is divisible by both 3 and 5`);
} else if (a % 3 === 0) {
    console.log(`${a} is divisible by only 3`);
} else if (a % 5 === 0) {
    console.log(`${a} is divisible by only 5`);
} else {
    console.log(`${a} is not divisible by 3 or 5`);
}

// 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail

let marks = 85;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log('Fail');
}

// 1. Check whether a character is a vowel or consonant.
let char = 'i';
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log(`${char} is vowel`);
} else {
    console.log(`${char} is consonant`);

}

// 2. Create a calculator using switch statement
let numA = 20;
let numB = 5;
let operator = "*";

switch (operator) {
    case "+": console.log(numA + numB);
        break;
    case "-": console.log(numA - numB);
        break;
    case "*": console.log(numA * numB);
        break;
    case "/": console.log(numA / numB);
        break;
    default: console.log("Invalid operator");
}


// 3. Print the day name based on a number (1–7)
let day = 5;
switch (day) {
    case 1: console.log("Sunday");
        break;
    case 2: console.log("Monday");
        break;
    case 3: console.log("Tuesday");
        break;
    case 4: console.log("Wednesday");
        break;
    case 5: console.log("Thursday");
        break;
    case 6: console.log("Friday");
        break;
    case 7: console.log("Saturday");
        break;
    default: console.log("Not valid");
}

// 4. Check whether a username is "admin" and password is "1234"
let username = "admin";
let password = "1234";
if (username === 'admin' && password === "1234") {
    console.log("You are loggedIn");
} else {
    console.log("Invalid username or password");

}