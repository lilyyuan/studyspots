var zipCode = "";

function findWeather(){
	$("#zipcode-button").click(function(){ 
		zipCode = $("#zipcode-data").val(); 
		console.log(zipCode);
		$.ajax({
  			url : "http://api.wunderground.com/api/d17f7b9a0dddc27a/conditions/geolookup/q/"+zipCode+".json",
 			 dataType : "jsonp",
 			 success : function(parsed_json) {
  				var location = parsed_json['location']['city'];
  				var temp_f = parsed_json['current_observation']['temp_f'];
  				alert("Current temperature in " + location + " is: " + temp_f);
  			}
  		});
	})
}

$( document ).ready(function() {
  findWeather();
});
