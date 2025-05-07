import React from "react";
import { TechStackData } from "./DataItems";
import Image from "next/image";

const Techstack = () => {
  return (
    <div className="w-full flex justify-between items-center  ">
      <div className="max-w-[1280px] flex flex-col  mx-auto w-full px-4 py-8 ">
        <div className="w-full flex justify-center">
          <h1 className="lg:text-6xl sm:text-5xl text-4xl font-bold md:w-1/2 w-full md:py-12 py-4 text-center">
            <span className="text-red-400 mb-2 md:mb-4"> Hawi Software</span>{" "}
            got you covered
          </h1>
        </div>
        <div className=" flex w-full flex-wrap gap-4 justify-center">
          {TechStackData.map((item: any, index: number) => {
            return (
              <div
                className="bg-gray-200 md:p-6 p-2 rounded-2xl flex flex-wrap intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100 intersect:motion-rotate-in-180"
                key={index}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  className="md:w-[80px] w-[60px]"
                />
              </div>
            );
          })}
        </div>
        <div className=" flex items-center justify-center mt-8">
          <p className="font-bold md:text-2xl text-xl">
            and many <span className="text-red-400">more...</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Techstack;
