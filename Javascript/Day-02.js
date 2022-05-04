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





