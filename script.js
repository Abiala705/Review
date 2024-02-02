/*
let js = 'amazing';

console.log(40 + 8 + 23 - 10);

console.log('Jonas');

let firstName = 'Matilda';
console.log(firstName)
firstName = 'Israel';

console.log(firstName);

let jonas_matilda = 'JM';

let Person = 'Jonas';

let job1 = 'programmer';
let job2 = 'teacher';




console.log(true);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);

// Dynamic typing

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);

console.log(typeof null);



let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';

console.log(job);

lastName = 'Schedtmann';
console.log(lastName);



// math operators
const now = 2037;

const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schedtmann';

console.log(firstName + ' ' + lastName);


// Assignment operators
let x = 10 + 5;

x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);


// Comparison operators
console.log(ageJonas <= ageSarah);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2019);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)

const averageAge = (ageJonas + ageSarah) / 2


// Coding challenge 1

// // Data 1
// const heightMark = 1.69;
// const heightJohn = 1.95;

// const massMark = 78;
// const massJohn = 92;

// Data 2
// const heightMark = 1.88;
// const heightJohn = 1.76;

// const massMark = 95;
// const massJohn = 85;

// const bmiMark = massMark / (heightMark ** 2);
// const bmiJohn = massJohn / (heightJohn ** 2);

// const markHigherBMI = bmiMark > bmiJohn;

// console.log(bmiMark, bmiJohn);
// console.log(markHigherBMI);

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(jonas)


const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string`)

console.log(`String with
multiple
lines`);

*/


const age = 15;


if (age >= 18) {
    console.log(`Sarah can start driving👍🚗`)
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`)
}

const birthYear = 1998;

if (birthYear <= 2000) {
    let century = 20;

} else {
    let century = 21;
}