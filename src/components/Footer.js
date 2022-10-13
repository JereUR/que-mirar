import React from "react";
import imdbImg from "../assets/imdb-api.png";
import reactImg from "../assets/react-logo.png";
import logo from "../assets/Logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div class="left-footer">
        <article className="logo-container">
          <img className="logo-icon" src={logo} alt="logo" />
        </article>
        <div className="footer-created">
          <p>
            Created by <b>Jeremías Dominguez Vega</b>
          </p>
        </div>
      </div>

      <div className="footer-powered">
        <p className="footer-text">Powered by</p>
        <img src={reactImg} alt="react-logo" />
        <p className="footer-text">&</p>
        <img className="footer-imdb" src={imdbImg} alt="imdb-logo" />
      </div>
    </footer>
  );
};
