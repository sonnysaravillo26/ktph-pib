// MainContent.js
import React from "react";
import "./MainContent.css";

function MainContent() {
  return (
    <section className="main-content">
      {/* Partition A - Left Box */}
      <div className="PartitionA"> 
      {/* <h1>My Left content Box</h1> */}
        <div className="PartitionA-HeaderA">
          </div>
      </div>

      {/* Partition B - Right Box */}
      <div className="PartitionB">
        <h1>My right content Box</h1>
      </div>
    </section>
  );
}

export default MainContent;
