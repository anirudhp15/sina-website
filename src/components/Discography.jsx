import React from "react";
import whatwelost from "/Users/anipotts/Desktop/portfolio_website/sina-website/src/pics/whatwelost.jpg";
import nowornever from "/Users/anipotts/Desktop/portfolio_website/sina-website/src/pics/nowornever.jpg";
import readmymind from "/Users/anipotts/Desktop/portfolio_website/sina-website/src/pics/readmymind.jpg";
import theswitch from "/Users/anipotts/Desktop/portfolio_website/sina-website/src/pics/theswitch.jpg";
import pic from "/Users/anipotts/Desktop/portfolio_website/sina-website/src/pics/logo.jpg";

const singles = [
  {
    name: "Eyes Wide Open",
    image: pic,
    spotifyEmbedUrl:
      "https://open.spotify.com/embed/album/17bHQC5v1KCLKE2iK09H2D?utm_source=generator",
  },
  {
    name: "What We Lost",
    image: whatwelost,
    spotifyEmbedUrl:
      "https://open.spotify.com/embed/album/04QKHSwW1yNkZtuz7T2W6T?utm_source=generator",
  },
  {
    name: "Read My Mind",
    image: readmymind,
    spotifyEmbedUrl:
      "https://open.spotify.com/embed/album/2nX7CyDQ6Q2fUlYDOwS7PF?utm_source=generator",
  },
  {
    name: "The Switch",
    image: theswitch,
    spotifyEmbedUrl:
      "https://open.spotify.com/embed/album/5FutaKwUhZt3j6UXaQWfz6?utm_source=generator",
  },
  {
    name: "Its Not Me",
    image: pic,
    spotifyEmbedUrl:
      "https://open.spotify.com/embed/album/5FutaKwUhZt3j6UXaQWfz6?utm_source=generator",
  },
  {
    name: "Now or Never",
    image: nowornever,
    spotifyEmbedUrl:
      "https://open.spotify.com/embed/album/5FutaKwUhZt3j6UXaQWfz6?utm_source=generator",
  },
];

const Discography = () => {
  return (
    <div
      id="discography"
      className="flex flex-col justify-center items-center h-screen px-3 bg-white border-[10px] border-white bg-opacity-90"
    >
      <div className="grid w-5/6 gap-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <SingleItem single={singles[0]} />
          </div>
          <div>
            <SingleItem single={singles[1]} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <SingleItem single={singles[2]} />
          </div>
          <div className="flex items-center justify-center bg-black border-[10px] border-white border-opacity-90 rounded-xl shadow overflow-hidden">
            <h2 className="text-4xl font-bold text-white">DISCOGRAPHY</h2>
          </div>
          <div>
            <SingleItem single={singles[3]} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <SingleItem single={singles[4]} />
          </div>
          <div className="col-span-2">
            <SingleItem single={singles[5]} />
          </div>
        </div>
      </div>
    </div>
  );
};

const SingleItem = ({ single }) => (
  <div className="bg-black border-[10px] border-white border-opacity-0 shadow overflow-hidden">
    <img
      src={single.image}
      alt={`Cover of ${single.name}`}
      className="object-cover w-full h-72"
    />
  </div>
);

export default Discography;
