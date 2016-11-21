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

function draw(){
  background(0);
  if (weather){
    var temp = weather.main.temp
    var humidity = weather.main.humidity
    ellipse(100, 100, temp, temp);
    ellipse(300, 100, humidity, humidity);
  }
}
