(function () { 

let startBtn = document.getElementById('btn');
startBtn.addEventListener("click", obtainData);

let array = [];

function obtainData() {

    let input = document.getElementById('inputName').value;

    array.push(input);

    pedirNames(array);
}

function pedirNames(array) {
    let index = 0;
    let xhrFechas = new XMLHttpRequest();
    xhrFechas.open("GET", "https://swapi.co/api/people/?search=" + array[index]);
    xhrFechas.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            showData(this.response);
            index++;
            if (index < array.length) {
                xhrFechas.open("GET", "https://swapi.co/api/people/?search=" + array[index]);
                xhrFechas.send();
            }
        }
    };
    xhrFechas.send();
}

function showData(response) {
    let json = response;

    //to extract the text we can use later
    let data = JSON.parse(json);
    console.log(data);

    data['results'].forEach(x => {


        let element = document.getElementById("info");
        var z = document.createElement('p'); 

        let name = x.name;
        let year = x.birth_year;

        z.innerHTML = name + ' - ' + year;

        element.appendChild(z);

        //document.getElementById('info').innerHTML += name + '-' + year;
    });   
}
}());