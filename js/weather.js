var weather;
function setup (){
  createCanvas (400,200);
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Miami&APPID=79b31a94c523013cc25062224cf470ca&units=imperial',gotData);
}

function gotData(data){
//  println(data);
  weather = data;
}

function draw(){
  background(0);
  if (weather){
    ellipse(100, 100, weather.main.temp, weather.main.temp);
    ellipse(300, 100, weather.main.humidity, weather.main.humidity);
  }
}
