import React from "react";
import logo from "../assets/Logo.png";

export const Header = () => {
  return (
    <header className="header">
      <section className="header-content container">
        <article className="logo">
          <img src={logo} alt="logo" />
          <h1>QueMirar.com</h1>
        </article>
      </section>
    </header>
  );
};
