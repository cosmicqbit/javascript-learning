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


// Window Object

// DOM --> Document Object Model 
// We can use Windows Object Methods like this

// Alert
window.alert('Hello World');
// OR SIMPLY
alert("hello world");

// Prompt --> Prompts a user to type something in the input box
a = prompt('Type something below & hit okay');

// Confirm 
a = confirm('Please confirm'); // Okay vs Cancel 


// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
window.location.href = 'https://wired.com';

//Reload
window.location.reload();

// History Object

window.history.go(-2);
val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);


// Windows is in global scope that is why we can omit it 
// DOM 

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);

// Element Selectors 

// Single Element Selector

let element = document.getElementById('myfirst');
element = element.className;
element = element.childNodes;
element = element.parentNode;

// Change styling 
element.style.background = '#333';
element.style.color = '#fff';
element.style.padding = '5px';
element.style.display = 'none';

// // Change content
element.textContent = 'Task List';
element.innerText = 'My Tasks';
element.innerHTML = '<span style="color:red">Task List</span>';


// querySelector 

document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';


// Multi element selector

//document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
console.log(items[1]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);

//document.getElementsByTagName

let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

// Conver HTML Collection into array
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});

console.log(lis);

//document.querySelectorAll

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
}

console.log(items);

// Creating elements

// Create element
const elemento = document.createElement('li');

// Add class
elemento.className = 'collection-item';

// Add id
elemento.id = 'new-item';

// Add attribute
elemento.setAttribute('title', 'New item');

// Inner Text

elemento.innerText = "This is new list item";

// Pusing li into the actual <ul> in the DOM

let ul = document.querySelector('ul.list');
ul.appendChild(elemento);

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link to li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);

// Replacing Items

// Create new Item
let elem2 = document.createElement('h3');

// Add Id & class
elem2.id = 'new-item';
elem2.className = 'new-item';

let tnode = document.createTextNode('This is h3 tag').appendChild(tnode);

elemento.replaceWith(elem2);

// OR 

// Get the Old heading 
const oldHeading = document.getElementById('task-title');
//Parent 
const cardAction = document.querySelector('.card-action');

//Replace 
cardAction.replaceChild(newHeading, oldHeading);