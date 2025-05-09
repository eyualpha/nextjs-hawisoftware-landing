import React from "react";
import { heroStatics } from "./DataItems";
import heroImage from "../assets/images/Background1.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full flex justify-between items-center  ">
      <div className="max-w-[1280px] flex flex-col  mx-auto w-full p-4 ">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className=" w-full text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-800 md:w-7xl motion-preset-fade motion-duration-2000">
            Making{" "}
            <span className="text-red-300">
              Better <br />
            </span>
            <span className=" text-red-700">Future</span>
          </h1>

          <p className="lg:text-3xl text-xl text-gray-400 mt-4 flex items-center  justify-center md:justify-end md:w-2/4 w-full">
            Engineering seamless digital experiences for you.
          </p>
        </div>

        <div className="flex md:flex-row flex-col-reverse items-center justify-between w-full mt-12">
          <div className="motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md flex flex-col sm:flex-row md:flex-col sm:w-full mt-4 gap-4 md:w-auto">
            {heroStatics.map((item, index) => {
              return (
                <div
                  className="flex  flex-col md:mb-4 md:justify-between  sm:items-start items-center sm:gap-2 w-full  "
                  key={index}
                >
                  <h1 className=" md:text-3xl lg:text-4xl font-bold text-2xl">
                    {item.title}
                  </h1>
                  <p className=" md:text-xl lg:text-2xl text-gray-400 md:py-2 lg:py-4 ">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-end w-full relative">
            {/* <div className=" absolute md:w-[90%] bg-red-950 opacity-40 w-full h-full"></div> */}
            <Image
              src={heroImage}
              alt="https://www.hawisoftware.com/"
              className="flex md:w-[90%] items-center justify-center w-[100%]"
            />
          </div>
        </div>
        {/* <div className="flex flex-col items-center md:self-start  justify-center mt-8 ">
          <p className="">scroll down</p>
          <CircleChevronDown size={50} className="motion-translate-y-loop-25" />
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
