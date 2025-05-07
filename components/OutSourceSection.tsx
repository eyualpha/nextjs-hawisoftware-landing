import React from "react";
import withUsArrowIcon from "../assets/images/arrow.png";
import outSourceImage from "../assets/images/out-source-image.png";
import Image from "next/image";
import { CalendarCheck } from "lucide-react";

const OutSourceSection = () => {
  return (
    <div className="w-full flex justify-between items-center  ">
      <div className="max-w-[1280px] flex flex-col  mx-auto w-full px-4 py-8 ">
        {/* <div className="flex items-center justify-between w-full">
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold md:w-1/2 w-full py-12 intersect-once intersect:motion-preset-slide-up">
            <span className="text-red-400">Outsource </span>
            Your Projects
          </h1>
        </div> */}
        <div className="flex items-center w-full lg:relative flex-col md:flex-row">
          <div className="">
            <Image src={outSourceImage} alt="out source image" className="" />
          </div>
          <div className="flex flex-col md:gap-8 gap-4 justify-end md:items-end md:mb-4 mb-2 intersect-once intersect:motion-preset-slide-up w-full md:max-w-[400px] h-full">
            <h1 className="font-bold text-3xl text-blue-500">
              Do you want to develop a scalable Product?
            </h1>
            <h1 className="font-bold text-3xl text-red-500">
              Do you need an Outsourced Developer or a remote team?
            </h1>
            <h1 className="font-bold text-3xl text-green-500">
              Do you have a technical dilemma?
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-between  mx-auto w-full">
          <h1 className="hidden md:flex lg:text-6xl md:text-5xl text-4xl font-bold md:w-1/2 md:absolute left-4 py-12 intersect-once intersect:motion-preset-slide-up">
            Let’s have a call and find the best solution for your project.
          </h1>
          <div className="w-full flex items-center justify-center md:justify-end ">
            <button className="flex items cenetr gap-4 border-2 rounded font-bold md:py-4 md:px-8 px-4 py-2 text-2xl hover:cursor-pointer">
              <CalendarCheck size={30} /> <p>Book a meeting</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutSourceSection;
