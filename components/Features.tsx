import React from "react";
import { FeaturesData } from "./DataItems";
import withUsArrowIcon from "../assets/images/arrow.png";
import Image from "next/image";

const Features = () => {
  return (
    <div className="w-full flex justify-between items-center  ">
      <div className="max-w-[1280px] flex flex-col  mx-auto w-full p-4 ">
        <div className="flex items-center justify-between w-full">
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold md:w-1/2 w-full py-12 intersect-once intersect:motion-preset-slide-up">
            Building a{" "}
            <span className="text-red-400">realiable solutions </span>
            in transparent way.
          </h1>
          <div className="">
            <Image
              src={withUsArrowIcon}
              alt="develop your product with us"
              className=" rounded-full rotate-180 sm:flex hidden intersect-once intersect:motion-preset-slide-up"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 w-full md:gap-8 gap-4">
          {FeaturesData.map((item, index) => {
            return (
              <div
                className="ease-in-out intersect:motion-preset-slide-up motion-delay-200"
                key={index}
              >
                <div className="flex flex-col md:gap-4 gap-2 justify-start md:mb-4 mb-2 intersect-once intersect:motion-preset-slide-up">
                  <p className="text-red-400">
                    {item.icon && <item.icon size={40} className="w-[30px]" />}
                  </p>
                  <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold ">
                    {item.title}
                  </h1>
                </div>
                <p className="md:text-xl text-gray-500">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
