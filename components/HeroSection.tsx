import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full flex justify-between items-center  ">
      <div className="max-w-[1280px] flex flex-col  mx-auto w-full p-4 ">
        <div className="flex items-center justify-between">
          <h1 className="text-8xl font-bold text-gray-800 w-7xl">
            You have an{" "}
            <span className="text-red-300">
              Idea <br />
            </span>
            we make it <span className=" text-red-500">Live</span>
          </h1>

          <p className=" text-2xl text-gray-400 font-bold flex items-center justify-center w-2/4">
            We listen to you to develop customized solutions that work
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
