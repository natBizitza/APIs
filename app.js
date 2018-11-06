// JavaScript source code

let savedName = sessionStorage.getItem('nombre');

if (savedName !== null) {
    document.getElementById('mostrar').innerHTML = savedName;
} else {
    console.log("The button doesn't exist on the page.");
}

function getName() {
    let nombre = document.getElementById('nombre').value;
    document.getElementById('mostrar').innerHTML = nombre;
    sessionStorage.setItem('nombre', nombre);
}

let startBtn = document.getElementById('btn');

//if button exists on the web page
if (startBtn !== null) {
    startBtn.addEventListener("click", getName);
}
//no () cause it's a callback function
