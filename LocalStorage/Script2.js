// JavaScript source code
(function () {
    let startBtn = document.getElementById('start_btn');
    startBtn.addEventListener("click", obtainData);

    function obtainData() {
        let xhr = new XMLHttpRequest();

        let input = document.getElementById('inputDate').value;

        let date = new Date(input);
        let day1 = date.getDate();
        let month1 = date.getMonth() + 1;
        let year1 = date.getFullYear();

        let newDate1 = year1 + "-" + month1 + "-" + day1;

        xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=lzoMeM8jKcFxyl9crmCv9zQ37ImYydIJu56vxDaL&date=" + newDate1);
      
        xhr.addEventListener("load", function () {
            showData(this.response);
        });
        xhr.send();
    }

    function showData(response) {
        let json = response;

        //to extract the text we can use later
        let data = JSON.parse(json);
        console.log(data);
        //document.getElementById('copyright').innerHTML = data['copyright'];
        //document.getElementById('date').innerHTML = data['date'];
        //document.getElementById('explanation').innerHTML = data['explanation'];
        //document.getElementById('title').innerHTML = data['title'];

        let image = '<img src="' + data['url'] + '" />';

        document.getElementById('url').innerHTML = image;

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
    }
}());

