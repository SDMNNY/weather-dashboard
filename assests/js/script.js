var searchButton = document.getElementById("search-button");
var today = moment().format("1");
function searchWeatherConditions () {
    var search = document.getElementById("enter-city");

var weatherUrl =`https://api.openweathermap.org/data/2.5/weather?q=` +
search.value +
`&appid=ed95dbbfaa5c8b8a01c87da3afa2c95db&units=imperial`;

$("#5day-header").text("");

fetch(weatherUrl).then(function (response) {
    if(response.ok){
        $("#clear-history").append(
            ${search.value}
        );
    return response.json().then(function (data) { 
        $
    }