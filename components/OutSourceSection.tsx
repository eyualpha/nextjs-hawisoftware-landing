import React from "react";
import outSourceImage from "../assets/images/contactUsImage.png";
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
          <div className="flex flex-col md:gap-4 gap-2 justify-end md:items-end md:mb-4 mb-2 intersect-once intersect:motion-preset-slide-up w-full md:max-w-[400px] h-full">
            <h1 className="font-bold md:text-3xl text-xl text-blue-500">
              Do you want to develop a scalable Product?
            </h1>
            <div className="w-8 ">
              <hr />
            </div>
            <h1 className="font-bold md:text-3xl text-xl text-red-500">
              Do you need an Outsourced Developer or a remote team?
            </h1>
            <div className="w-8 ">
              <hr />
            </div>
            <h1 className="font-bold md:text-3xl text-xl text-green-500">
              Do you have a technical dilemma?
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between  mx-auto w-full relative">
          <h1 className=" md:flex lg:text-6xl md:text-5xl text-3xl font-bold md:w-1/2 md:absolute lg:left-24 py-4 intersect-once intersect:motion-preset-slide-up">
            Let’s have a call and find the best solution for your project.
          </h1>
          <div className="w-full flex items-center justify-center md:justify-end ">
            <button className=" w-full md:w-auto flex items-cenetr justify-center gap-4 md:border-2 border rounded md:font-bold md:py-4 md:px-8 px-2 py-1 md:text-2xl md:mt-8 mt-2 hover:cursor-pointer hover:text-red-400">
              <CalendarCheck size={30} />{" "}
              <p className="font-bold text-xl">Book a meeting</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutSourceSection;
