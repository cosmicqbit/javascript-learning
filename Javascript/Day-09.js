// Regular Expressions 

let str = /cosmic qbit/i; // Flag i : Case insensitive
let globalStr = /test/g; // Flag g : global / Interate through entire string

// Methods

// exec(); | search for a match in stirng. retruns array or null

let obj = /wired/.exec('This is wired media');

// test(); | returns true of false

let str01 = /code/;
str.test('Code with Mosh');

// match(); | Returns array of all matches or null

let str02 = "JavaScipt tutorial from begineer to advance level"; 
let result = str02.match(/ial/);

// search(); | Returns index of match

// replace(); | replaces matched substring with a replacement 

let test = "Coding is fun";
test.replace('fun', 'love');

// Split(); | break a string into substrings 