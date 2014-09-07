var zipCode = "";
var weather = "";
var weatherIcon = "";
var weatherTemp = "";
var weatherName = "";
var mood = "";
var lat = "";
var lon = "";


function findWeather(){
	$("#zipcode-button").unbind().click(function(){ 
		zipCode = $("#zipcode-data").val(); 
		$.ajax({
  			url : "http://api.wunderground.com/api/d17f7b9a0dddc27a/conditions/geolookup/q/"+zipCode+".json",
 			  dataType : "jsonp",
 			  success : function(parsed_json) {
            //console.log(parsed_json);
            weather = parsed_json['current_observation']['icon'];
            weatherIcon = parsed_json['current_observation']['icon_url'];
            weatherName = parsed_json['current_observation']['weather'];
            weatherTemp = parsed_json['current_observation']['temp_f'];
            lat = parsed_json['location']['lat'];
            lon = parsed_json['location']['lon'];
            $(".degrees-text").html(weatherTemp+"°");
            $(".weather-icon").html("<img src=" + weatherIcon + ">");
            $(".weather-forecast").html(weatherName); //"<img src=" + weatherIcon + ">"
  			}
  	});
	})
  getMood();
}

function getMood() {
  $("#focus").unbind().click(function(){ 
      mood = $(this).attr( "id");
      createMap();
  });

  $("#procrastination").unbind().click(function(){ 
      mood = $(this).attr( "id");
      createMap();
  });

  //combineMoodForecast();
  //findPlaces();
}  

function combineMoodForecast() {
  //function isn't working. keeps on being undone?
    if ((mood == "procrastination")&&(weather == "sunny")) {
    }

    findPlaces();
}

function findPlaces(){
    $.ajax({
        dataType: "json",
        url : "https://maps.googleapis.com/maps/api/place/textsearch/jsonp?callback=?location="+lat+","+lon+"&radius=5000&query=restaurant&key=AIzaSyDoFuP9Cs4ct_YaGyKuXuu-SpInA0vOqqQ",
        success : function(info) {
            console.log(info);
            
        }
    });
}

function createMap() {
  var myLatlng = new google.maps.LatLng(lat,lon);
  var mapOptions = {
    zoom: 18,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Come here!'
  });
}

$( document ).ready(function() {
  findWeather();
});

