import React from "react";
import Logo from "./Logo";

const AboutMainSection = () => {
  return (
    <div className="w-full flex justify-between items-center  ">
      <div className="max-w-[1280px] flex flex-col  mx-auto w-full p-4 ">
        {/* <div className="flex items-center justify-between w-full">
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold md:w-1/2 w-full py-12 intersect-once intersect:motion-preset-slide-up">
            <span className="text-red-400">Who </span>
            We Are?
          </h1>
        </div> */}
        <div className="flex items-center justify-between w-full">
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold md:w-1/2 w-full py-12 intersect-once intersect:motion-preset-slide-up">
            Hawi Software
            <span className="text-red-400"> solution story</span>
          </h1>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="w-1/2">
            <p className="text-xl text-gray-500">
              Hawi Software Solutions (HSS) is an emerging software firm located
              in Adama, Ethiopia producing quality software for its clients. It
              is established to steer customers through the next generation of
              business innovation powered by technology with state-of-the-art
              business automation, software development and consultation
              services. HSS is powered by highly skilled professionals and
              developers, and equipped with the latest managerial and IT tools
              and works round the-clock to assure the timely delivery of your
              applications with the highest quality.
            </p>
          </div>
          <div className="flex items-center justify-end">
            <Logo />
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold md:w-1/2 w-full py-12 intersect-once intersect:motion-preset-slide-up">
            Hawi Software
            <span className="text-red-400"> solution story</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutMainSection;
