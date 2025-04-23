import React from "react";
import { heroStatics } from "./DataItems";
import heroImage from "../assets/images/hero-image.jpg";
import Image from "next/image";
import { CircleChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-full flex justify-between items-center  ">
      <div className="max-w-[1280px] flex flex-col  mx-auto w-full p-4 ">
        <div className="flex items-center justify-between">
          <h1 className="text-8xl font-extrabold text-gray-800 w-7xl">
            You have an{" "}
            <span className="text-red-300">
              Idea <br />
            </span>
            we make it <span className=" text-red-500">Live</span>
          </h1>

          <p className=" text-2xl text-gray-400  flex items-center  self-start justify-end w-2/4">
            We listen to you carefully to develop customized solutions that
            work.
          </p>
        </div>

        <div className="flex items-center justify-between w-full mt-12">
          <div className="">
            {heroStatics.map((item, index) => {
              return (
                <div className="flex flex-col mb-4" key={index}>
                  <h1 className=" text-4xl font-bold">{item.title}</h1>
                  <p className=" text-2xl text-gray-400 py-4">
                    {item.description}
                  </p>
                </div>
              );
            })}
            <div className="flex flex-col items-center justify-center mt-8 ">
              <p className="">scroll down</p>
              <CircleChevronDown size={50} className="" />
            </div>
          </div>
          <div className="flex items-center justify-end w-full">
            <Image
              src={heroImage}
              alt="https://www.hawisoftware.com/"
              className="flex w-[90%] items-center justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
