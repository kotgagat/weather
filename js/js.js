let temperatura = "not initializated";
let ilosc = 1;
let odp;

document.getElementById("zmienTypTemperaturyBtn").addEventListener("click", liczKlikniecia);
document.getElementById("zmienTypTemperaturyBtn").addEventListener("click", computeTemperatue);

function toCelcius(temperatura) {
    return Math.round(5 / 9 * (temperatura - 32));
}

function toFarenthait(temperatura) {
    return Math.round(9 / 5 * temperatura + 32);
}

function isFarenhait(licznik) {
    if (licznik % 2 === 0) {
        return true;
    }

}

function liczKlikniecia() {


    if (isFarenhait(ilosc)) {
        odp = "°C";
        document.getElementById("temperatureTypeLabel").innerHTML = odp;
    }
    else {
        odp = "°F";
        document.getElementById("temperatureTypeLabel").innerHTML = odp;
    }

}


function computeTemperatue() {


    if (isFarenhait(ilosc)) {
        temperatura = toCelcius(temperatura);
        document.getElementById("temperature").innerHTML = temperatura;
    }
    else {
        temperatura = toFarenthait(temperatura);
        document.getElementById("temperature").innerHTML = temperatura;
    }
    ilosc++;
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
        let url = "https://fcc-weather-api.glitch.me/api/current?lon=" + position.coords.longitude + "&lat=" + position.coords.latitude;
        $("#url").html(url);
        $(document).ready(function () {


            function ustawWartosci(dane) {
                $(".message").html(JSON.stringify(dane));

                $(".weather").text(dane.weather[0].description);
                $(".city").text(dane.name);
                $(".temperature").text(dane.main.temp);
                temperatura = dane.main.temp;

                $(".url_icon").text(dane.weather[0].icon);

                document.getElementById("myImg").src = dane.weather[0].icon;
            }

            $.getJSON(url, ustawWartosci);
        });
    });
}