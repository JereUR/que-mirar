import React from "react";

import imdbImg from "../assets/imdb-api.png";
import reactImg from "../assets/react-logo.png";
import github from "../assets/github-logo.png";
import linkedin from "../assets/linkedin.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="left-footer">
        <div className="social">
          <div>
            <a
              href="https://github.com/JereUR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-icon github" src={github} alt="github" />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/jeremias-dominguez-vega/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-icon" src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
        <div className="footer-created">
          <p>
            Created by <b>Jeremías Dominguez Vega</b>
          </p>
        </div>
      </div>

      <div className="footer-powered">
        <p className="footer-text">Powered by</p>
        <img className="footer-img" src={reactImg} alt="react-logo" />
        <p className="footer-text">&</p>
        <img className="footer-img" src={imdbImg} alt="imdb-logo" />
      </div>
    </footer>
  );
};
