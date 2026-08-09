// let username = prompt('Enter name');
// let age = (prompt('Enter age'));
// let city = prompt('Enter city');

// let obj = {
//     username,
//     age,
//     city
// };
// console.log(obj);

// let user = {
//     name: 'Virat Kohli',
//     age: 36,
//     team: 'India',
//     isMarried: true,
//     skills: ['Batting', 'Dancing', 'Fielding'],
//     spouse: {
//         name: 'Anushka Sharma',
//         proffession: 'Acting',
//         age: 30
//     }
// };

// console.log(user.skills[2]);
// console.log(user.spouse.name);

// let user1 = {
//     name:'Prince Singh',
//     age:20,
//     isHandsome:true,
//     skills:['HTML','CSS','JS'],
//     college:{
//         name:'IIT Bombay',
//         totalStudent:3000
//     }
// };

// console.log(user1.skills[3]); // undefined
// console.log(user1.skills[2]);
// console.log(user1.college.name);

// let user = {
//     name: 'Prince Singh',
//     age: 20,
//     isHandsome: true,
//     skills: ['HTML', 'CSS', 'JS'],
//     college: {
//         name: 'Sheryians Coding School',
//         totalStudents: 200,
//         courses: ['Web Development', 'Data Science', 'Campus placement']
//     }
// };
// console.log((user.college.totalStudents - user.age) + user.college.courses[2]);

// Methods

let obj = {
    user: 'raja',
    greet: function () {
        console.log('Good Morning...');
    }
};
obj.greet();


let obj1 = {
    name: 'Chitthi',
    ram: '20mb',
    age: 1,
    isworking: false,
    skills: ['fight', 'walk', 'dance'],
    creator: {
        name: 'vashi',
        age: 40,
        isIntelligent: true
    },
    sayHi: function () {
        console.log('Hello I am Chitthi Robot.');
    }
};

let maths = {
    add: (a, b) => {
        return a + b;
    },
    square: (a) => {
        return a * a;
    },
    cube: (a) => {
        return a * a * a;
    },
    mul: (a, b) => {
        return a * b;
    }
};
console.log(maths.square(5));

let user = {
    greet: () => {
        console.log('hello');
    }
};
// console.log(console.log());
console.log(user.greet());