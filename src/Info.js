import React, { useState } from "react";
import "./Info.css";

export default function Info(props) {
  let [currentTemp, setTemp] = useState(props.currentTemp);

  function fahrenheit(event) {
    event.preventDefault();
    setTemp(Math.round((props.currentTemp * 9) / 5 + 32));
  }

  function celsius(event) {
    event.preventDefault();
    setTemp(props.currentTemp);
  }

  return (
    <div class="row d-flex carousel slide" id="first-row">
      <div class="col-xl-8 data">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="d-flex mb-4">
              <div class="col">
                <div class="display-2">
                  <span class="float-left" id="current-temp">
                    {currentTemp}°
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
                    <img
                      src="http://openweathermap.org/img/wn/04d@2x.png"
                      alt="weather-icon"
                    />
                  </li>
                  <li id="weather-description">Overcast clouds</li>
                  <li id="wind-speed">Wind speed: 4km/h</li>
                  <li id="current-hmidity">Humidity: 65%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
