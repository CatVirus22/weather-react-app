import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import Footer from "./Footer";

export default function App() {
  return (
    <div className=" App container pt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-5 header">
          <div>
            <h1>Weather now</h1>
          </div>
        </div>
        <Search defaultCity="London" />
        <Footer />
      </div>
    </div>
  );
}
