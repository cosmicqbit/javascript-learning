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


