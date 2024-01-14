// Header.js
import React, { useState } from "react";
import "../../App.css";
import "./Header.css";
import imgSample from "../../img/Header-icon.png";
import imgPinLocation from "../../img/PinLocation-icon.png";

function Header() {
  // Default 1
  const [counter, setCounter] = useState(1);

  // Max 4 - HeaderIconDivs
  const incrementCounter = () => {
    if (counter < 4) {
      setCounter(counter + 1);
    }
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const HeaderIconDivs = () => {
    const divs = [];
    for (let i = 0; i < counter; i++) {
      divs.push(
        <h1
          key={i}
          className="header-this-icon header-content-mid2
      animate__animated animate__flipInY"
        >
          <span className="header-icon-view">
            <img src={imgSample} alt="header icon reference" />
          </span>
        </h1>
      );
    }
    return divs;
  };

  return (
    <header className="header">
      {/* ### Header Icon Controller ### */}
      <div className="Header-Controller">
        <span>header-controller </span>
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>
      </div>
      {/* ### End Header Icon Controller ### */}

      <div className="header-bed header-content-mid">
        <div className="header-bed-content animate__animated animate__bounce">
          <h1 className="bed-title">BED</h1>
          <h1 className="bed-number">34</h1>
        </div>
      </div>

      <div className="header-container">
        <div className="header-name">
          <h1
            className="header-patient-name header-content-mid2
        animate__animated animate__fadeInDown"
          >
            Seranno Samuel Kenzo
          </h1>
          <h1
            className="header-patient-location  
        animate__animated animate__fadeInDown header-content-mid2"
          >
            <span className="header-patient-location-icon">
              <img src={imgPinLocation} alt="Pin location" height={50} />
            </span>
            <span className="header-patient-location-text">
              Admission Block
            </span>
          </h1>
        </div>
        <div className="header-icons">
          {/* maximum of 4 icons, justify right */}
          {HeaderIconDivs()}

          {/* <h1
          className="header-this-icon header-content-mid2
        animate__animated animate__flipInY"
        >
          <span className="header-icon-view">
            <img src={imgSample} alt="header icon reference" />
          </span>
        </h1>
        <h1
          className="header-this-icon header-content-mid2
          animate__animated animate__flipInY"
        >
          <span className="header-icon-view">
            <img src={imgSample} alt="header icon reference" />
          </span>
        </h1>
        <h1
          className="header-this-icon header-content-mid2
          animate__animated animate__flipInY"
        >
          <span className="header-icon-view">
            <img src={imgSample} alt="header icon reference" />
          </span>
        </h1>
        <h1
          className="header-this-icon header-content-mid2
          animate__animated animate__flipInY"
        >
          <span className="header-icon-view">
            <img src={imgSample} alt="header icon reference" />
          </span>
        </h1> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
