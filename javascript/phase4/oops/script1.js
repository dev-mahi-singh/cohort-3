class MakeStudents {
    constructor(fname, lname, contact, isVerified) {
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
        this.isVerified = isVerified;
    }
}
let showProfile = function () {
    if (this.isVerified) {
        console.log(`Name: ${this.fname} ${this.lname}, Contact: ${this.contact}`);
    } else {
        console.log('User Not Verified');
    }
};

MakeStudents.prototype.showProfile = showProfile;

let s1 = new MakeStudents('Sarthak', 'Sharma', 98765, true);
let s2 = new MakeStudents('Abhishek', 'Mishra', 91745, true);
let s3 = new MakeStudents('Manas', 'Pancholi', 38927, false);

// s1.showProfile();
// s2.showProfile();
// s3.showProfile();

// Classical Inheritance
class User {
    constructor(fname, lname, contact) {
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
    }
    greet() {
        console.log('Welcome', this.fname);
    }
}

class Admin extends User {
    constructor(fname, lname, contact) {
        super(fname, lname, contact);
        this.accessAdminPanel = true;
    }
    addCourse() {
        console.log('New Course Added');
    }
    removeAllCourses() {
        console.log('All Courses Removed');
    }
}

let u1 = new User('Harsh', 'Singh', 989898);
let u2 = new Admin('Sarthak', 'Sharma', 478396);
console.log(u1);
console.log(u2);
u1.greet();
u2.greet();
u2.addCourse();