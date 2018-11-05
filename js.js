(function () {
    let startBtn = document.getElementById('start_btn');
    startBtn.addEventListener("click", obtainData);

    function obtainData() {
        let xhr = new XMLHttpRequest();

        //let day = document.getElementById('day').value;
        //let month = document.getElementById('month').value;
        //let year = document.getElementById('year').value;

        //let newDate = year + "-" + month + "-" + day;

        let input = document.getElementById('inputDate').value;

        var date = new Date(input);
        let day1 = date.getDate();
        let month1 = date.getMonth() + 1;
        let year1 = date.getFullYear();


        let newDate1 = year1 + "-" + month1 + "-" + day1;

        xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=lzoMeM8jKcFxyl9crmCv9zQ37ImYydIJu56vxDaL&date=" + newDate1);
        //xhr.onreadystatechange = function () {
        //    if (xhr.readyState == 4 && xhr.status == 200) {
        //        showData(xhr.response);

        //    }
        //};
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
        document.getElementById('copyright').innerHTML = data['copyright'];
        document.getElementById('date').innerHTML = data['date'];
        document.getElementById('explanation').innerHTML = data['explanation'];
        document.getElementById('title').innerHTML = data['title'];

        let image = '<img src="' + data['url'] + '" />';

        document.getElementById('url').innerHTML = image;
    }
}());

