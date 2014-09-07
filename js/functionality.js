var zipCode = "";
var weather = "";
var weatherIcon = "";
var weatherTemp = "";
var weatherName = "";

function findWeather(){
	$("#zipcode-button").click(function(){ 
		zipCode = $("#zipcode-data").val(); 
		console.log(zipCode);
		$.ajax({
  			url : "http://api.wunderground.com/api/d17f7b9a0dddc27a/conditions/geolookup/q/"+zipCode+".json",
 			  dataType : "jsonp",
 			  success : function(parsed_json) {
            console.log(parsed_json);
            weather = parsed_json['current_observation']['icon'];
            weatherIcon = parsed_json['current_observation']['icon_url'];
            weatherName = parsed_json['current_observation']['weather'];
            weatherTemp = parsed_json['current_observation']['temp_f'];
            $(".degrees-text").html(weatherTemp);
            $(".lead").html(weatherName); //"<img src=" + weatherIcon + ">"
  				//var location = parsed_json['location']['city'];
  				//var temp_f = parsed_json['current_observation']['temp_f'];
  				//alert("Current temperature in " + location + " is: " + temp_f);
  			}
  		});
	})
}

$( document ).ready(function() {
  findWeather();
});
