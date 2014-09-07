var zipCode = "";
/*
function findWeather(){
	$("searchBox").click(function(random){ //button for clicking to next page
		zipCode = $("zipCodeText").text(); //stuff inside the box to enter zip code
		random.jsonp({
 			url : "http://api.wunderground.com/api/d17f7b9a0dddc27a/geolookup/q/"+zipCode+".json",
  			success : function(parsed_json) {
  				var location = parsed_json['location']['city'];
  				var temp_f = parsed_json['current_observation']['temp_f'];
  				alert("Current temperature in " + location + " is: " + temp_f);
  			}
  		});
	})
}
*/

		random.jsonp({
 			url : "http://api.wunderground.com/api/d17f7b9a0dddc27a/geolookup/q/10003.json",
  			success : function(parsed_json) {
  				var location = parsed_json['location']['city'];
  				var temp_f = parsed_json['current_observation']['temp_f'];
  				alert("Current temperature in " + location + " is: " + temp_f);
  			}
  		});

