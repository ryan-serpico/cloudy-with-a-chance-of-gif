// Giphy api variables
var apiG = "http://api.giphy.com/v1/gifs/search?";
var apiKeyG = "&api_key=dc6zaTOxFJmzC";
var query = "&q=sunny";


// Open Weather Map variables
var weather;
var api= 'http://api.openweathermap.org/data/2.5/weather?q='
var apiKey = '&APPID=79b31a94c523013cc25062224cf470ca';
var units = '&units=imperial';

var input;

function setup (){
  createCanvas (400,200);

  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');
}

function weatherAsk(){
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data){
//  println(data);
  weather = data;
}

// Draws two circles in the browser that represent the temp and humidity
function draw(){
  background(0);
  if (weather){
    var temp = weather.main.temp;
    var humidity = weather.main.humidity;
    var description = weather.weather.description;
    ellipse(100, 100, temp, temp);
    ellipse(300, 100, humidity, humidity);
//    alert(temp);
  }
}

// // This is where the GIFs come from

// function setup(){
//   noCanvas();
//   var url = apiG + apiKeyG + query;
//   loadJSON(url, gotData);
// }
//
// function gotData(giphy){
//   createImg(giphy.data[0].images.original.url);
// }
