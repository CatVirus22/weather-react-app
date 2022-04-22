import React from "react";
import "./Search.css";

export default function Search(props) {
  return (
    <div className="search-bar pb-4">
      <form className="input-group rounded">
        <input
          type="search"
          className="form-control rounded"
          id="search-input"
          placeholder="Enter a city or country"
          aria-label="Search"
          aria-describedby="button-addon2"
        />
        <button className="btn search-button" type="submit" id="button-addon2">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}
