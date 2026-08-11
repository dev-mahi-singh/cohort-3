// call() apply() bind() -> Explicit Binding

// let student1 = {
//     firstName: 'Sarthak',
//     lastName: 'Sharma',
//     getIntro: function () {
//         console.log("I am " + this.firstName + " " + this.lastName);
//     }
// };
// let student2 = {
//     firstName: 'Ritik',
//     lastName: 'Rajput'
// };
// let student3 = {
//     firstName: 'Mahi',
//     lastName: 'Singh'
// };
// student1.getIntro.call(student2);
// student1.getIntro.call(student3);

// let student1 = {
//     firstName: 'Sarthak',
//     lastName: 'Sharma'
// };
// let student2 = {
//     firstName: 'Ritik',
//     lastName: 'Rajput'
// };
// let student3 = {
//     firstName: 'Mahi',
//     lastName: 'Singh'
// };
// let getIntro = function () {
//     console.log("I am " + this.firstName + " " + this.lastName);
// };
// getIntro.call(student1);
// getIntro.call(student2);

// let student1 = {
//     firstName: 'Sarthak',
//     lastName: 'Sharma',
//     maths: 60,
//     computer: 99,
//     english: 72
// };
// let student2 = {
//     firstName: 'Ritik',
//     lastName: 'Rajput',
//     maths: 87,
//     computer: 43,
//     english: 56
// };
// let student3 = {
//     firstName: 'Mahi',
//     lastName: 'Singh',
//     maths: 69,
//     computer: 55,
//     english: 77
// };

// let getResult = function () {
//     console.log(`${this.firstName} ${this.lastName}, you got ${(this.maths + this.computer + this.english) / 3}% marks`);
// };
// getResult.call(student1);
// getResult.call(student2);
// getResult.call(student3);

// let student1 = {
//     firstName: 'Sarthak',
//     lastName: 'Sharma',
//     getIntro: function (city, state) {
//         console.log(`${this.firstName} ${this.lastName}, ${city} (${state})`);
//     }
// };
// let student2 = {
//     firstName: 'Ritik',
//     lastName: 'Rajput'
// };
// let student3 = {
//     firstName: 'Aman',
//     lastName: 'Gupta'
// };
// student1.getIntro('Bhopal', 'MP');
// student1.getIntro.call(student2, 'Patna', 'Bihar');
// student1.getIntro.call(student3, 'Jhansi', 'UP');

// apply()

let student1 = {
    firstName: 'Sarthak',
    lastName: 'Sharma',
    getIntro: function (city, state) {
        console.log(`${this.firstName} ${this.lastName}, ${city} (${state})`);
    }
};
let student2 = {
    firstName: 'Ritik',
    lastName: 'Rajput'
};
let student3 = {
    firstName: 'Aman',
    lastName: 'Gupta'
};
student1.getIntro('Bhopal', 'MP');
student1.getIntro.apply(student2, ['Patna', 'Bihar']);
student1.getIntro.apply(student3, ['Jhansi', 'UP']);

// bind()
let student4 = {
    firstName: 'Sanskriti',
    lastName: 'LalWani'
};
let out = student1.getIntro.bind(student4, 'Bhopal', 'MP');
out();
