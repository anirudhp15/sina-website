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
    <div className="relative flex items-center justify-center h-screen bg-black scroll-section">
      <div className="absolute inset-0 w-full h-full hero-image">
        <img
          src={artistImage}
          alt="Artist"
          className="absolute inset-0 object-cover w-full h-full opacity-90"
          style={{
            borderTop: "10px solid white",
            borderLeft: "20px solid white",
            borderRight: "20px solid white",
            borderBottom: "10px solid white",
          }}
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center p-5 text-center text-white bg-black bg-opacity-0 rounded-lg">
        <h1
          className={`mb-4 text-6xl font-bold md:text-8xl hero-title ${
            animate ? "fadeIn" : ""
          }`}
        >
          SINA
        </h1>
        <p
          className={`mb-6 text-md md:text-xl hero-subtitle ${
            animate ? "fadeIn" : ""
          }`}
        >
          <a
            href="https://open.spotify.com/track/6jqxzVWtpkAPe8e7vAdLHs?si=8610b793f71941f4"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse"
          >
            <span className="transition-all duration-150 cursor-pointer hover:text-red-500">
              Issues.
            </span>
          </a>{" "}
          Out Now.
        </p>
      </div>
    </div>
  );
};

export default Hero;
