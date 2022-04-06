var APIKey = 'f6a50489796a30a62c225d62a793288a';
var city = document.getElementsByClassName("search-bar");

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

let weather = {
    fetchWeather: function (city) {
        fetch(("http://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&appid="
        + this.APIKey)
        )
        .then((Response) => Response.json())
        .then((Data) => console.log(Data));
    }

}