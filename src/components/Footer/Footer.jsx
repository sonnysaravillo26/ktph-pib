// Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left-content">
        <p>© 2023 Your Company</p>
      </div>

      {/*blocker that can show/hide.*/}
      <div className="footer-blocker"></div>
    </footer>
  );
}

export default Footer;
