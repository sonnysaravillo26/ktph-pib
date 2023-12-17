// Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left-content">
        <div className="leftSide">
          <div className="StatusPoint">
            <span>©2023</span>
            <div className="circle"></div>
          </div>
        </div>

        <div className="rigthSide">
          <h3>
            <span> FRI </span>
            <b>|</b>
            <span> 17, DEC 2023 </span>
            <b>|</b>
            <span> 12:00 </span>
            <span> NN </span>
          </h3>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
