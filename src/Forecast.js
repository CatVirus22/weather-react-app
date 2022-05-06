import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [forecast, setForecast] = useState({ loaded: false });
  const [info, setInfo] = useState();
  function handleResponse(response) {
    setInfo(response.data.daily);
    setForecast(true);
    console.log(response.data);
  }

  function forecastSearch() {
    let lat = props.fetch.lat;
    let lon = props.fetch.lon;
    const apiKey = `d67292210b7875b5cf04663144f38fa9`;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (forecast.loaded) {
    return (
      <div
        className="row d-flex carousel slide pt-4 justify-content-center"
        id="first-row"
        data-bs-ride="carousel"
      >
        <div className="col-xl-8 forecast">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="d-flex justify-content-around text-center pb-3 pt-3"
                id="daily-forecast-temps"
              >
                <div className="flex-column" id="daily-forecast-temps">
                  <div className="col">
                    <span id="highest">
                      <strong>{info[0].temp.max}°</strong>
                    </span>
                    <span>
                      <strong className="separator"> - </strong>
                    </span>
                    <span id="lowest">
                      <strong>{forecast[0].temp.max}°</strong>
                    </span>
                  </div>
                  <img
                    className="icon"
                    src={info[0].weather[0].icon}
                    alt="weather-icon"
                  />
                  <p className="mb-0">
                    <strong>{info[0].dt}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    forecastSearch();
  }
}
