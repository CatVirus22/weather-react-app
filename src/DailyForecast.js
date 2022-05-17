import React from "react";

export default function DailyForecast(props) {
  function maxTemp() {
    let max = Math.round(props.fetch.temp.max);
    return max;
  }
  function minTemp() {
    let min = Math.round(props.fetch.temp.min);
    return min;
  }

  function day() {
    let date = new Date(props.fetch.dt * 1000);
    let day = date.getDay();

    let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return weekDays[day];
  }

  return (
    <div>
      <div className="col">
        <span id="highest">
          <strong>{maxTemp()}°</strong>
        </span>
        <span>
          <strong className="separator"> - </strong>
        </span>
        <span id="lowest">
          <strong>{minTemp()}°</strong>
        </span>
      </div>
      <img
        className="forecastIcon"
        src={`http://openweathermap.org/img/wn/${props.fetch.weather[0].icon}@2x.png`}
        alt="forecast-icon"
      />
      <p className="mb-0">
        <strong>{day()}</strong>
      </p>
    </div>
  );
}
