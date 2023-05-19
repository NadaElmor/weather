"use strict";
let city = document.getElementById("city");
let ncity = "cairo";
let req;
let weather;
showWeather();

//search button
let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", showWeather);

//search label
city.addEventListener("keyup", showWeather);

//functions
//show weather function:
function showWeather() {
  if (city.value != "") {
    ncity = city.value;
  }

  console.log(ncity);
  req = new XMLHttpRequest();
  req.open(
    "get",
    `http://api.weatherapi.com/v1/forecast.json?key=495ffa9ee8d7440e8c6184322232402&q=${ncity}&days=3&aqi=no&alerts=no`
  );

  req.send();
  req.addEventListener("loadend", function () {
    if (req.status == 200) {
      weather = JSON.parse(req.response);
      showWeatherDay1();
      getDay();
      showWeatherDay2();
      showWeatherDay3();
    }
  });
}
//show day 1
function showWeatherDay1() {
  console.log(weather);
  let cityName = document.querySelector(".city-name");
  cityName.innerHTML = weather.location.name;
  let cityTemp = document.querySelector(".city-temp");
  cityTemp.innerHTML = weather.current.temp_c + "&#8451";
  let status = document.querySelector(".status");
  status.innerHTML = weather.current.condition.text;
  // console.log(weather.forecast.forecastday[0].date);
  document.querySelector(".wind-speed1").innerHTML =
    weather.forecast.forecastday[0].hour[0].wind_degree + "%";
  document.querySelector(".wind-km1").innerHTML =
    weather.forecast.forecastday[0].hour[0].wind_kph;
  document.querySelector(".wind-dir1").innerHTML =
    weather.forecast.forecastday[0].hour[0].wind_dir;
  // document.querySelector(".icon1").scr =
  //   "weather.forecast.forecastday[0].hour[0].condition.icon";

  console.log(weather.forecast.forecastday[0].hour[0].condition.icon);
  let icon1 = document.querySelector(".icon1");
  icon1.setAttribute(
    "src",
    `https:${weather.forecast.forecastday[0].hour[0].condition.icon}`
  );
  console.log(icon1.src);
}
//get current day
function getDay() {
  let crrDate = weather.forecast.forecastday[0].date;
  let d = crrDate.slice(8);
  crrDate = crrDate.slice(5, 7);
  console.log(crrDate);
  let res = "";
  switch (crrDate) {
    case "01": {
      res = "January";
      break;
    }
    case "02": {
      res = "February";
      break;
    }
    case "03": {
      res = "march";
      break;
    }
    case "04": {
      res = "april";
      break;
    }
    case "05": {
      res = "may";
      break;
    }
    case "06": {
      res = "june";
      break;
    }
    case "07": {
      res = "july";
      break;
    }
    case "08": {
      res = "august";
      break;
    }
    case "09": {
      res = "september";
      break;
    }
    case "10": {
      res = "october";
      break;
    }
    case "11": {
      res = "november";
      break;
    }
    case "12": {
      res = "december";
      break;
    }

    default:
      break;
  }
  d = d + res;
  console.log(d);
  document.querySelector(".date-1").innerHTML = d;
}
//show weather day2
function showWeatherDay2() {
  document.querySelector(".city-temp2").innerHTML =
    weather.forecast.forecastday[1].hour[0].temp_c + "&#8451";
  document.querySelector(".city-tempf2").innerHTML =
    weather.forecast.forecastday[1].hour[0].temp_f + "<sup>o</sup>";
  document.querySelector(".status2").innerHTML =
    weather.forecast.forecastday[1].day.condition.text;
  //icon
  let icon2 = document.querySelector(".icon2");
  icon2.setAttribute(
    "src",
    `https:${weather.forecast.forecastday[1].hour[0].condition.icon}`
  );
}
function showWeatherDay3() {
  document.querySelector(".city-temp3").innerHTML =
    weather.forecast.forecastday[2].hour[0].temp_c + "&#8451";
  document.querySelector(".city-tempf3").innerHTML =
    weather.forecast.forecastday[2].hour[0].temp_f + "<sup>o</sup>";
  document.querySelector(".status3").innerHTML =
    weather.forecast.forecastday[2].day.condition.text;
  //icon
  let icon3 = document.querySelector(".icon3");
  icon3.setAttribute(
    "src",
    `https:${weather.forecast.forecastday[1].hour[0].condition.icon}`
  );
}
