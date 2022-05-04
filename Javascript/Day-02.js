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








