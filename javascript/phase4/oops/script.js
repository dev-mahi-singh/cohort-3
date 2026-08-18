let place = {
    placeName: 'Office',
    behavior: 'proffesional',
    sayHello: function () {
        const insidePlace = {
            placeName: 'Meeting Room',
            behavior: 'Roasting',
            sayHi: function () {
                console.log(this);
            }
        }
        insidePlace.sayHi();
    }
};

// place.sayHello();


function CreateSongs() {
    this.songName = 'Cry for me';
    this.albumName = 'Hurry up tomorrow';
    this.singer = 'Weeknd';
    this.duration = 3.5;
    this.isLiked = true;
}
let songs1 = new CreateSongs();
// console.log(songs1);

// Constructor Function
function CreateBook(bookName, authorName, pages) {
    this.bookName = bookName;
    this.authorName = authorName;
    this.pages = pages;
    this.getFrontPage = function () {
        console.log('Book Name :', this.bookName);
        console.log('Author Name :', this.authorName);
        console.log('Pages :', this.pages);

    }
}
let book1 = new CreateBook('HP - Prisoner of Azkaba', 'JK Rowlingn', 760);
let book2 = new CreateBook('Rick Dad Poor Dad', 'Robert Kiyosaki', 440);

// console.log(book1);
// console.log(book2);
// book1.getFrontPage();


function MakeStudents(fname, lname, contact, isVerified) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
    this.isVerified = isVerified;
}

let showProfile = function () {
    if (this.isVerified) {
        console.log(`Name: ${this.fname} ${this.lname}, Contact: ${this.contact}`);
    } else {
        console.log('User Not Verified');
    }
}

MakeStudents.prototype.showProfile = showProfile;

let s1 = new MakeStudents('Abhishek', 'Mishra', 98765, true);
let s2 = new MakeStudents('Yash', 'Yadav', 91745, true);
let s3 = new MakeStudents('Manas', 'Pancholi', 38927, false);
let s4 = new MakeStudents('Anurag', 'Kulshreshtha', 64738, true);

// s1.showProfile();
// s2.showProfile();
// s3.showProfile();

let dada = {
    fname: 'GR',
    lname: 'Sharma',
    land: '100 acre'
};

let papa = {
    fname: 'Rakesh',
    lname: 'Sharma',
    land: 'Sharmaji Womens Collection'
};

let beta = {
    fname: 'Sarthak',
    lname: 'Sharma',
};

beta.__proto__ = papa;
papa.__proto__ = dada;

console.log(beta);
