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




// Type conversion
const inputYear = '1991';
console.log(inputYear, Number(inputYear));

console.log(Number(inputYear) + 18);

console.log(Number('jonas'));

console.log(typeof (NaN));

console.log(String(23));


// Type coercion

console.log('I am ' + 23 + ' years old.');

console.log('23' - '10' - 3);

console.log('23' * '2');

let n = '1' + 1;
n = n - 1;
console.log(n);


// Five falsy values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 100;


// Javascript tries to coerce the valuw into Boolean
if (money) {
    console.log("Don't spend it all;")
} else {
    console.log('You should get a job!')
}

let height = 0;

if (height) {
    console.log("YAY... Height is defined")
} else {
    console.log('Height is UNDEFINED')
}



// Equality variables

const age = 18;

if (age == '18') console.log('You just became an adult.');
//  Avoid loose equality operator.

const favourite = Number(prompt('What is your favourite number?'));
console.log(favourite);
console.log(typeof (favourite));

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number.')
} else if (favourite === 7) {
    console.log('7 is also a cool number.')
} else (
    console.log('Number is not 23 or 7.')
)

if (favourite !== 23) {
    console.log('Why not 23?')
}




const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive.')
// } else {
//     console.log('Someone else should drive...')
// }


const isTired = false;
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive.')
} else {
    console.log('Someone else should drive...')
}



// Coding challenge 3

// Data 1
// const dolphinsScores = 95 + 108 + 89;
// const koalasScores = 88 + 91 + 110;

// Data 2
// const dolphinsScores = 97 + 112 + 101;
// const koalasScores = 109 + 95 + 123;

// Data 3
const dolphinsScores = 97 + 92 + 101;
const koalasScores = 109 + 81 + 106;

const dolphinsAverage = dolphinsScores / 3;
const koalasAverage = koalasScores / 3;

const dolphinsGreater = dolphinsAverage >= 100;
const koalasGreater = koalasAverage >= 100;
console.log(dolphinsAverage, koalasAverage);

if ((dolphinsAverage > koalasAverage) && dolphinsGreater) {
    console.log('Dolphins are the winner of the competition.')
} else if ((dolphinsAverage < koalasAverage) && koalasGreater) {
    console.log('Koalas are the winner of the competition.')
} else if ((dolphinsAverage === koalasAverage) && koalasGreater && dolphinsGreater) {
    console.log('The game ends in a draw!')
} else {
    console.log('No one wins the trophy.')
}


// Switch statement


const day = 'sunday';

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure.');
//         console.log('Go to coding meetup.');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples.');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend.');
//         break;
//     default:
//         console.log('Not a valid day!');
//         break;
// }

// Without the break, the code continues executing.

if (day === 'monday') {
    console.log('Plan course structure.');
    console.log('Go to coding meetup.');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples.');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend.');
} else {
    console.log('Not a valid day!');
}

if (23 > 10) {
    const str = '23 is bigger';
}

console.log(`I'm ${2037 - 1991} years old.`)
*/


const age = 23;

age >= 18 ? console.log('I like to drink wine🍷') : console.log('I like to drink water.💧');

// Ternary operator just like any other operator produces a value which can be stored in a variable. It is divided into three parts which is the condition and the results based on the boolean values; true or false.

// It is an expression that produces a value.

const drink = age >= 18 ? 'wine🍷' : 'water💧';

console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine🍷';
} else {
    drink2 = 'water💧'
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine🍷' : 'water💧'}`)

