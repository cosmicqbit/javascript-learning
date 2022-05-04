// Type conversion & Type coercion

let myVar = 12;
console.log(myVar);

// To String using function
// ----------

console.log(String(myVar)); // Number to String
console.log(String(true)); // Boolean to String
console.log(String(new Date())); // Date to String

let arr = [1,3,4,5];
console.log(String(arr)); // Array to String  | enables applying string methods to array

// Using toString Method
let i = 9;
console.log(i.toString) // Will return 9 as a string 


// To Number

let stri = Number("2323"); // String to Number
stri = Number(true); // Will return 1 
stri = Number(false); // Will return 0
stri = arr = [3,5,6,7,8]; // Will return NaN
console.log(stri, (typeof stri)); 

// Parse Int --> Returns Integer value from String or a float

let number = parseInt('23.4');
console.log(number); // Will return 23

// Prase float --> Returns float value from String or Integer

let filoat = parseFloat('23');
console.log(filoat); // Will return 23.0

// toFixed Method --> Returns value upto 10 decimal points

console.log(number.toFixed(10)); // Will return 10.0000000000


// Type Coercion

let mystr = '234'; // String
let mynum = 23; // Number

let sum = mystr + mynum;
console.log(sum); // Will return 23423 --> Concatenates as a string

const name = 'cosmicqbit';
const greeting = 'Salaams!';

console.log(greeting + '' + name);

// String methods

let html;
html = "<h1>This is the wrong way</h1>" +  "<p>You shoudl avoid using this.</p>";

// Concat method
html = html.concat('New text', 'new 2.0'); // Will append to the html variable
console.log(html);

// length property
console.log(html.length);
console.log(html.toLowerCase);
console.log(html.toUpperCase);


// Indexing
console.log(html['2']); 

// Index of
console.log(html.index['<']);
console.log(html.lastIndexOf('s')); // Locates last occurance 
console.log(html.charAt(2));
console.log(html.endsWith('textend')); // Returns boolean
console.log(html.includes('p')); // Also returns boolean
console.log(html.substring(0,3)); // Excluding last index char
console.log(html.slice(4, 8)); // Also works with -ve values
console.log(html.split(' ')); // Separates the content at space breakpoints and returns an array
console.log(html.replace('this', 'if')); // Replaces first occurance of this with if


// Template literals using backticks

let name01 = 'Red';
let name02 = 'Blue';
let name03 = 'Pink';

let newHTML = `This is a ${name01} color <p>This is a ${name02} color</p>`;


// Arrays 

const marks = [34, 56, 64, 76, 56, 34];
const fruits = ['Orange', 'Apple', 'Pine'];
const mixed = ['str', 23, [23, 42]];

const testArr = new(13, 'size', true);


// Traversing Arrays

console.log(fruits[1]); // Wil return Apple

// isArray Method
console.log(Array.isArray('mixed')); // Returns boolean

// Updating array

testArr[2] = 'New_value';
console.log(testArr) // changes valuye of true to New_value

// Index of method

let value = marks.IndexOf(34);
console.log(value); // Will return the position of number

// Modifying arrays

marks.push(232); // Adds element to end
marks.pop(34); // Removes element from end
marks.unshift(100); // Adds element to start
marks.shift(34); // Removes elements from start
marks.splice(2, 4); // Removes elements from index 2 and removes 4 elements
marks.reverse(); // reverses the original array

// Concat arrays
let marks2 = [23, 434, 44, 23];

marks = marks.concat(marks2) // Concats marks2 to marks1 

// Objects 

let myobj = {
    name: 'cosmicqbit',
    enroll: 23,
    address: 'Njalla',
    marks: [23, 44, 46],
    passed: true,
    'phone number': 2323232323
}

console.log(myobj.passed) // Will return true
console.log(myobj['phone number']); // Will return number
console.log(myobj.enroll); // Dot notation


// If Else conditionals & Swtiches

const age = 20;

if (age == 20) {
    console.log('You are qualified');
}

else if (age > 20) {
    console.log('You are too old');
}

else {
    console.log('Not for you kiddo');
}



const vari = 23;

if (typeof vari !== 'undefined')
    console.log('Do this');
else 
    console.log('Do this');

// Logical Operators 

// && : AND
// || : OR 

// Comparison operators 
// == only compares value so '20' == 20 will be true 
// === Compares both value & data type, so '20' === 20 will return false
// <= : less than or equal to
// >= : greater than or equal to 

// Terinatry Operator

console.log(isSkilled? 'Hire the guy': 'Not eligible');


// Switch Statement

switch (age) {
    case 19:
        console.log('You are 19');
        break; // breaks out of the loop
    case 23:
        console.log('You are 23');
        break;
    case 22:
        console.log('You are 22');
        break;
    default:
        console.log('Invalid')
        break;
}

// For, while & do While loop


// For loop
for(let i = 20; i < 100; i++)
{
    console.log('Number: ' + i);
}

// while loop
let j = 20;
while (j < 1000){
    console.log(j); // Will print numbers upto 999 starting form 20
    j += 1;
}

// do while --> Executes at least once

let k = 20;
do {
    console.log(k);
    k++;
}while(k < 100);

// break --> breaks out of the loop altogether
// continue --> Skips the current iteration / value to be returned

// Iterating / looping over array

let newArr = [23, 23, 34, 45, 656, 333];

// Method 1

for (i = 0; i < newArr.length ; i++) {
    const element = newArr[i];
    console.log(element);
}

// Method 2 || forEach Method

newArr.forEach(function(element){
    console.log(element);
}
);


// iteating over object

let obj = {
    name: "Valid name",
    age: 22,
    address: "invalid"
}

for (let key in obj) 
{
    console.log(key + ' ' + obj[key]);
}