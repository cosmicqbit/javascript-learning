// Callback Functions

// Suppose this response is coming from server
let students = [
    {name: 'wired', subject: 'JS'},
    {name: 'qbit', subject: 'ML'}
]

function enrollStudent(student) {
    setTimeout(function(){
        students.push(student);
    }, 8000);
}

function getStudents() {
    setTimeout(function() {
        let str = '';
        students.forEach(function(element){
            str += `<li> ${student.name} </li>`;
        });
        document.getElementById('students').innerHTML = str;
    }, 1000);
}

let newStudent = {name:"Sunny", subject:"Python"};
enrollStudent(newStudent);
getStudents();

// The above code won't write the new student to the DOM cuz it was delayed by 8 seconds 
// and the write was performed within 1 milli second.

 students = [
    {name: 'wired', subject: 'JS'},
    {name: 'qbit', subject: 'ML'}
]

function enrollStudent(student, callback) { // new
    setTimeout(function(){
        students.push(student);
        callback(); // New 
    }, 8000);
}

function getStudents() {
    setTimeout(function() {
        let str = '';
        students.forEach(function(element){
            str += `<li> ${student.name} </li>`;
        });
        document.getElementById('students').innerHTML = str;
    }, 1000);
}

newStudent = {name:"Sunny", subject:"Python"};
enrollStudent(newStudent, getStudents); // new

// Promises 

let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );