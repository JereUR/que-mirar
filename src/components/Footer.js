import React from "react";
import imdbImg from "../assets/imdb-api.png";
import reactImg from "../assets/react-logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-created">
        <p>
          Created by <b>Jeremías Dominguez Vega</b>
        </p>
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
