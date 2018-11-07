// JavaScript source code
let searchType;

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('select[name="item-select"]').onchange = changeEventHandler;
}, false);

function changeEventHandler(e) {
    if (e.target.value === "nombre") {
        searchType = "people";
    } else if (e.target.value === "planeta") {
        searchType = "planets";
    } else if (e.target.value === "species") {
        searchType = "species";
    }
}



//SWAPI
(function () {

    let startBtn = document.getElementById('btn');
    startBtn.addEventListener("click", obtainData);

    let array = [];

    function obtainData() {

        let input = document.getElementById('inputItem').value;

        array.push(input);

        pedirItems(array);
    }

    function pedirItems(array) {
        let index = 0;
        let xhrFechas = new XMLHttpRequest();
        xhrFechas.open("GET", "https://swapi.co/api/" + searchType+ "/?search=" + array[index]);
        xhrFechas.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                showData(this.response);
                index++;
                if (index < array.length) {
                    xhrFechas.open("GET", "https://swapi.co/api/" + searchType + "/?search=" + array[index]);
                    xhrFechas.send();
                }
            }
        };
        xhrFechas.send();
    }

    function showData(response) {
        let json = response;3

        //to extract the text we can use later
        let data = JSON.parse(json);
        console.log(data);

        data['results'].forEach(x => {


            let element = document.getElementById("info");
            var z = document.createElement('p');

            let name = x.name;
        

            z.innerHTML = name;

            element.appendChild(z);

            //document.getElementById('info').innerHTML += name + '-' + year;
        });
    }
}());