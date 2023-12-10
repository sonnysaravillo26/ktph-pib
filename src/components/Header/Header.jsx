// Header.js
import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-bed header-content-mid">
        <div className="header-bed-content">
          <h1 className="bed-title">BED</h1>
          <h1 className="bed-number">34</h1>
        </div>
      </div>

      <div className="header-name">
        <h1 className="header-patient-name header-content-mid2">
          Saravillo Sonny Barrientos
        </h1>
        <h1 className="header-patient-location">
          <span class="header-patient-location-icon"> icon </span>
          <span class="header-patient-location-text"> Admission Block </span>
        </h1>
      </div>

      <div className="header-icons">
        {/* maximum of 4 icons, justify right */} 
          <h1 className="header-this-icon header-content-mid2">
            <span class="header-icon-view"> 1 </span>
          </h1>  
          <h1 className="header-this-icon header-content-mid2">
            <span class="header-icon-view"> 2 </span>
          </h1>  
          <h1 className="header-this-icon header-content-mid2">
            <span class="header-icon-view"> 3 </span>
          </h1>  
          <h1 className="header-this-icon header-content-mid2">
            <span class="header-icon-view"> 4 </span>
          </h1>  
      </div>
    </header>
  );
}

export default Header;
