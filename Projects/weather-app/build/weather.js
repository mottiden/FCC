"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function parseForecasts(e){var t={},r={0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat"};return t.currently=e.currently,t.hourly=e.hourly,t.hourly.data=t.hourly.data.splice(1,12),t.daily=e.daily,t.hourly.data.map(function(e){e.time=new Date(1e3*e.time).getHours(),e.precipProbability=Math.round(100*e.precipProbability)}),t.daily.data.map(function(e){e.time=r[new Date(1e3*e.time).getDay()],e.precipProbability=Math.round(100*e.precipProbability)}),t.currently.temperature=Math.round(t.currently.temperature)+"&#176",t.currently.humidity=Math.round(100*t.currently.humidity),t.currently.time=new Date(1e3*t.currently.time).toDateString(),t}function visualizeForecasts(e,t){var r=[].concat(_toConsumableArray(document.querySelectorAll("span[data-currently]"))),a=document.querySelector("i.icon"),n=document.querySelector("h1.location"),o={"partly-cloudy-night":"wi wi-night-alt-cloudy","partly-cloudy-day":"wi wi-day-sunny-overcast","clear-day":"wi wi-day-sunny",cloudy:"wi wi-cloudy",fog:"wi wi-fog","clear-night":"wi wi-night-clear",rain:"wi wi-rain",sleet:"wi wi-sleet",snow:"wi wi-snowflake-cold"},i=[],l=[];loader.map(function(e){return e.style.display="none"}),hourly.style.display="flex",curr.style.display="flex",clock.style.display="block",n.innerHTML=t[0].results[4].formatted_address,r.map(function(t){return t.innerHTML=e.currently[""+t.dataset.currently]}),a.className="icon "+o[e.currently.icon],e.hourly.data.forEach(function(e,t){l.push('\n\t<li class="hourly-'+t+'"> \n        <span data-hourly="temperature">'+Math.round(e.temperature)+'&#176;</span> \n        <span data-hourly="precipProbability">'+e.precipProbability+'<i class="wi wi-humidity"></i></span>\n        <i class="'+o[e.icon]+'"></i>\n        <span data-hourly="time">'+e.time+"</span>\n    </li>")}),e.daily.data.forEach(function(e,t){i.push('\n\t<li class="daily-'+t+'"> \n        <span data-daily="temperatureMax">'+Math.round(e.temperatureMax)+'&#176; max</span> \n        <span data-daily="temperatureMin">'+Math.round(e.temperatureMin)+'&#176; min</span>\n        <span data-daily="precipProbability">'+e.precipProbability+'<i class="wi wi-humidity"></i></span>\n        <i class="'+o[e.icon]+'"></i>\n        <span data-daily="time">'+e.time+"</span>\n    </li>")}),daily.innerHTML=i.join(""),hourly.innerHTML=l.join("")}function fToC(e){return 5*(e-32)/9}function cToF(e){return 9*e/5+32}function change(){var e=[].concat(_toConsumableArray(document.querySelectorAll("span[data-daily='temperatureMax']"))),t=[].concat(_toConsumableArray(document.querySelectorAll("span[data-daily='temperatureMin']"))),r=document.querySelector("span[data-currently='temperature']"),a=[].concat(_toConsumableArray(document.querySelectorAll("span[data-hourly='temperature']")));"temp-active"===this.lastChild.classList[2]?(this.lastChild.classList.toggle("temp-active"),this.firstChild.classList.toggle("temp-active"),r.innerHTML=Math.round(fToC(parseFloat(r.innerHTML)))+"&#176;",e.map(function(e){return e.innerHTML=Math.round(fToC(parseFloat(e.innerHTML)))+"&#176; max"}),t.map(function(e){return e.innerHTML=Math.round(fToC(parseFloat(e.innerHTML)))+"&#176; min"}),a.map(function(e){return e.innerHTML=Math.round(fToC(parseFloat(e.innerHTML)))+"&#176;"})):(this.lastChild.classList.toggle("temp-active"),this.firstChild.classList.toggle("temp-active"),r.innerHTML=Math.round(cToF(parseFloat(r.innerHTML)))+"&#176;",e.map(function(e){return e.innerHTML=Math.round(cToF(parseFloat(e.innerHTML)))+"&#176; max"}),t.map(function(e){return e.innerHTML=Math.round(cToF(parseFloat(e.innerHTML)))+"&#176; min"}),a.map(function(e){return e.innerHTML=Math.round(cToF(parseFloat(e.innerHTML)))+"&#176;"}))}function showForecast(){"today"===this.className?(hourly.style.display="flex",daily.style.display="none"):(hourly.style.display="none",daily.style.display="flex")}function getForecasts(e){var t=e.coords.latitude,r=e.coords.longitude,a=[],n="https://maps.googleapis.com/maps/api/geocode/json?latlng="+t+","+r+"&key=AIzaSyD5R9TCg3drhO8d4zied5tIRliequPQ3n8";fetch(n).then(function(e){return e.json()}).then(function(e){return a.push(e)});var o="https://crossorigin.me/https://api.darksky.net/forecast/9d393aee39bebd1b5aa183ce65fbb7ae/"+t+","+r+"?data=auto";fetch(o).then(function(e){return e.json()}).then(function(e){return parseForecasts(e)}).then(function(e){return visualizeForecasts(e,a)})}function error(){return console.error("Unable to retrieve your location")}var cF=document.querySelector(".c-f"),hourly=document.querySelector("ul.hourly"),daily=document.querySelector("ul.daily"),today=document.querySelector(".today"),week=document.querySelector(".this-week"),loader=[].concat(_toConsumableArray(document.querySelectorAll(".loader"))),curr=document.querySelector(".currently"),clock=document.querySelector(".clock");cF.addEventListener("click",change),today.addEventListener("click",showForecast),week.addEventListener("click",showForecast);var options={enableHighAccuracy:!0,timeout:15e3,maximumAge:0},hands=document.getElementsByClassName("hand");setInterval(function(){var e=new Date,t=e.getHours(),r=e.getMinutes(),a=e.getSeconds();hands[0].style.transform="rotate("+(90+30*t)+"deg)",hands[1].style.transform="rotate("+(90+6*r)+"deg)",hands[2].style.transform="rotate("+(90+6*a)+"deg)"},1e3),navigator.geolocation.getCurrentPosition(getForecasts,error,options);