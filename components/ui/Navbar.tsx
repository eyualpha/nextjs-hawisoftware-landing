"use client";
import Logo from "../Logo";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { NavItems } from "../NavItems";

const Navbar = () => {
  const [showService, setShowService] = useState(false);
  return (
    <div className="w-full flex justify-between items-center  ">
      <div className="max-w-[1280px] flex flex-col  mx-auto w-full p-4 ">
        <div className="flex items-start  gap-4 border-b border-b-gray-300 text-sm">
          Need Help ? Talk to an Expert
          <span className="hover:text-red-500 duration-300 text-black">
            +251987654321
          </span>
        </div>

        <div className="flex items-center justify-between w-full h-[40px] mt-2">
          <Logo />
          <div className=" flex items-center gap-4 text-sm ">
            {NavItems.map((item: any, index: number) => {
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
                    <div className=" absolute bg-white shadow-lg rounded-md mt-50">
                      {item.list.map((subItem: any, subIndex: number) => {
                        return (
                          <div
                            key={subIndex}
                            className="px-4 py-2 hover:bg-gray-200"
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
      </div>
    </div>
  );
};

export default Navbar;
