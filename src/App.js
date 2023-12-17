import React, { useState } from "react";
import "./App.css";
import Header from "../src/components/Header/Header";
import MainContent from "../src/components/MainContent/MainContent";
import Footer from "../src/components/Footer/Footer";
import MediaSection from "../src/components/Media/MediaSection";
import FullMediaSection from "./components/Media/FullMediaSection";

function App() {
  const [isMediaSectionVisible, setIsMediaSection] = useState(false);
  const [isFullMediaSectionVisible, setIsFullMediaSection] = useState(false);

  const toggleMediaSectionVisibility = () => {
    setIsMediaSection(!isMediaSectionVisible);
  };
  const toggleFullMediaSectionVisibility = () => {
    setIsFullMediaSection(!isFullMediaSectionVisible);
  };

  return (
    <div className="App"> 
      {/* ### Media Controller ### */}
      <div className="Meida-Controller">
        <button onClick={toggleFullMediaSectionVisibility}>
          {isFullMediaSectionVisible ? "Hide Full-Media" : "Show Full-Media"}
        </button>
        <button onClick={toggleMediaSectionVisibility}>
          {isMediaSectionVisible ? "Hide Media" : "Show Media"}
        </button>
      </div> 
      {/* ### END - Media Controller ### */}

      {isMediaSectionVisible && <MediaSection />}
      {isFullMediaSectionVisible && <FullMediaSection />}

      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
