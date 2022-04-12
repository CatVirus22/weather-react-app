import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div class="search-bar pb-4">
      <form class="input-group rounded">
        <input
          type="search"
          class="form-control rounded"
          id="search-input"
          placeholder="Enter a city or country"
          aria-label="Search"
          aria-describedby="button-addon2"
        />
        <button class="btn search-button" type="submit" id="button-addon2">
          <i class="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}
