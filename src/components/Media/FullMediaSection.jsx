// Media.js
import React from "react";
import "./MediaSection.css";

import Dicon from "../../img/icon.png";

function FullMediaSection() {
  return (
    <section className="fullmedia-section">
      <div className="fullmedia-content">
        <div className="header-bed-content animate__animated animate__bounce">
          <h1 className="bed-title">BED</h1>
          <h1 className="bed-number">34</h1>
          <div className="DiconSection">
            <img className="PcautionIconImg" src={Dicon} alt="Dicon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FullMediaSection;
