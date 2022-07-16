import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-created">
        <p>
          Created by <b>Jeremías Dominguez Vega</b>
        </p>
      </div>
      <div className="footer-powered">
        <p>Powered by</p>
        <img
          src="https://cdn.discordapp.com/attachments/894702938386210896/997741349849804871/react-logo.png"
          alt="react-logo"
        />
      </div>
    </footer>
  );
};
