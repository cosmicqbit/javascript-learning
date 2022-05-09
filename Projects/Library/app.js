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

Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
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
    else if (cooking.checkout) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);

    let display = new Display();
    display.add(book);
    display.clear();

    e.preventDefault();
}





