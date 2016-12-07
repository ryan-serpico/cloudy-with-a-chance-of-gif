// Open Weather Map variables
var weather;
var api= 'http://api.openweathermap.org/data/2.5/weather?q='
var apiKey = '&APPID=79b31a94c523013cc25062224cf470ca';
var units = '&units=imperial';

// Giphy API Stuff
var apiG = "http://api.giphy.com/v1/gifs/random?";
var apiKeyG = "api_key=dc6zaTOxFJmzC";
var query = "&tag=";
var description = ""
var button = ""

var input;

function setup(){
  button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');
}

// Weather API called
function weatherAsk(){
  var url = api + input.value() + apiKey + units;
  loadJSON(url, banana);
}

function banana(data){
  weather = data;
}

//Weather Data is acquired
function draw(){
  if (weather){
  description = weather.weather[0].description;
   noLoop();
   work();
  }
}

// This is where the GIFs come from

function work(){
  var url = apiG + apiKeyG + query + description;
  loadJSON(url, gotData);
}

function gotData(giphy){
  createImg(giphy.data.image_url);
}
