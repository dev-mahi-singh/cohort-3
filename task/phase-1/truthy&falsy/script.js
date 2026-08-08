// 1. Check whether an empty string is truthy or falsy.
let a = "";
if (a) {
    console.log("truthy");
} else {
    console.log("falsy");
}

// 2. Check whether `0` is truthy or falsy.
let b = 0;
if (b) {
    console.log("truthy");
} else {
    console.log("falsy");
}

// 3. Check whether `[]` is truthy or falsy.
let c = [];
if (c) {
    console.log("truthy");
} else {
    console.log("falsy");
}
// 4. Create a variable and print `"Valid"` if it has a value otherwise print `"Invalid"`.

let val = "Hello";
if(val){
    console.log('Valid'); 
} else{
    console.log('Invalid');
}