//1 - todos los tipos de pokemon
//2 - mostrar tpos de pokemon en dropdown
//3 - si el usuario elige uno, mostrar 3 aleatorios de ese tipo

function obtenerPlanet() {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://swapi.co/api/planets/");
    //xhr.onreadystatechange = function () {
    //    if (xhr.readyState == 4 && xhr.status == 200) {
    //        showData(xhr.response);
    //    }
    //};
    xhr.addEventListener("load", function () {
        mostrarTipos(this.response);
    });
    xhr.send();
    //conseguir tipos de pokemon y devolverlos en un array

    //devolver array de tipos de pokemon
}

//function pedirPlanet() {

//    let xhrFechas = new XMLHttpRequest();
//    xhrFechas.open("GET", "https://swapi.co/api/planets/");
   
//}


function mostrarTipos(response) {

    let json = response;

    //to extract the text we can use later
    let data = JSON.parse(json);
    console.log(data);

    data['results'].forEach(x => {

        let element = document.getElementById("planet-select");
        var z = document.createElement('option'); // is a node
        z.innerHTML = x.name;
        element.appendChild(z);
    });
    
   
    //poner datos en dropdown

    //al dropdown añadir eventlistener // llamar desde el evento a cogerPokemonsDelTipo(tipo)
}

//funcion que se ejecuta al darse el evento
function cogerPokemonsDeTipo(tipo) {
    //coger todos, elegir 3 random
}

obtenerPlanet();