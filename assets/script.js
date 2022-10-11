
// store searches in search history
var citySearch = $('#search-bar');
var searchHistory = $('#search-history');

function handleFormSubmit(event) {
    event.preventDefault();

    var searchedCity = $('input[name="city-input"]').val();

    if (!searchedCity){
        console.log('No city entered');
        return;
    }

    // add p element for searched city 
    var searchHistoryCity = $('<p class="flex-row justify-space-between align-left p-2 bg-light text-dark">');
    searchHistoryCity.text(searchedCity);

    // print to page
    searchHistory.append(searchHistoryCity);

    // clear input element
    $('input[name="city-input"]').val('');

}

citySearch.on('submit', handleFormSubmit);



// var APIKey = "d3cc6b6651a2e6f3be0149457f993f46";
// lat and lon variables will be numbers
// var lat = ;
// var lon = ;
// var cityName = "London";
    // will need to convert city to lat and lon



// convert city name to lat and lon
// var coordinateURL = "http://api.openweathermap.org/geo/1.0/direct?q=`$(cityName)`&appid=d3cc6b6651a2e6f3be0149457f993f46"

// fetch(coordinateURL)
// .then (function(response){
//     return response.json();
// })
// .then (function(data){
//     for (var i=0; i < data.length; i++) {
//         console.log(data[i].lat);
//         console.log(data[i].lon);
//     }
// });

// pull weather info for that location
// var requestURL ="https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=d3cc6b6651a2e6f3be0149457f993f46";


// fetch(requestURL)
// .then (function(response) {
//     return response.json();
// })
// .then (function(data){
//     console.log(data);
// });


// fetch(requestURL)
// .then (function(response){
//     return response.json();
// })
// .then (function(data){

// })