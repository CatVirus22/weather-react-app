import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div class="row d-flex pt-4" data-ride="carousel">
        <div class="col-sm-4 footer-adj offset-md-2 pb-2 pt-2">
          <div class="coder">
            <a
              href="https://github.com/CatVirus22/weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            <span> by: </span>
            <img
              class="kat"
              src="https://img.icons8.com/stickers/50/000000/cat.png"
              alt="cade-cat"
            />
            <span class="coderName"> Marizabelle Aldana</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
