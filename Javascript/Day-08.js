// Arrow Functions

// Regular function 

const printStr = function() {
    console.log('This is a string');
}

// Arrow function

const arrowStr = () => {
    console.log('This is also a string');
}

// Function returning value

const greet = function() {
    return 'This is a return value';
}

console.log(greet());

// Writing above function using arrow literal
// Ditching braces & return keyword

const newGreet = () => 'This is a return value';
console.log(greet());

// Returning object in one line // Syntax

const objGreet = () => ({name: 'qbit'}); // cloase with parenthesis

// Using args in arrow functions

const argGreet = (name) => 'Good Morning ' + name;
// OR
const argGreet_01 = name => 'Good Morning ' + name; // parenthesis can be ditched in case of singe args

console.log(argGreet(qbit));


// Accepting multiple args

const multiArgs = (arg1, arg2) => 'Names are : ' + arg1 + arg2;
console.log(multiArgs(arg1, arg2));

