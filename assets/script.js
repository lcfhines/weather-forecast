
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
var forecastDate1 = $('#forecast-date-1');
var forecastDate2 = $('#forecast-date-2');
var forecastDate3 = $('#forecast-date-3');
var forecastDate4 = $('#forecast-date-4');
var forecastDate5 = $('#forecast-date-5');
var forecastDetails1 = $('#forecast-details-1');
var forecastDetails2 = $('#forecast-details-2');
var forecastDetails3 = $('#forecast-details-3');
var forecastDetails4 = $('#forecast-details-4');
var forecastDetails5 = $('#forecast-details-5');
var futureIcon1 = $('#future-icon-1');
var futureIcon2 = $('#future-icon-2');
var futureIcon3 = $('#future-icon-3');
var futureIcon4 = $('#future-icon-4');
var futureIcon5 = $('#future-icon-5');
var futureTemp1 = $('#future-temp-1');
var futureTemp2 = $('#future-temp-2');
var futureTemp3 = $('#future-temp-3');
var futureTemp4 = $('#future-temp-4');
var futureTemp5 = $('#future-temp-5');
var futureHumidity1 = $('#future-humidity-1');
var futureHumidity2 = $('#future-humidity-2');
var futureHumidity3 = $('#future-humidity-3');
var futureHumidity4 = $('#future-humidity-4');
var futureHumidity5 = $('#future-humidity-5');
var futureWind1 = $('#future-wind-1');
var futureWind2 = $('#future-wind-2');
var futureWind3 = $('#future-wind-3');
var futureWind4 = $('#future-wind-4');
var futureWind5 = $('#future-wind-5');


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
            currentIcon.attr('alt', 'weather icon');


        // display temp, humidity, wind spind
            currentTemp.text("Temp: " + data.list[0].main.temp + "\u00B0 F");
            currentHumidity.text("Humidity: " + data.list[0].main.humidity + "%");
            currentWind.text("Wind speed: " + data.list[0].wind.speed + "mph");
            
        // display 5 day forecast with date, icon, temp, humidity, wind speed
        // card 1 date
            var date1 = moment().add(1,'days').format("MM/DD/YYYY");
            forecastDate1.text(date1);
        // card 1 icon
            var icon1 = data.list[7].weather[0].icon;
            var iconURL = "http://openweathermap.org/img/wn/"+ icon1 + "@2x.png";
            futureIcon1.attr('src', iconURL);
            futureIcon1.attr('alt','weather icon');
        // card 1 temp, humidity, wind speed
            futureTemp1.text("Temp: " + data.list[7].main.temp + "\u00B0 F");
            futureHumidity1.text("Humidity: " + data.list[7].main.humidity + "%");
            futureWind1.text("Wind speed: " + data.list[7].wind.speed + "mph");
                // display 5 day forecast with date, icon, temp, humidity, wind speed
        // card 2
            var date2 = moment().add(2,'days').format("MM/DD/YYYY");
            forecastDate2.text(date2);
            var icon2 = data.list[15].weather[0].icon;
            var iconURL = "http://openweathermap.org/img/wn/"+ icon2 + "@2x.png";
            futureIcon2.attr('src', iconURL);
            futureIcon2.attr('alt','weather icon');
            futureTemp2.text("Temp: " + data.list[15].main.temp + "\u00B0 F");
            futureHumidity2.text("Humidity: " + data.list[15].main.humidity + "%");
            futureWind2.text("Wind speed: " + data.list[15].wind.speed + "mph");
        // card 3
            var date3 = moment().add(3,'days').format("MM/DD/YYYY");
            forecastDate3.text(date3);
            var icon3 = data.list[23].weather[0].icon;
            var iconURL = "http://openweathermap.org/img/wn/"+ icon3 + "@2x.png";
            futureIcon3.attr('src', iconURL);
            futureIcon3.attr('alt','weather icon');
            futureTemp3.text("Temp: " + data.list[23].main.temp + "\u00B0 F");
            futureHumidity3.text("Humidity: " + data.list[23].main.humidity + "%");
            futureWind3.text("Wind speed: " + data.list[23].wind.speed + "mph");
        // card 4
            var date4 = moment().add(4,'days').format("MM/DD/YYYY");
            forecastDate4.text(date4);
            var icon4 = data.list[31].weather[0].icon;
            var iconURL = "http://openweathermap.org/img/wn/"+ icon4 + "@2x.png";
            futureIcon4.attr('src', iconURL);
            futureIcon4.attr('alt','weather icon');
            futureTemp4.text("Temp: " + data.list[31].main.temp + "\u00B0 F");
            futureHumidity4.text("Humidity: " + data.list[31].main.humidity + "%");
            futureWind4.text("Wind speed: " + data.list[31].wind.speed + "mph");
         // card 5
            var date5 = moment().add(5,'days').format("MM/DD/YYYY");
            forecastDate5.text(date5);
            var icon5 = data.list[39].weather[0].icon;
            var iconURL = "http://openweathermap.org/img/wn/"+ icon5 + "@2x.png";
            futureIcon5.attr('src', iconURL);
            futureIcon5.attr('alt','weather icon');
            futureTemp5.text("Temp: " + data.list[39].main.temp + "\u00B0 F");
            futureHumidity5.text("Humidity: " + data.list[39].main.humidity + "%");
            futureWind5.text("Wind speed: " + data.list[39].wind.speed + "mph");
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