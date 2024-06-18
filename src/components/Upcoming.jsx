import React from "react";

const Upcoming = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black border-[20px] border-white">
      <div className="flex flex-col items-center justify-center w-full h-full p-5 bg-[#dd8348] bg-opacity-90 rounded-lg">
        <h2 className="mb-4 text-5xl font-bold text-white fadeIn">Upcoming</h2>
        <p className="mb-4 text-2xl font-semibold text-white delay-500 fadeIn">
          Stay Tuned
        </p>
        <div className="flex justify-center w-full">
          <div className="w-full max-w-screen-md p-8 bg-black border-[20px] border-white rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-center text-white">
              Coming Soon
            </h3>
            <p className="mt-4 text-xl text-center text-white">
              Exciting new releases are on the way! Keep an eye out for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
