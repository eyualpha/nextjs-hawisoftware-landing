"use client";
import Logo from "../Logo";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { NavItems } from "../DataItems";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [showService, setShowService] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  return (
    <div className="w-full flex justify-between items-center  top-0 z-50 bg-red-50 ">
      <div className="max-w-[1280px] flex flex-col  mx-auto w-full px-4 pt-4">
        <div className="hidden md:flex items-start  gap-4 border-b border-b-gray-300 text-sm pb-2">
          Need Help ? Talk to an Expert
          <span className="hover:text-red-500 duration-300 text-black">
            <a href="tel:+251900276031">+251900276031</a>
          </span>
        </div>
        <div className="flex items-center justify-between w-full h-[40px] my-4 z-20">
          <Logo />
          <div
            className="flex md:hidden"
            onClick={() => setShowMobileDropdown(!showMobileDropdown)}
          >
            {showMobileDropdown ? <X /> : <Menu />}
          </div>

          <div className="hidden md:flex items-center gap-4  ">
            {NavItems.map((item, index) => {
              return (
                <div
                  className=" cursor-pointer flex items-center"
                  key={index}
                  onClick={() => item.list && setShowService(!showService)}
                >
                  {item.name}
                  {item.icon && (
                    <span className="flex items-center justify-center ml-1 mt-1">
                      <ChevronDown size={15} />
                    </span>
                  )}
                  {item.list && item.list.length > 0 && showService && (
                    <div className=" bg-white absolute shadow-lg rounded-md mt-50 ">
                      {item.list.map((subItem, subIndex) => {
                        return (
                          <div
                            key={subIndex}
                            className="px-4 py-2 hover:bg-red-100 text-sm"
                          >
                            {subItem.name}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* mobile nav border */}
        <div className="w-full  border-gray-300 border-b flex md:hidden z-20"></div>
        {/* mobile dorpdown */}
        {showMobileDropdown && (
          <div className="flex flex-col items-center gap-4 text-xl md:hidden w-[300px] h-full absolute bg-red-50 top-20 left-0 z-10 p-4 motion-preset-slide-right duration-300">
            {NavItems.map((item, index) => {
              return (
                <div
                  className=" cursor-pointer flex items-center hover:bg-red-100 w-full h-[50px] justify-center"
                  key={index}
                  onClick={() => item.list && setShowService(!showService)}
                >
                  {item.name}
                  {item.icon && (
                    <span className="flex items-center justify-center ml-1 mt-1">
                      <ChevronDown size={30} />
                    </span>
                  )}
                  {item.list && item.list.length > 0 && showService && (
                    <div className=" absolute bg-white shadow-lg rounded-md mt-50 w-full">
                      {item.list.map((subItem, subIndex) => {
                        return (
                          <div
                            key={subIndex}
                            className="px-4 py-2 hover:bg-red-50 text-sm"
                          >
                            {subItem.name}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
