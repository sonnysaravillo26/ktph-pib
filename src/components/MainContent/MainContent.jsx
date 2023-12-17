// MainContent.js
import React from "react";
import "./MainContent.css";

// Left icons
import Picon1 from "../../img/Patient-icon1.png";
import Picon2 from "../../img/Patient-icon2.png";
import Picon3 from "../../img/Patient-icon3.png";

// Precaution Icon
import PcautioniconR from "../../img/Precaution-iconR.png";
import PcautioniconG from "../../img/Precaution-iconG.png";
import PcautioniconY from "../../img/Precaution-iconY.png";
import PcautioniconP from "../../img/Precaution-iconP.png";

// Mobility Icon
import Micon from "../../img/Mobility-icon.png";

function MainContent() {
  return (
    <section className="main-content">
      {/* Partition A - Left Box */}
      <div className="PartitionA">
        {/* Consultant  */}
        <div className="PartitionA-SectionA Header-Box">
          <h1 className="Header-Box-Title2">Team Consultant</h1>
          <p>Tan Ah Lim, Micheal Johnson</p>
        </div>

        {/* Nurse  */}
        <div className="PartitionA-SectionB Header-Box">
          <h1 className="Header-Box-Title2">Nurse</h1>
          <p>Juliana Binte Mohammed Kassim</p>
        </div>

        {/* Language  */}
        <div className="PartitionA-SectionC">
          <div className="Language-Content">
            <h1>Mandarin</h1>
          </div>
        </div>

        {/* Patient Details - in Icon */}
        <div className="PartitionA-SectionD">
          <div className="PatientIcon">
            <img src={Picon1} alt="Patient icon" />
          </div>
          <div className="PatientIcon">
            <img src={Picon2} alt="Patient icon" />
          </div>
          <div className="PatientIcon">
            <img src={Picon3} alt="Patient icon" />
          </div>
        </div>

        {/* EFF and LOS  */}
        <div className="PartitionA-SectionE">
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
            {/* ICONS  */}
            <img
              className="PcautionIconImg"
              src={PcautioniconR}
              alt="Precaution icon"
            />
            <img
              className="PcautionIconImg"
              src={PcautioniconG}
              alt="Precaution icon"
            />
            <img
              className="PcautionIconImg"
              src={PcautioniconY}
              alt="Precaution icon"
            />
            <img
              className="PcautionIconImg"
              src={PcautioniconP}
              alt="Precaution icon"
            />

            {/* <img className="PcautionIconImg" src={PcautioniconR} alt="Precaution icon" />
            <img className="PcautionIconImg" src={PcautioniconR} alt="Precaution icon" />
            <img className="PcautionIconImg" src={PcautioniconR} alt="Precaution icon" />
            <img className="PcautionIconImg" src={PcautioniconR} alt="Precaution icon" /> */}
          </div>
        </div>

        {/* Nutritions  */}
        <div className="PartitionB-SectionB Header-Box Mtop">
          <h1 className="Header-Box-Title">Nutritions</h1>
          <div className="SubContent">
            <div className="Box-Content">
              <h1>Moderately Thick</h1>
            </div>
            <div className="Box-Content">
              <h1>Transitional Feeding</h1>
            </div>
            <div className="Box-Content">
              <h1>Therapeutic</h1>
            </div>
            <div className="Box-Content">
              <h1>Soft & Bite Size</h1>
            </div>
          </div>
        </div>

        {/* Mobility  */}
        <div className="PartitionB-SectionB Header-Box Mtop">
          <h1 className="Header-Box-Title">Mobility</h1>
          <div className="SubContent-Image">
            <div className="Box-Content-image">
              <img src={Micon} alt="Patient icon" />
            </div>
            <div className="Box-Content-image">
              <img src={Micon} alt="Patient icon" />
            </div>
            <div className="Box-Content-image">
              <img src={Micon} alt="Patient icon" />
            </div>
            {/* <div className="Box-Content-image">
              <img src={Micon} alt="Patient icon" />
            </div> */}
          </div>
        </div>

        {/* Care instructions  */}
        <div className="PartitionB-SectionB Header-Box Mtop">
          <h1 className="Header-Box-Title">Care Instructions</h1>
          <div className="SubContent2">
            <div className="Box-Content2">
              <h1>Patient has injured hand</h1>
            </div>
            <div className="Box-Content2">
              <h1>Take good care of patient</h1>
            </div>
            <div className="Box-Content2">
              <h1>Patient has injured hand</h1>
            </div>

            <div className="Box-Content2">
              <h1>Take good care of patient</h1>
            </div>
            <div className="Box-Content2">
              <h1>Patient has injured hand</h1>
            </div>
            <div className="Box-Content2">
              <h1>Take good care of patient</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
