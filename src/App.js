import React from "react";
import "./index.css"; // or the path to your Tailwind CSS file
import Hero from "./components/Hero";
import ComingSoon from "./components/ComingSoon";
import Discography from "./components/Discography";
import Biography from "./components/Biography";
import Merch from "./components/Merch";
import Upcoming from "./components/Upcoming";

function App() {
  return (
    <div className="scroll-container">
      <div className="scroll-section">
        <Hero />
      </div>
      <div className="scroll-section">
        <ComingSoon />
      </div>
      {/* Add other components as scroll sections if needed */}
    </div>
  );
}

export default App;
