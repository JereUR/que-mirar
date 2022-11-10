import React from "react";

import film from "../assets/cine-logo.jpg";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-content container">
        <h1>
          {" "}
          <img src={film} alt="film" className="film-header" /> QueMirar <br />{" "}
          <p>
            <i>Encontrá algo nuevo para ver... </i>
          </p>
        </h1>
        <hr />
      </div>
    </header>
  );
};
