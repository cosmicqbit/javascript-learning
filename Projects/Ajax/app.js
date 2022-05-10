let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log('fetchBtn activated');
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the Object
    // xhr.open('GET', 'wired.txt', true);
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    xhr.open('POSt', 'https://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');

    // What to do on progress
    xhr.onprogress = function () {
        console.log('On progress');
    }

    // Optional
    xhr.onreadystatechange = function () {
        console.log('Ready State is: ', xhr.readyState);
    }

    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
        console.log(this.responseText);
        }
        else {
            console.log('Some error occured');
        }
    }

    // Send the request
    let params = `{"name":"test","salary":"123","age":"23"}`;
    xhr.send(params);

    // This will get displayed first cuz it was achieved asynchronously
    console.log('This is the end');
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('popHandler activated');
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the Object
    xhr.open('POSt', 'https://dummy.restapiexample.com/api/v1/employees', true);

    xhr.onload = function () {
        if(this.status === 200){

        let obj = JSON.parse(this.responseText);
        console.log(obj);
        let list = document.getElementById('list');
        for (key in obj)
        {
            str += `<li>${obj[key].employee_name}</li>`;
        }
        list.innerHTML = str;
        }
        else {
            console.log('Some error occured');
        }
    }

    // Send the request
    xhr.send();

    // This will get displayed first cuz it was achieved asynchronously
    console.log('This is the end');
}