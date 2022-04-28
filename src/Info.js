import React from "react";
import "./Info.css";
import Timestamp from "./Timestamp";
import Temp from "./Temp";

export default function Info(props) {
  return (
    <div
      className="row d-flex carousel slide justify-content-center"
      id="first-row"
    >
      <div className="col-xl-8 data">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex mb-4">
              <div className="col">
                <div className="display-2">
                  <Temp celsius={props.fetch.temp} />
                </div>
                <Timestamp date={props.fetch.date} />
                <ul>
                  <li id="city-info">
                    {props.fetch.city}, {props.fetch.country}
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul id="forecast-list">
                  <li id="weather-icon">
                    <img
                      class="icon"
                      src={props.fetch.icon}
                      alt="weather-icon"
                    />
                  </li>
                  <li id="weather-description">{props.fetch.description}</li>
                  <li id="wind-speed">
                    Wind speed: {props.fetch.windspeed}km/h
                  </li>
                  <li id="current-hmidity">
                    Humidity: {props.fetch.humidity}%
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
