// Events & Event Objects

document.getElementById('heading').addEventListener('click', function(){
    console.log('You have clicked the heading');
    // OR
    location.href = '//wiredtoolkit.tk';
    let variable;
    console.log('You have clicked on heading');

    // Event target element
    variable = e.target;
    variable = e.target.id;
    variable = e.target.className;
    variable = e.target.classList;

    // Coords event relative to target element 
    variable = e.offsetX;
    variable = e.offsetY;

    // Coords event relative to the window
    variable = e.clientY;
    variable = e.clientX;

    console.log(variable);
});



// function(e) where e is an event object
// e.target object : 


// Mouse Events

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);
// Doubleclick
clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
card.addEventListener('mouseenter', runEvent);
// Mouseleave
card.addEventListener('mouseleave', runEvent);
// Mouseover
card.addEventListener('mouseover', runEvent);
// Mouseout
card.addEventListener('mouseout', runEvent);
// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

// local & sessionStorage

localStorage.setItem('name', 'wired'); // Will save key pair value 
localStorage.setItem('enroll', 87); // Will save key pair value 

// Retrieve the item
localStorage.getItem('name'); // will return the key pair value

// clear the local storage 
localStorage.clear();

// Clear a particular keyvalue pair
localStorage.removeItem('name');


let impArray = ['toys', 'fruits', 'vegs'];

localStorage.setItem('Items', impArray); // This will save the array as string

// Solution
localStorage.setItem('Item', JSON.stringify(impArray));
let value = JOSN.parse(localStorage.getItem('Item'));
console.log(value); // Will return an object


