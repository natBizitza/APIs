// JavaScript source code
function getPerson() {
    let nombre = document.getElementById('nombre').value;

    let edad = document.getElementById('edad').value;

    let person = { nombre: nombre, edad: edad };

    document.getElementById('mostrar').innerHTML = person.nombre + " " + person.edad;

    //to convert person to string
    localStorage.setItem('person', JSON.stringify(person));
}

let savedInfo = JSON.parse(localStorage.getItem('person'));

if (savedInfo !== null) {
    document.getElementById('mostrar').innerHTML = savedInfo.nombre + " " + savedInfo.edad;
} else {
    console.log("The button doesn't exist on the page.");
}


let startBtn = document.getElementById('info_btn');

//if button exists on the web page
if (startBtn !== null) {
    startBtn.addEventListener("click", getPerson);
}
//no () cause it's a callback function

//localStorage.Clear()