import React from "react";
import { serviceData } from "./DataItems";

const ServiceSection = () => {
  return (
    <div className="w-full flex justify-between items-center py-8 ">
      <div className="max-w-[1280px] flex flex-col  mx-auto w-full px-4 md:pt-24 ">
        <div className="flex flex-col md:flex-row items-start gap-2 md:items-start md:justify-between w-full">
          {serviceData.map((item, index) => {
            return (
              <div className="flex flex-col gap-2 md:w-1/4 " key={index}>
                <h1 className="font-bold text-4xl">{item.title}</h1>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
