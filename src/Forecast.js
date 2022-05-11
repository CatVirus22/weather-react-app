import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import DailyForecast from "./DailyForecast";

export default function Forecast(props) {
  const [forecast, setForecast] = useState(false);
  const [info, setInfo] = useState();
  function handleResponse(response) {
    setInfo(response.data.daily);
    setForecast(true);
    console.log(response.data);
  }

  function forecastSearch() {
    let lat = props.fetch.lat;
    let lon = props.fetch.lon;
    const apiKey = `4640a78ace2d7c4dfd7fda800eef31e9`;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (forecast) {
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
                {info.map(function (dailyForecast, index) {
                  if (index < 7) {
                    return (
                      <div
                        className="flex-column"
                        id="daily-forecast-temps"
                        key={index}
                      >
                        <DailyForecast fetch={dailyForecast} />;
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
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
