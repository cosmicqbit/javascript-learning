// Prototype Inheritance

// Object
const proto = {
    agenda: function(){
        return `let's call it a day & bid goodbye`;
    },
    changeName: function(newName){
        this.name = newName;
    }
}

// Create object using Object.create method
const mosh = Object.create(proto);
mosh.name = 'Mosh Hamedani';
mosh.job = 'Programmer';
mosh.changeName("Just Mosh");

console.log(mosh);


// Employee constructor

function Employee(name, salary, experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan

Employee.prototype.slogan = function(){
    return `This company is the best. Regards ${this.name}`;
}

// Creating Object

let mosh = new Employee('Mosh', 450000, 8);
console.log(mosh);

// Inherting from different constructor

function Programmer(name, salary, experience, language){
    Employee.call(this, name, salary, experience);
    this.language = language;
}


// Programming 

let amir = new Programmer("Amir", 200, 1, "JS");
console.log(amir); // Won't inherit the Slogan prototype : amir.slogan won't work

// Inheriting the prototype

Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor

Programmer.prototype.constructor = Programmer;


// CLASSES

class Student {
    constructor(givenName, givenAge, givenEnroll) {
        this.name = givenName;
        this.age = givenAge;
        this.enroll = givenEnroll;
    }

    motto(){
        return `${this.name} must strive to refrom myself & the entire world. InSha Allah`;
    }

    joiningYear(){
        return `You have been here for ${givenAge - 6} years`;
    }

    static add(a,b) {
        return a + b;
    }
}

cosmicqbit = new Student('cosmicqbit', 21, 1);
console.log(cosmicqbit);
console.log(cosmicqbit.motto());
console.log(cosmicqbit.joiningYear());
console.log(Student.add(2, 4));

// Inheritance in classes

class Teacher extends Student {
    constructor(givenName, givenAge, givenEnroll, language, dribble){
        super(givenName, givenAge, givenEnroll);
        this.language = language;
        this.dribble = dribble;
    }
    
    favoriteLanguage(){
        if(this.language == 'python'){
            return `Python`;
        }
        else {
            return `JS`;
        }
    }

    static Multiply(a, b){
        return a * b;
    }
}

wired = new Teacher("wired", 21, 1, js, wired);
console.log(wired);
console.log(wired.favoriteLanguage());
console.log(wired.Multiply(3, 4));
