import React from "react";
import { heroStatics } from "./DataItems";
import heroImage from "../assets/images/hero-image.jpg";
import Image from "next/image";
import { CircleChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-full flex justify-between items-center  ">
      <div className="max-w-[1280px] flex flex-col  mx-auto w-full p-4 ">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className=" w-full text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-800 md:w-7xl motion-preset-fade motion-duration-2000">
            You have an{" "}
            <span className="text-red-300">
              Idea <br />
            </span>
            we make it <span className=" text-red-500">Live</span>
          </h1>

          <p className="lg:text-2xl text-xl text-gray-400 mt-4 flex items-center justify-center md:justify-end md:w-2/4 w-full">
            We listen to you carefully to develop customized solutions that
            work.
          </p>
        </div>

        <div className="flex md:flex-row flex-col-reverse items-center justify-between w-full mt-12">
          <div className="motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md flex md:flex-col mt-4 gap-4">
            {heroStatics.map((item, index) => {
              return (
                <div
                  className="flex flex-wrap flex-col md:mb-4 justify-between items-start w-full "
                  key={index}
                >
                  <h1 className=" md:text-4xl font-bold text-2xl">
                    {item.title}
                  </h1>
                  <p className=" md:text-2xl text-gray-400 md:py-4 ">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-end w-full">
            <Image
              src={heroImage}
              alt="https://www.hawisoftware.com/"
              className="flex md:w-[90%] items-center justify-center w-[100%]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:self-start  justify-center mt-8 ">
          <p className="">scroll down</p>
          <CircleChevronDown size={50} className="motion-translate-y-loop-25" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
