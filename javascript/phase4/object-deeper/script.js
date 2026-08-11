// this keyword -> this keyword refers to the object that is currently executing or invoking the function. Its value is not static, it is determined at runtime based entirely on how a funciton is called, rather than where it is defined.

// console.log(this );
// console.log(window);

// function abc() {
//     console.log(this);
// }
// abc();

// let obj = {
//     firstName: 'Mahi',
//     lastName: 'Singh',
//     age: 19,
//     sayHi: () => {
//         console.log(this);
//     }
// };
// obj.sayHi(); // window object

// let obj1 = {
//     firstName: 'Sarthak',
//     lastName: 'Sharma',
//     age: 33,
//     getIntro: function () {
//         console.log(this);
//     }
// };
// obj1.getIntro(); // object

// let obj2 = {
//     firstName: 'Abhishek',
//     lastName: 'Rajput',
//     age: 23,
//     getIntro: function () {
//         // console.log(this);
//         // console.log(this.firstName+" "+this.lastName);
//         this.firstName='Harsh'
//     }
// };
// obj2.getIntro();
// console.log(obj2);

// let obj = {
//     firstName: 'Sarthak',
//     lastName: 'Sharma',
//     age: 33,
//     getIntro: () => {
//         console.log(this);
//     }
// };
// obj.getIntro();

// let obj = {
//     firstName: 'Sarthak',
//     lastName: 'Sharma',
//     age: 33,
//     getIntro: function () {
//         const sayMyName = () => {
//             console.log(this.firstName);
//         }
//         sayMyName();
//     }
// };
// obj.getIntro();


let obj = {
    name: 'Sarthak',
    age: 20,
    getCompany: function () {
        const companyName = {
            name: 'Sheryians',
            isGood: true,
            greet: () => {
                console.log(this.name);
            }
        }
        companyName.greet();
    }
};
obj.getCompany();

let student1 = {
    firstName: 'Mahi',
    lastName: 'Singh',
    getIntro: function () {
        console.log(this.firstName + " " + this.lastName);
    }
};

let student2 = {
    firstName: 'Sarthak',
    lastName: 'Sharma ',
};

student1.getIntro();