
// store searches in search history
var citySearch = $('#search-bar');
var searchHistory = $('#search-history');
var currentCityDate =$('.current-city-date');
var currentCity = $('#current-city');
var currentDate = $('#current-date');
var currentTemp = $('#current-temp');
var currentHumidity = $('#current-humidity');
var currentWind = $('#current-wind');
var currentIcon = $('#current-icon');
var icon = $('#icon');

var searches = [];

var APIKey = "d3cc6b6651a2e6f3be0149457f993f46";
var lat = "";
var lon = "";
var cityName = "";

function handleFormSubmit(event) {
    event.preventDefault();

    var searchedCity = $('input[name="city-input"]').val();
    localStorage.setItem("searches", JSON.stringify(searches));

    if (!searchedCity){
        console.log('No city entered');
        return;
    }

// display weather info for searched city

// get lat and lon for city
    var cityName = searchedCity;    
    var coordinateURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=d3cc6b6651a2e6f3be0149457f993f46";

        fetch(coordinateURL)
        .then (function(response){
            return response.json();
        })
        .then (function(data){
            console.log(data);
            console.log(data[0].lon);
            console.log(data[0].lat);
            var lat = data[0].lat;
            var lon = data[0].lon;


        // pull forecast info for that lat and lon location

        var requestURL ="https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=d3cc6b6651a2e6f3be0149457f993f46&units=imperial";


        fetch(requestURL)
        .then (function(response) {
            return response.json();
        })
        .then (function(data){
            console.log(data);
    
            // pull current weather info for that lat and lon location
        // display name & date

            var date = moment().format("MM/DD/YYYY");

            currentCity.text(data.city.name + " (" + date + ")");

        // display icon representation of weather, 
            var iconCode = data.list[0].weather[0].icon;
            console.log(iconCode);
            var iconURL = "http://openweathermap.org/img/wn/"+ iconCode + "@2x.png";
            currentIcon.attr('src', iconURL);
            currentIcon.attr('id', 'current-icon');
            currentIcon.attr('alt', 'weather icon');


        // display temp, humidity, wind spind
            currentTemp.text("Temp: " + data.list[0].main.temp);
            currentHumidity.text("Humidity: " + data.list[0].main.humidity);
            currentWind.text("Wind speed: " + data.list[0].wind.speed);
            
            

        // display 5 day forecast with date, icon, temp, humidity, wind speed

        });
        
        });



    // add p element for searched city 
    var searchHistoryCity = $('<p class="flex-row justify-space-between align-left p-2 bg-light text-dark">');
    searchHistoryCity.text(searchedCity);

    // print to page
    searchHistory.append(searchHistoryCity);
    
// <!-- not working -->
// store search history 
    // function storeSearches() {
    //     localStorage.setItem("searched city", searchedCity);
    // }

    // clear input element
    $('input[name="city-input"]').val('');

};


// <!-- not working -->
// load stored searches on refresh
// function init(){
//     var storedSearches = JSON.parse(localStorage.getItem("searches"));
//     if (storedSearches !== null) {
//         searches = storedSearches;
//     }


citySearch.on('submit', handleFormSubmit);
// add event listener for clicking on a stored item