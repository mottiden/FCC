//find lat and lon of my place
function success(position) {
  var latitude  = position.coords.latitude;
  var longitude = position.coords.longitude;

  output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

  var img = new Image();
  img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

  output.appendChild(img);
}

function error() {
  output.innerHTML = "Unable to retrieve your location";
}

output.innerHTML = "<p>Locating…</p>";
navigator.geolocation.getCurrentPosition(success, error);



//call API
if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE 6 and older
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}


http://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&APPID=7232ab469d599503ed95731f005c23fc

//Read response
{"coord":{"lon":139,"lat":35},
"sys":{"country":"JP","sunrise":1369769524,"sunset":1369821049},
"weather":[{"id":804,"main":"clouds","description":"overcast clouds","icon":"04n"}],
"main":{"temp":289.5,"humidity":89,"pressure":1013,"temp_min":287.04,"temp_max":292.04},
"wind":{"speed":7.31,"deg":187.002},
"rain":{"3h":0},
"clouds":{"all":92},
"dt":1369824698,
"id":1851632,
"name":"Shuzenji",
"cod":200}
