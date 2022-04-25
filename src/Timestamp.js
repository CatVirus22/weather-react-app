import React from "react";
import "./Info.css";
import "./Search";

export default function dateInfo(props) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentMonth = [
    "January",
    "February",
    "March",
    "April",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = weekDays[props.date.getDay()];

  let month = currentMonth[props.date.getMonth()];
  let date = props.date.getDate();
  let year = props.date.getFullYear();

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return (
    <ul>
      <li id="current-date">
        {day}, {month} {date}, {year}.
      </li>
      <li id="current-time">
        Last time updated: {hours}:{minutes}
      </li>
    </ul>
  );
}
