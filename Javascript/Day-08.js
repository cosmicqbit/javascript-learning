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

// Fetch API

function getData(){
    url = "file.txt";
    fetch(url).then((response) => {
        return response.text();
    }).then((data) => {
        console.log(data);
    })
}

getData();

// Fetchign github users first 100

function getUsers(){
    url = "https://api.github.com/users";
    fetch(url).then((response) => {
        return response.json(); // To parse json as object
    }).then((data) => {
        console.log(data);
    })
}

getUsers();

// Sending POST request usign fetch API 

function postUsers() {
    url = '';
    data = '{"name":"filesss","salary":"123","age":"123"}'
    params = {
        method: 'post',
        headers: {
            'Content-Type' : 'application/json'
        },
        body : data 
    }
    fetch(url, params).then(response => response.json())
    .then(data => console.log(data)
    )
}

// async / await

async function wired() {
    const response = await fetch('https://api.github.com/users');
    const users = await response.json();
    return users;
}

let ifResolved = wired();
ifResolved.then(data => console.log(data))

