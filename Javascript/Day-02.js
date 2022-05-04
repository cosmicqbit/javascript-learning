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







