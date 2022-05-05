let name01 = 'Shahid';
let name02 = 'Rashid';
let name;

console.log(`Welcome ${name01} to our new home!`);
console.log(`Welcome ${name02} to our new home!`);

// Functions 

function greet(name, thank) {
    console.log(`Welcome ${name} to our new home!, & ${thank}`);
}

greet('Sajid', '& thank you for coming');

// Defaul value for arg

function greet(name, thank='Thank you') {
    console.log(`Welcome ${name} to our new hotel & ${thank}`);
}

// Returnig a value from function

function value(call) {
    return `Your name is ${call}`;
}

let val = value('Amir');
console.log(val);

// Function Expression

const square = function(num){
    return num * num;
};

// Function inside an object // Property method

const myobj = {
    name: 'Rahid',
    enroll: 456,
    game: function(){
        return WatchDogs2;
    }
}

console.log(myobj.game()); // Will return WatchDogs2

arr = ['India', 'China', 'Pakistan'];

// For each 

arr.forEach(function(element, array, index){
    console.log(element, index);
});

// India 0
// China 1
// Pakistan 2

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function(){
    console.log('IIFE Ran..');
   })();
   
   (function(name){
     console.log('Hello '+ name);
   })('Brad');

// Scoping

// Global Scope

var a = 1;
let b = 2;
const c = 3;

function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope: ', a, b, c);
}


test();

if(true) {
// Block Scope
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('If Scope: ', a, b, c);
}

for(var a = 0; a < 10; a++) {
console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);
