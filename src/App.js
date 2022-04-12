import React from "react";
import "./index.css";

import Search from "./Search";
import Info from "./Info";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div class=" App container pt-5">
      <div class="row d-flex">
        <div class="col-sm-5 header">
          <h1>Weather now</h1>
          <Search />
        </div>
        <Info currentTemp={7} />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
