import React, { useState, useEffect } from "react";
import artistImage1 from "/Users/anipotts/Desktop/portfolio_website/sina-website/src/pics/11.JPG";
import artistImage2 from "/Users/anipotts/Desktop/portfolio_website/sina-website/src/pics/12.JPG";
import artistImage3 from "/Users/anipotts/Desktop/portfolio_website/sina-website/src/pics/13.JPG";
import artistImage4 from "/Users/anipotts/Desktop/portfolio_website/sina-website/src/pics/21.JPG";
import artistImage5 from "/Users/anipotts/Desktop/portfolio_website/sina-website/src/pics/22.JPG";
import artistImage6 from "/Users/anipotts/Desktop/portfolio_website/sina-website/src/pics/23.JPG";
import artistImage7 from "/Users/anipotts/Desktop/portfolio_website/sina-website/src/pics/31.JPG";
import artistImage8 from "/Users/anipotts/Desktop/portfolio_website/sina-website/src/pics/32.JPG";
import artistImage9 from "/Users/anipotts/Desktop/portfolio_website/sina-website/src/pics/33.JPG";
import "../index.css";

const Biography = () => {
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [currentSlide3, setCurrentSlide3] = useState(0);

  const images1 = [artistImage1, artistImage4, artistImage7];
  const images2 = [artistImage2, artistImage5, artistImage8];
  const images3 = [artistImage3, artistImage6, artistImage9];

  useEffect(() => {
    const intervalId1 = setInterval(() => {
      setCurrentSlide1((prevSlide) =>
        prevSlide === images1.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    const intervalId2 = setInterval(() => {
      setCurrentSlide2((prevSlide) =>
        prevSlide === images2.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    const intervalId3 = setInterval(() => {
      setCurrentSlide3((prevSlide) =>
        prevSlide === images3.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
      clearInterval(intervalId3);
    };
  }, [images1.length, images2.length, images3.length]);

  return (
    <div
      id="biography"
      className="h-screen bg-[#A55F33] border-[10px] border-white border-opacity-90 flex items-center justify-center"
    >
      <div className="relative z-10 flex items-stretch w-full h-full">
        <div className="flex flex-col items-center justify-center h-full lg:w-1/3">
          {images1.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Siya Wadhwa"
              className={`object-cover h-full w-full ${
                index === currentSlide1 ? "block" : "hidden"
              }`}
              style={{
                borderRadius: "0",
                border: "10px solid rgba(255, 255, 255, 0.9)",
              }}
            />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center h-full lg:w-1/3">
          {images2.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Siya Wadhwa"
              className={`object-cover h-full w-full ${
                index === currentSlide2 ? "block" : "hidden"
              }`}
              style={{
                borderRadius: "0",
                border: "10px solid rgba(255, 255, 255, 0.9)",
              }}
            />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center h-full lg:w-1/3">
          {images3.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Siya Wadhwa"
              className={`object-cover h-full w-full ${
                index === currentSlide3 ? "block" : "hidden"
              }`}
              style={{
                borderRadius: "0",
                border: "10px solid rgba(255, 255, 255, 0.9)",
              }}
            />
          ))}
        </div>
        <div
          className="absolute z-20 flex items-center justify-center w-5/6 px-6 py-8 mx-auto text-white bg-black bg-opacity-50 rounded-lg lg:px-12 lg:py-16"
          style={{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            margin: "auto",
            maxWidth: "800px",
            height: "fit-content",
          }}
        >
          <div
            className="text-center lg:text-left"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            <h2 className="pb-4 text-4xl font-semibold text-center text-white dongle lg:text-5xl">
              BIO
            </h2>
            <p className="pb-4 text-lg leading-relaxed text-white font-extralight lg:pb-4 lg:text-xl dongle">
              Siya Wadhwa, known in music as{" "}
              <span className="font-bold">SINA</span>, comes from Long Island,
              New York and is currently based in New York City. She has been
              singing her whole life from her parent’s living room, to high
              school choir, to Manhattan venues. Siya started writing music at
              the age of 14 mainly ranging from pop and R&B. When she began
              college at New York University studying music business, she
              released her first song called{" "}
              <span className="font-bold">“It’s Not Me”</span> in April of 2023
              and since then, she’s released many other singles. Furthermore,
              Siya has notably performed at venues such as Mercury Lounge,
              Sounds of Brazil, Rockwood Music Hall, and many more. Stay tuned
              for her future releases, merch drops, and shows!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
