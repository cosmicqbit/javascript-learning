// Web Crawler Solution 

let targetVar = 'javascript';
let get = document.links;
let href;

Array.from(get).forEach(function(element) {
    href = element.href;
    if(href.includes(targetVar)) {
        console.log(href);
    }
})


// Maths Operatiosn

let x = 3;
let y = 4;
let z;

z = x + y; // 7
z = x - 4; // -1
z = x / y; // 0.77
z = x * y; // 23

// Math Object

z = Math;
z = Math.PI;
z = Math.E;
z = Math.round(5.6); // 6
z = Math.ceil(3.3); // 4
z = Math.floor(2.6); // 2
z = Math.abs(-4); // 4
z = Math.sqrt(4); // 16 Square root
z = Math.pow(2, 3); // 8 cube
z = Math.min(2, 4, 6); // 2
z = Math.max(3, 5, 6); // 6
z = Math.random(); // random number btw 1 & 10
// random number between range
z = 50 + (100 - 50)*Math.random(); // prints btw 50 & 100
z = 10 + (100 -10)*Math.random(); // prints btw 10 & 100

console.log(z);

// Use ceil to get integer from random numbers

// Date & Time

let today = new Date(); // Prints current date

let anotherDay = new Date('23 June 2022'); 
anotherDay = new Date('23 June 2022 12:04:45'); 

let output = anotherDay.getDay();
output = anotherDay.getDate(); // Date like 12
output = anotherDay.getMinutes(); 
output = anotherDay.getHours(); 
output = anotherDay.getSeconds(); 
output = anotherDay.getTime(); // Time Stamp Calculates from 1 Jan 1970  
output = anotherDay.getMonth();   
output = anotherDay.getMilliseconds();   

// Set Date
anotherDay.setDate(12);
anotherDay.setMonth(3);
anotherDay.setHour(3);
anotherDay.setSeconds(33);

console.log(output); // Outputs day while 0 stands for Sunday 


// Object Literals, Constructors & Object Oriented JS


// Object Literal
let car = {
    name: 'Maruti',
    topSpeed: 90,
    run: function run(){
        console.log('Car is running');
    }
}

car.run(); // Prints Car is running
car.name; // Will return Maruti


// Constructor

