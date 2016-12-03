// Open Weather Map variables
var weather;
var api= 'http://api.openweathermap.org/data/2.5/weather?q='
var apiKey = '&APPID=79b31a94c523013cc25062224cf470ca';
var units = '&units=imperial';

// Giphy api variables
var apiG = "http://api.giphy.com/v1/gifs/search?";
var apiKeyG = "&api_key=dc6zaTOxFJmzC";
var query = "&q=";
var description = ""
var button = ""

var input;

function preload (){
  createCanvas (400,200);

  button = select('#submit');
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
  // background(0);
  if (weather){
    // var temp = weather.main.temp;
    // alert(temp);
    // var humidity = weather.main.humidity;
    // ellipse(100, 100, temp, temp);
    // ellipse(300, 100, humidity, humidity);
  description = weather.weather[0].description;
  // for loop - loop through the var description as if it's an array
  // var newDescription = "";
  /*for (var i = 0; i < description.length; i++) {
    console.log(description[i]);
    if description[i] is a space, change to +
    but you need to write each char into newdescription, one at a time
    newDescription = thing1 + thing2 + thing3; -----> to do one at a time, you can do newDescription += description[i]
  }
  */



   alert(description);
   noLoop();

  // description = newDescription;
  }
}

// This is where the GIFs come from

// function setup(){
//   noCanvas();
//   var url = apiG + apiKeyG + query + description;
//   loadJSON(url, gotData);
// }
//
// function gotData(giphy){
//   createImg(giphy.data[0].images.original.url);
// }
