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