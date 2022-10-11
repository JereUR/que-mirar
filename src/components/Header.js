import React from "react";
import logo from "../assets/Logo.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

export const Header = () => {
  return (
    <header className="header">
      <div class="social">
        <a
          href="https://github.com/JereUR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-icon" src={github} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/jeremias-dominguez-vega/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-icon" src={linkedin} alt="linkedin" />
        </a>
      </div>
      <div className="header-content container">
        <article className="logo-container">
          <img className="logo-icon" src={logo} alt="logo" />
        </article>
        <h1>QueMirar</h1>
      </div>
    </header>
  );
};
