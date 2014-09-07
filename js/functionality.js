var zipCode = "";
var weather = "";
var weatherIcon = "";
var weatherTemp = "";
var weatherName = "";
var mood = "";
var location = "";

function findWeather(){
	$("#zipcode-button").unbind().click(function(){ 
		zipCode = $("#zipcode-data").val(); 
		console.log(zipCode);
		$.ajax({
  			url : "http://api.wunderground.com/api/d17f7b9a0dddc27a/conditions/geolookup/q/"+zipCode+".json",
 			  dataType : "jsonp",
 			  success : function(parsed_json) {
            console.log(parsed_json);
            weather = parsed_json['current_observation']['icon'];
            //weatherIcon = parsed_json['current_observation']['icon_url'];
            weatherName = parsed_json['current_observation']['weather'];
            weatherTemp = parsed_json['current_observation']['temp_f'];
            $(".degrees-text").html(weatherTemp);
            $(".weather-forecast").html(weatherName); //"<img src=" + weatherIcon + ">"
  			}
  		});
	})
  getMood();
}

function getMood() {
  $("#focus").unbind().click(function(){ 
      mood = $(this).attr( "id");
  });

  $("#procrastination").unbind().click(function(){ 
      mood = $(this).attr( "id");
  });

  combineMoodForecast();
}  

function combineMoodForecast() {
    if ((mood == "procrastination")&&(weather == "sunny")) {
      location = "frozenyogurt";
    }
    else {location= "ownroom"}
}

$( document ).ready(function() {
  findWeather();
});

