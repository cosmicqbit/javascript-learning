// Constructor

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor

function Display() {

}

// Add methods to display prototype
Display.prototype.add = function (book) {
    tableBody = document.getElementById('tableBody');
    let uiString = ` <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

// Implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// Implement the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.lenght < 2)
    {
        return false;
    }
    else {
        return true;
    }
}

// Show function
Display.prototype.show = function(type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type}" role="alert"> ${displayMessage}</div>`;
    console.log(message);
    setTimeout(() => {
        message.innerHTML = '';
    }, 2000);
}


// Add submit event listener to libraryForm

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    let type;

    if (fiction.checked) {
        type = fiction.value;
    } 
    else if (programming.checked) {
        type = programming.value;
    } 
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);

    let display = new Display();

    if(display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added!');
    } 
    else {
        display.show('danger', 'Sorry you can not add this book!');
    }
    
    e.preventDefault();
}





