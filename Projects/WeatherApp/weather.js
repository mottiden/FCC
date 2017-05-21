
function getForecasts(position) {
	const latitude  = position.coords.latitude;
	const longitude = position.coords.longitude;
	const place = [latitude, longitude];
	const location = [];

	// calling google maps API for name city
	
	const googleMaps = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleKey}`;
	// fetch(googleMaps)
	// 	.then(response => response.json())
	// 	.then(data => location.push(data));

	// calling dark-sky API using Fetch
	
	const darkSky = `https://crossorigin.me/https://api.darksky.net/forecast/${key}/${latitude},${longitude}?data=auto`;
	// fetch(darkSky)
	// 	.then(response => response.json())
	// 	.then(data => parseForecasts(data))
	//  	.then(parsed => visualizeForecasts(parsed, location));
}


// taking only important data
function parseForecasts(json){
	const data = {};
	const days = {0: "Sun", 1: "Mon", 2: "Tue", 3: "Wed", 4: "Thu", 5: "Fri", 6: "Sat"};

	data.currently = json.currently;//actual weather conditions
	data.hourly = json.hourly;		//weather for the next 48h
	data.hourly.data = data.hourly.data.splice(1,25); // taking only the first 24h
	data.daily = json.daily;		//week weather conditions

	// parsing hourly
	data.hourly.data.map(el => {
		el.time = new Date(el.time*1000).getHours();
		el.precipProbability = Math.round(el.precipProbability*100);
	});

	// parsing daily
	data.daily.data.map(el => {
		el.time = days[new Date(el.time*1000).getDay()];
		el.precipProbability = Math.round(el.precipProbability*100);
	});

	// parsing currently
	data.currently.precipProbability = Math.round(data.currently.precipProbability*100);
	data.currently.humidity = Math.round(data.currently.humidity*100);
	data.currently.time = new Date(data.currently.time*1000).toDateString();
	
	return data;
}


function visualizeForecasts(d,l){
	const dailyContent = [];
	const hourlyContent = [];
	
	location.innerHTML = l[0].results[4].formatted_address;
	currently.map(span => span.innerHTML = d.currently[`${span.dataset.currently}`]);
	mainIcon.className = d.currently.icon;

	d.hourly.data.forEach((el,i) => hourlyContent.push(`
	<li class="hourly-${i}"> 
        <span data-hourly="temperature">${el.temperature}</span> 
        <span data-hourly="precipProbability">${el.precipProbability}</span>
        <i class="${el.icon}"></i>
        <span data-hourly="time">${el.time}</span>
    </li>`));	

	d.daily.data.forEach((el,i) => dailyContent.push(`
	<li class="daily-${i}"> 
        <span data-daily="temperatureMax">${el.temperatureMax}</span> 
        <span data-daily="temperatureMin">${el.temperatureMin}</span>
        <span data-daily="precipProbability">${el.precipProbability}</span>
        <i class="${el.icon}"></i>
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


const currently = [...document.querySelectorAll("span[data-currently]")];
const mainIcon = document.querySelector("i.icon");
const location = document.querySelector("h1.location");
const hourly = document.querySelector("ul.hourly");
const daily = document.querySelector("ul.daily");
navigator.geolocation.getCurrentPosition(getForecasts, error, options);




// https://source.unsplash.com/gYl-UtwNg_I/1500x1500
// sunny - https://unsplash.com/photos/E9aetBe2w40, https://unsplash.com/photos/P9G7dBP-7ZQ
// snowy - https://unsplash.com/photos/QLfjlyEamV4
// rainy - https://unsplash.com/photos/VR0s3Yqm2RA, https://unsplash.com/photos/Kwi60PbAM9I
// cloudy - https://unsplash.com/photos/le60j2br1BI
// stormy - https://unsplash.com/photos/in9-n0JwgZ0, https://unsplash.com/photos/LHdST1-f2bc