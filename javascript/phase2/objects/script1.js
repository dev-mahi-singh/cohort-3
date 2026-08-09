// CRUD

let user = {
    name: 'Kishan',
    age: 20,
    marks: 78,
    isSingle: true,
    batch: 'Cohort 3.0'
};

user.city = 'Las Vegas';
user.isSingle = false;

delete user.marks;

console.log(user);
console.log(Object.keys(user));

let phone = {
    model: 'Samsung S26',
    color: 'red',
    price: 70000
};
console.log(Object.keys(phone));
console.log(Object.values(phone));
console.log(Object.entries(phone));


let obj = {
    name: 'Sarthak',
    age: 20,
};

obj.age = 33; // update
obj.city = 'Mumbai'; // create
delete obj.age; // delete

console.log(obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));