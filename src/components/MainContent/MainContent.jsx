// MainContent.js
import React, { useState } from "react";
import "../../App.css";
import "./MainContent.css";

// Left icons
import Picon1 from "../../img/Patient-icon1.png";
// import Picon2 from "../../img/Patient-icon2.png";
// import Picon3 from "../../img/Patient-icon3.png";

// Precaution Icon
import PcautioniconR from "../../img/Precaution-iconR.png";
// import PcautioniconG from "../../img/Precaution-iconG.png";
// import PcautioniconY from "../../img/Precaution-iconY.png";
// import PcautioniconP from "../../img/Precaution-iconP.png";

// Mobility Icon
import Micon from "../../img/Mobility-icon.png";

function MainContent() {
  const [PatientIconCounter, setPatientIconCounter] = useState(2); // Default 2
  const [PrecautionCounter, setPrecautionCounter] = useState(4); // Default 4
  const [MobilityCounter, setMobilityCounter] = useState(2); // Default 4
  const [PatientCareCounter, setPatientCareCounter] = useState(4); // Default 3

  // Max 3 - Patient Icon
  const incrementPatientIconCounter = () => {
    if (PatientIconCounter < 3) {
      setPatientIconCounter(PatientIconCounter + 1);
    }
  };
  const decrementPatientIconCounter = () => {
    if (PatientIconCounter > 0) {
      setPatientIconCounter(PatientIconCounter - 1);
    }
  };
  const PatientIconDivs = () => {
    const divs = [];
    for (let i = 0; i < PatientIconCounter; i++) {
      divs.push(
        <div key={i} className="PatientIcon animate__animated animate__flipInX">
          <img src={Picon1} alt="Patient icon" />
        </div>
      );
    }
    return divs;
  };

  // Max 4 - Mobility Icon
  const incrementMobilityCounter = () => {
    if (MobilityCounter < 4) {
      setMobilityCounter(MobilityCounter + 1);
    }
  };
  const decrementMobilityCounter = () => {
    if (MobilityCounter > 0) {
      setMobilityCounter(MobilityCounter - 1);
    }
  };
  const MobilityIconDivs = () => {
    const divs = [];
    for (let i = 0; i < MobilityCounter; i++) {
      divs.push(
        <div key={i} className="Box-Content-image animate__animated animate__flipInX">
        <img src={Micon} alt="Patient icon" />
      </div>
      );
    }
    return divs;
  };


  // Max 8 - Precaution
  const incrementPrecautionCounter = () => {
    if (PrecautionCounter < 8) {
      setPrecautionCounter(PrecautionCounter + 1);
    }
  };
  const decrementPrecautionCounter = () => {
    if (PrecautionCounter > 0) {
      setPrecautionCounter(PrecautionCounter - 1);
    }
  };
  const PrecautionIconDivs = () => {
    const divs = [];
    for (let i = 0; i < PrecautionCounter; i++) {
      divs.push(
        <div key={i} className="PIcon-Image animate__animated animate__flipInY">
          <img
            className="PcautionIconImg"
            src={PcautioniconR}
            alt="Precaution icon"
          />
        </div>
      );
    }
    return divs;
  };

  // Max 6 - Patient Care 
  const incrementPatientCareCounter = () => {
    if (PatientCareCounter < 6) {
      setPatientCareCounter(PatientCareCounter + 1);
    }
  };
  const decrementPatientCareCounter = () => {
    if (PatientCareCounter > 0) {
      setPatientCareCounter(PatientCareCounter - 1);
    }
  };
  const PatientCareDivs = () => {
    const divs = [];
    for (let i = 0; i < PatientCareCounter; i++) {
      divs.push(
        <div
          key={i}
          className="Box-Content2 animate__animated animate__flipInX"
        >
          <h1>Patient has injured hand</h1>
        </div>
      );
    }
    return divs;
  };

  return (
    <section className="main-content">
      {/* ### Main Content Controller ### */}
      <div className="Patient-Controller">
        <span> Patient-Controller </span>
        <button onClick={incrementPatientIconCounter}>+</button>
        <button onClick={decrementPatientIconCounter}>-</button>
      </div>
      <div className="Precaution-Controller">
        <span>Precaution-Controller </span>
        <button onClick={incrementPrecautionCounter}>+</button>
        <button onClick={decrementPrecautionCounter}>-</button>
      </div>
      <div className="Mobility-Controller">
        <span>Mobility-Controller </span>
        <button onClick={incrementMobilityCounter}>+</button>
        <button onClick={decrementMobilityCounter}>-</button>
      </div>
      <div className="Patientcare-Controller">
        <span>Patientcare-Controller </span>
        <button onClick={incrementPatientCareCounter}>+</button>
        <button onClick={decrementPatientCareCounter}>-</button>
      </div>
      {/* ### End Main Content Controller ### */}

      {/* Partition A - Left Box */}
      <div className="PartitionA">
        {/* Consultant  */}
        <div className="PartitionA-SectionA Header-Box">
          <h1 className="Header-Box-Title2">Team Consultant</h1>
          <p className="animate__animated animate__fadeInLeft">
            Tan Ah Lim, Micheal Johnson
          </p>
        </div>

        {/* Nurse  */}
        <div className="PartitionA-SectionB Header-Box">
          <h1 className="Header-Box-Title2">Nurse</h1>
          <p className="animate__animated animate__fadeInLeft">
            Juliana Binte Mohammed Kassim
          </p>
        </div>

        {/* Language  */}
        <div className="PartitionA-SectionC">
          <div className="Language-Content animate__animated animate__flipInX">
            <h1>Mandarin</h1>
          </div>
        </div>

        {/* Patient Details - in Icon */}
        <div className="PartitionA-SectionD">
          {/* Max of 3 icons  */}
          {PatientIconDivs()}
          {/* <div className="PatientIcon animate__animated animate__flipInX">
            <img src={Picon1} alt="Patient icon" />
          </div>
          <div className="PatientIcon animate__animated animate__flipInX">
            <img src={Picon2} alt="Patient icon" />
          </div>
          <div className="PatientIcon animate__animated animate__flipInX">
            <img src={Picon3} alt="Patient icon" />
          </div> */}
        </div>

        {/* EFF and LOS  */}
        <div className="PartitionA-SectionE animate__animated animate__fadeInLeft">
          <h1>
            EDD:
            <span> 15 SEP 2023</span>
          </h1>
          <h1>
            LOS:
            <span> 5 </span>
            <span> Days </span>
          </h1>
        </div>
      </div>

      {/* Partition B - Right Box */}
      <div className="PartitionB">
        {/* Precautions  */}
        <div className="PartitionB-SectionA Header-Box ">
          <h1 className="Header-Box-Title">Precautions</h1>
          <div className="PrecautionsIcons">
            {/* Max 8 ICONS   */}
            {PrecautionIconDivs()}

            {/* <div className="PIcon-Image animate__animated animate__flipInY">
              <img
                className="PcautionIconImg"
                src={PcautioniconR}
                alt="Precaution icon"
              />
            </div>
            <div className="PIcon-Image animate__animated animate__flipInY">
              <img
                className="PcautionIconImg"
                src={PcautioniconY}
                alt="Precaution icon"
              />
            </div>
            <div className="PIcon-Image animate__animated animate__flipInY">
              <img
                className="PcautionIconImg"
                src={PcautioniconR}
                alt="Precaution icon"
              />
            </div>
            <div className="PIcon-Image animate__animated animate__flipInY">
              <img
                className="PcautionIconImg"
                src={PcautioniconP}
                alt="Precaution icon"
              />
            </div>
            <div className="PIcon-Image animate__animated animate__flipInY">
              <img
                className="PcautionIconImg"
                src={PcautioniconG}
                alt="Precaution icon"
              />
            </div>
            <div className="PIcon-Image animate__animated animate__flipInY">
              <img
                className="PcautionIconImg"
                src={PcautioniconG}
                alt="Precaution icon"
              />
            </div>
            <div className="PIcon-Image animate__animated animate__flipInY">
              <img
                className="PcautionIconImg"
                src={PcautioniconP}
                alt="Precaution icon"
              />
            </div>
            <div className="PIcon-Image animate__animated animate__flipInY">
              <img
                className="PcautionIconImg"
                src={PcautioniconP}
                alt="Precaution icon"
              />
            </div> */}
          </div>
        </div>

        {/* Nutritions  */}
        <div className="PartitionB-SectionB Header-Box Mtop">
          <h1 className="Header-Box-Title">Nutritions</h1>
          <div className="SubContent">
            <div className="Box-Content animate__animated animate__flipInX">
              <h1>Moderately Thick</h1>
            </div>
            <div className="Box-Content animate__animated animate__flipInX">
              <h1>Transitional Feeding</h1>
            </div>
            <div className="Box-Content animate__animated animate__flipInX">
              <h1>Therapeutic</h1>
            </div>
            <div className="Box-Content animate__animated animate__flipInX">
              <h1>Soft & Bite Size</h1>
            </div>
          </div>
        </div>

        {/* Mobility  */}
        <div className="PartitionB-SectionB Header-Box Mtop">
          <h1 className="Header-Box-Title">Mobility</h1>
          <div className="SubContent-Image">
            {/* Max of 4 - Mobility  */}
            {MobilityIconDivs()}
            {/* <div className="Box-Content-image animate__animated animate__flipInX">
              <img src={Micon} alt="Patient icon" />
            </div>
            <div className="Box-Content-image animate__animated animate__flipInX">
              <img src={Micon} alt="Patient icon" />
            </div>
            <div className="Box-Content-image animate__animated animate__flipInX">
              <img src={Micon} alt="Patient icon" />
            </div>
            <div className="Box-Content-image animate__animated animate__flipInX">
              <img src={Micon} alt="Patient icon" />
            </div> */}
          </div>
        </div>

        {/* Care instructions  */}
        <div className="PartitionB-SectionB Header-Box Mtop">
          <h1 className="Header-Box-Title">Care Instructions</h1>
          <div className="SubContent2">
            {/* Max of 6 - Patient Care  */}
            {PatientCareDivs()}

            {/* <div className="Box-Content2 animate__animated animate__flipInX">
              <h1>Patient has injured hand</h1>
            </div>
            <div className="Box-Content2 animate__animated animate__flipInX">
              <h1>Take good care of patient</h1>
            </div>
            <div className="Box-Content2 animate__animated animate__flipInX">
              <h1>Patient has injured hand</h1>
            </div>
            <div className="Box-Content2 animate__animated animate__flipInX">
              <h1>Take good care of patient</h1>
            </div>
            <div className="Box-Content2 animate__animated animate__flipInX">
              <h1>Patient has injured hand</h1>
            </div>
            <div className="Box-Content2 animate__animated animate__flipInX">
              <h1>Take good care of patient</h1>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
