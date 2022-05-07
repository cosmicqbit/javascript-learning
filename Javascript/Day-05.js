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


// Math Object

let x = 3;
let y = 4;
let z;

z = x + y; // 7
z = x - 4; // -1
z = x / y; // 0.77
z = x * y; // 23
