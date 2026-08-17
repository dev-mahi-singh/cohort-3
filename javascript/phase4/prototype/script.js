//  Prototypal inheritance

// let company = {
//     name: 'Sheryians',
//     foundingYear: 2022,
//     students: 'Very Good',
//     saySlogan: function () {
//         console.log('We teach, what matters');
//     }
// };
// let user = {
//     name: 'Sarthak',
//     age: 33
// };

// user.__proto__ = company;

// console.log(user.foundingYear);
// user.saySlogan();


// Prototype Chaining
let college = {
    title: 'College',
    name: 'IIT Bombay',
    rating: 'A+',
    students: 5000,
    saySlogan: function () {
        console.log('We are BEST, We are IIT');
    },
    hasClubs: true
};
let branch = {
    title: 'Branch',
    name: 'CSE',
    rating: 'A++',
    students: 500,
    subject: ['TOC', 'SD', 'CD']
};
let user = {
    name: 'Raja',
    age: 30,
    marks: 98
};

user.__proto__ = branch;
branch.__proto__ = college;

// console.log(user);
// console.log(user.name);
// console.log(user.hasClubs);

// console.log(Object.prototype);
// console.log(Array.prototype);
// console.log(Function.prototype);

function Student(username, password) {
    this.username = username;
    this.password = password;
    this.spouse = {
        name: 'Harshi',
        age: 23
    };
}

// console.log(Student.prototype);

const animal = {
    eats: true,
    walk: function () {
        console.log('Animal chal raha hai');
    }
};

const dog = Object.create(animal); // dog ka prototype = animal
dog.barks = true;

console.log(dog.barks);
console.log(dog.eats);
dog.walk();