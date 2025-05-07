import React from "react";
import { heroStatics } from "./DataItems";
import ContactImage from "../assets/images/contact-image.png";
import Image from "next/image";

const ContactSection = () => {
  return (
    <div className="w-full flex justify-between items-center bg-gray-50 ">
      <div className="max-w-[1280px] flex flex-col  mx-auto w-full p-4 ">
        <div className="flex items-center justify-between w-full">
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold md:w-2/3 w-full py-12 intersect-once intersect:motion-preset-slide-up">
            Let’s talk and build a great product together
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-center w-full md:gap-12 gap-2">
          <div className="flex flex-col md:w-1/2 w-full justify-start">
            <form action="flex flex-col gap-4 justify-start items-start  w-full ">
              <input
                type="text"
                placeholder="Name"
                className=" border-2 border-gray-900 p-2 rounded-md w-full mb-4 placeholder:text-gray-900"
              />
              <input
                type="text"
                placeholder="Password"
                className=" border-2 border-gray-900 p-2 rounded-md w-full mb-4 placeholder:text-gray-900"
              />
              <textarea
                name=""
                id=""
                className="h-28 border-2 border-gray-900 p-2 rounded-md w-full mb-4 placeholder:text-gray-900"
              ></textarea>
            </form>
            <div className="flex flex-col gap-4 justify-center w-full">
              <p className="text-gray-500  items-center justify-start w-full gap-2 md:gap-4">
                <input type="checkbox" className="mr-2" />
                By sending a form you agree with your information being stored
                by us in relation to dealing with your inquiry. Please, have a
                look at our
                <span className="font-bold underline text-black">
                  <a href="#"> Privaciy Policy</a>
                </span>
              </p>
              <button className="bg-gray-900 md:px-8 px-4 md:py-4 py-2 font-bold md:text-2xl flex items-center justify-center w-full md:w-[200px] text-white text-center">
                Contact Us
              </button>
            </div>
          </div>
          <div className="hidden">
            <div className="motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md flex md:flex-col mt-4 gap-4 bg-gray-900 text-white">
              {heroStatics.map((item, index) => {
                return (
                  <div
                    className="flex flex-wrap flex-col md:mb-4 justify-between items-start w-full "
                    key={index}
                  >
                    <h1 className=" md:text-4xl font-bold text-2xl">
                      {item.title}
                    </h1>
                    <p className=" md:text-2xl text-gray-300 md:py-4 ">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-2/5 flex items-center justify-end relative">
            <Image src={ContactImage} alt="contact image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
