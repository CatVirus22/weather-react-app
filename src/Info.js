import React, { useState } from "react";
import "./Info.css";
import axios from "axios";

export default function Info(props) {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);

  function fahrenheit(event) {
    event.preventDefault();
    data((data.Mathtemp * 9) / 5 + 32);
  }

  function celsius(event) {
    event.preventDefault();
    data(data.temp);
  }

  function fetchInfo(response) {
    console.log(response.data);

    setData({
      temp: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      windspeed: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });

    setLoaded(true);
  }

  if (loaded) {
    return (
      <div
        class="row d-flex carousel slide justify-content-center"
        id="first-row"
      >
        <div class="col-xl-8 data">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="d-flex mb-4">
                <div class="col">
                  <div class="display-2">
                    <span class="float-left" id="current-temp">
                      {data.temp}°
                    </span>

                    <a
                      class="float-left"
                      id="temp-celsius"
                      href="/"
                      onClick={celsius}
                    >
                      {" "}
                      C°
                    </a>
                    <span id="separator"> | </span>
                    <a
                      class="float-left"
                      id="temp-fahrenheit"
                      href="/"
                      onClick={fahrenheit}
                    >
                      {" "}
                      F°
                    </a>
                  </div>
                  <ul>
                    <li id="current-date">Monday, March 28, 2022.</li>
                    <li id="current-time">Last time updated: 17:15</li>
                    <li id="city-info">London, United Kingdom</li>
                  </ul>
                </div>
                <div class="col">
                  <ul id="forecast-list">
                    <li id="weather-icon">
                      <img src={data.icon} alt="weather-icon" />
                    </li>
                    <li id="weather-description">{data.description}</li>
                    <li id="wind-speed">Wind speed: {data.windspeed}km/h</li>
                    <li id="current-hmidity">Humidity: {data.humidity}%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `d67292210b7875b5cf04663144f38fa9`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}
    &appid=${apiKey}&units=metric`;
    axios.get(url).then(fetchInfo);
    return "Wait until information loads... Thank you.";
  }
}
