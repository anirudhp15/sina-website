import React, { useState, useEffect } from "react";
import artistImage from "/Users/anipotts/Desktop/portfolio_website/sina-website/src/pics/hero.JPG";
import "../index.css";
import Navbar from "./Navbar";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen bg-black">
      <img
        src={artistImage}
        alt="Artist"
        className="absolute inset-0 object-cover w-full h-full opacity-90"
        style={{ border: "20px solid white" }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center p-5 text-center text-white bg-black bg-opacity-0 rounded-lg">
        <h1
          className={`mb-4 text-6xl font-bold md:text-8xl ${
            animate ? "fadeIn" : ""
          }`}
        >
          SINA
        </h1>
        <p className={`mb-6 text-md md:text-xl ${animate ? "fadeIn" : ""}`}>
          Issues. Out Now.
        </p>
      </div>
    </div>
  );
};

export default Hero;
