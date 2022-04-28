import React from "react";
import "./Forecast.css";

export default function Forecast() {
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
                    <strong>16°</strong>
                  </span>
                  <span>
                    <strong className="separator"> - </strong>
                  </span>
                  <span id="lowest">
                    <strong>6°</strong>
                  </span>
                </div>
                <img
                  src="http://openweathermap.org/img/wn/04d@2x.png"
                  alt="weather-icon"
                />
                <p className="mb-0">
                  <strong>Sun</strong>
                </p>
              </div>
              <div className="flex-column" id="daily-forecast-temps">
                <div className="col">
                  <span id="highest">
                    <strong>12°</strong>
                  </span>
                  <span>
                    <strong className="separator"> - </strong>
                  </span>
                  <span id="lowest">
                    <strong>9°</strong>
                  </span>
                </div>
                <img
                  src="http://openweathermap.org/img/wn/04d@2x.png"
                  alt="weather-icon"
                />
                <p className="mb-0">
                  <strong>Mon</strong>
                </p>
              </div>
              <div className="flex-column" id="daily-forecast-temps">
                <div className="col">
                  <span id="highest">
                    <strong>11°</strong>
                  </span>
                  <span>
                    <strong className="separator"> - </strong>
                  </span>
                  <span id="lowest">
                    <strong>4°</strong>
                  </span>
                </div>
                <img
                  src="http://openweathermap.org/img/wn/04d@2x.png"
                  alt="weather-icon"
                />
                <p className="mb-0">
                  <strong>Tue</strong>
                </p>
              </div>
              <div className="flex-column" id="daily-forecast-temps">
                <div className="col">
                  <span id="highest">
                    <strong>14°</strong>
                  </span>
                  <span>
                    <strong className="separator"> - </strong>
                  </span>
                  <span id="lowest">
                    <strong>6°</strong>
                  </span>
                </div>
                <img
                  src="http://openweathermap.org/img/wn/04d@2x.png"
                  alt="weather-icon"
                />
                <p className="mb-0">
                  <strong>Wen</strong>
                </p>
              </div>
              <div className="flex-column" id="daily-forecast-temps">
                <div className="col">
                  <span id="highest">
                    <strong>17°</strong>
                  </span>
                  <span>
                    <strong className="separator"> - </strong>
                  </span>
                  <span id="lowest">
                    <strong>10°</strong>
                  </span>
                </div>
                <img
                  src="http://openweathermap.org/img/wn/04d@2x.png"
                  alt="weather-icon"
                />
                <p className="mb-0">
                  <strong>Thu</strong>
                </p>
              </div>
              <div className="flex-column" id="daily-forecast-temps">
                <div className="col">
                  <span id="highest">
                    <strong>15°</strong>
                  </span>
                  <span>
                    <strong className="separator"> - </strong>
                  </span>
                  <span id="lowest">
                    <strong>2°</strong>
                  </span>
                </div>
                <img
                  src="http://openweathermap.org/img/wn/04d@2x.png"
                  alt="weather-icon"
                />
                <p className="mb-0">
                  <strong>fri</strong>
                </p>
              </div>
              <div className="flex-column" id="daily-forecast-temps">
                <div className="col">
                  <span id="highest">
                    <strong>11°</strong>
                  </span>
                  <span>
                    <strong className="separator"> - </strong>
                  </span>
                  <span id="lowest">
                    <strong>9°</strong>
                  </span>
                </div>
                <img
                  src="http://openweathermap.org/img/wn/04d@2x.png"
                  alt="weather-icon"
                />
                <p className="mb-0">
                  <strong>Sat</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
