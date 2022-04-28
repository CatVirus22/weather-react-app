import React, { useState } from "react";
import "./Info.css";

export default function Temp(props) {
  let [unit, setUnit] = useState(props.celsius);

  function fahrenheit(event) {
    event.preventDefault();
    setUnit(Math.round((props.celsius * 9) / 5 + 32));
  }

  function celsius(event) {
    event.preventDefault();
    setUnit(props.celsius);
  }
  return (
    <div>
      <span className="float-left" id="current-temp">
        {unit}°
      </span>

      <a className="float-left" id="temp-celsius" href="/" onClick={celsius}>
        {" "}
        C
      </a>
      <span id="separator"> | </span>
      <a
        className="float-left"
        id="temp-fahrenheit"
        href="/"
        onClick={fahrenheit}
      >
        {" "}
        F
      </a>
    </div>
  );
}
