import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-content container">
        {/* <article className="logo-container">
          <img className="logo-icon" src={logo} alt="logo" />
        </article> */}
        <h1>QueMirar</h1>
        <p>
          <i>Encontrá algo para maratonear... </i>
        </p>
      </div>
      <hr />
    </header>
  );
};
