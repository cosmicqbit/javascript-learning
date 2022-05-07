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

