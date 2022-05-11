// Callback Functions

// Suppose this response is coming from server
const students = [
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

