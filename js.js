(function () {
    let startBtn = document.getElementById('start_btn');
    startBtn.addEventListener("click", obtainData);

    function obtainData() {

        let input = document.getElementById('inputDate').value;

        let date = new Date(input);
        let day1 = date.getDate();
        let month1 = date.getMonth() + 1;
        let year1 = date.getFullYear();

        let newDate1 = year1 + "-" + month1 + "-" + day1;

        let array = [];

        for (let i = 0 ; i < 14; i++) {

            let data = new Date(date.setDate(date.getDate() - 1));

            let day3 = data.getDate();
            let month3 = data.getMonth() + 1;
            let year3 = data.getFullYear();

            let newOldDate3 = data.getFullYear() + "-" + (data.getMonth() + 1) + "-" + data.getDate();

            array.push(newOldDate3);
        }  

        pedirNasa(array);     
    }

    function pedirNasa(array) {
        let index = 0;
        let xhrFechas = new XMLHttpRequest();
        xhrFechas.open("GET", "https://api.nasa.gov/planetary/apod?api_key=lzoMeM8jKcFxyl9crmCv9zQ37ImYydIJu56vxDaL&date=" + array[index]);
        xhrFechas.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                showData(this.response);
                index++;
                if (index < array.length) {
                    xhrFechas.open("GET", "https://api.nasa.gov/planetary/apod?api_key=lzoMeM8jKcFxyl9crmCv9zQ37ImYydIJu56vxDaL&date="+array[index]);
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
        //document.getElementById('copyright').innerHTML = data['copyright'];
        //document.getElementById('date').innerHTML = data['date'];
        //document.getElementById('explanation').innerHTML = data['explanation'];
        document.getElementById('title').innerHTML += data['title'];

        //let image = '<img src="' + data['url'] + '" />';

        //document.getElementById('url').innerHTML = image;
    }
}());

