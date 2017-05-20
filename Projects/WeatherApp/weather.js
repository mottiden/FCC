
function getForecasts(position) {
	const latitude  = position.coords.latitude;
	const longitude = position.coords.longitude;
	const place = [latitude, longitude];
	console.log(place);

	// calling google maps API for name city
	
	const googleMaps = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleKey}`;
	// calling dark-sky API using Fetch
	
	const darkSky = `https://crossorigin.me/https://api.darksky.net/forecast/${key}/${latitude},${longitude}?data=auto`;

	// fetching data
	fetch(darkSky)
		.then(response => response.json())
		.then(data => parseForecasts(data))
	 	.then(parsed => visualizeForecasts(parsed));
}


// taking only important data
function parseForecasts(json){
	const data = {};
	data.currently = json.currently;//actual weather conditions
	data.hourly = json.hourly;		//weather for the next 48h
	data.hourly.data = data.hourly.data.splice(0,24); // taking only the first 24h
	data.daily = json.daily;		//week weather conditions

	// add time conversions
	// convert percentage 

	return data;
}


function visualizeForecasts(d){
	// select elements you want data to be visualized
	const currently = [...document.querySelectorAll("span[data-currently]")];
	const hourly = document.querySelector("ul.hourly");
	const daily = document.querySelector("ul.daily");
	const dailyContent = [];
	const hourlyContent = [];
	
	currently.map(span => span.innerHTML = d.currently[`${span.dataset.currently}`]);
	
	d.hourly.data.forEach((el,i) => hourlyContent.push(`
	<li class="hourly-${i}"> 
        <span data-hourly="temperature">${el.temperature}</span> 
        <span data-hourly="precipProbability">${el.precipProbability}</span>
        <span data-hourly="${el.icon}"></span>
        <span data-hourly="time">${el.time}</span>
    </li>`));	

	d.daily.data.forEach((el,i) => dailyContent.push(`
	<li class="daily-${i}"> 
        <span data-daily="temperatureMax">${el.temperatureMax}</span> 
        <span data-daily="temperatureMin">${el.temperatureMin}</span>
        <span data-daily="precipProbability">${el.precipProbability}</span>
        <span data-daily="${el.icon}"></span>
        <span data-daily="time">${el.time}</span>
    </li>`));

	daily.innerHTML = dailyContent.join("");
	hourly.innerHTML = hourlyContent.join("");
}

// position error message
function error() {
	return console.error("Unable to retrieve your location");
}


// convert degrees to celsius
function fToC(fahrenheit) {
	const celsius = (fahrenheit - 32) * 5 / 9;
	return celsius;
}

const options = {
		enableHighAccuracy: true,
		timeout: 15000,
		maximumAge: 0
};

navigator.geolocation.getCurrentPosition(getForecasts, error, options);




// https://source.unsplash.com/gYl-UtwNg_I/1500x1500
// sunny - https://unsplash.com/photos/E9aetBe2w40, https://unsplash.com/photos/P9G7dBP-7ZQ
// snowy - https://unsplash.com/photos/QLfjlyEamV4
// rainy - https://unsplash.com/photos/VR0s3Yqm2RA, https://unsplash.com/photos/Kwi60PbAM9I
// cloudy - https://unsplash.com/photos/le60j2br1BI
// stormy - https://unsplash.com/photos/in9-n0JwgZ0, https://unsplash.com/photos/LHdST1-f2bc