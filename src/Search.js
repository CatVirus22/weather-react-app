import React, { useState } from "react";
import axios from "axios";
import Info from "./Info";
import Forecast from "./Forecast";
import "./Search.css";

export default function Search(props) {
  const [data, setData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);
  function fetchInfo(response) {
    setData({
      loaded: true,
      temp: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      windspeed: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      country: response.data.sys.country,
      max: Math.round(response.data.main.temp_max),
      min: Math.round(response.data.main.temp_min),
    });
    console.log(response.data);
  }

  function search() {
    const apiKey = `d67292210b7875b5cf04663144f38fa9`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}
    &appid=${apiKey}&units=metric`;
    axios.get(url).then(fetchInfo);
  }

  function searchSubmit(event) {
    event.preventDefault();
    search();
  }

  function cityUpdate(event) {
    setCity(event.target.value);
  }

  if (data.loaded) {
    return (
      <div className="infoContainer">
        <div className="row d-flex justify-content-center" id="first-row">
          <div className="col-sm-5 search-bar pb-4">
            <form className="input-group rounded" onSubmit={searchSubmit}>
              <input
                type="search"
                className="form-control rounded"
                id="search-input"
                placeholder="Enter a city or country"
                aria-label="Search"
                aria-describedby="button-addon2"
                onChange={cityUpdate}
              />
              <button
                className="btn search-button"
                type="submit"
                id="button-addon2"
              >
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
        <Info fetch={data} />
        <Forecast fetch={data} />
      </div>
    );
  } else {
    search();
  }
}
