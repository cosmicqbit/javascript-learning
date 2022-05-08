// Prototype Inheritance

const proto = {
    agenda: function(){
        return `let's call it a day & bid goodbye`;
    },
    changeName: function(newName){
        this.name = newName;
    }
}

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

