// ComingSoon.js
import React, { useState, useEffect } from "react";
import placeholderImage from "/Users/anipotts/Desktop/portfolio_website/sina-website/src/pics/comingsoon2.jpg";
import "../index.css";

const ComingSoon = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen bg-black scroll-section">
      <div className="absolute inset-0 w-full h-full hero-image">
        <img
          src={placeholderImage}
          alt="Placeholder"
          className="absolute inset-0 object-cover w-full h-full opacity-90"
          style={{
            borderTop: "10px solid white",
            borderLeft: "20px solid white",
            borderRight: "20px solid white",
            borderBottom: "10px solid white",
          }}
        />
        <div className="absolute inset-0 coming-soon-overlay"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center p-5 text-center text-white bg-black bg-opacity-0 rounded-lg">
        <p
          className={`mb-6 text-md md:text-xl hero-subtitle ${
            animate ? "fadeIn" : ""
          }`}
        >
          More Coming Soon.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
