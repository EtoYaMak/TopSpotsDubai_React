import React from "react";
import { HiOutlineTicket } from "react-icons/hi2";
import { BiGift } from "react-icons/bi";
import { TbBed } from "react-icons/tb";
import { GiKnifeFork } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { GrMapLocation } from "react-icons/gr";
function NavHero({ navSwitch, handleNavSwitch }) {
  return (
    <div className="h-fit max-w-[960px] font-Montserrat rounded-xl  z-10 relative flex overflow-x-auto p-2 -mt-2 bg-white gap-[4px] shadow-[0px_2px_2px_rgb(0,0,0,0.41)]">
      <button
        className="flex-none w-1/2 md:w-36 lg:w-36 min-w-[144px] h-full py-6 text-black font-semibold text-[0.9em] uppercase hover:opacity-70 duration-200 ease-in-out rounded-lg focus:shadow-[3px_5px_5px_rgb(6,182,212,0.71)] focus:text-cyan-500  shadow-[2px_1px_2px_rgb(0,0,0,0.1)] "
        active={navSwitch === "activities"}
        onClick={() => handleNavSwitch("activities")}
      >
        <HiOutlineTicket size={44} className="-rotate-45 mx-auto mb-1" />
        Activities
      </button>
      <button
        className="flex-none w-1/2  md:w-36 lg:w-36 min-w-[144px] h-full py-6 text-black font-semibold text-[0.9em] uppercase hover:opacity-70 duration-200 ease-in-out rounded-lg focus:shadow-[3px_5px_5px_rgb(6,182,212,0.71)] focus:text-cyan-500   shadow-[2px_1px_2px_rgb(0,0,0,0.1)]"
        active={navSwitch === "gifts"}
        onClick={() => handleNavSwitch("gifts")}
      >
        <BiGift size={44} className=" mx-auto mb-1" />
        GIFTS
      </button>
      <button
        className="flex-none w-1/2  md:w-36 lg:w-36 min-w-[144px] h-full py-6 text-black font-semibold text-[0.9em] uppercase hover:opacity-70 duration-200 ease-in-out rounded-lg focus:shadow-[3px_5px_5px_rgb(6,182,212,0.71)] focus:text-cyan-500   shadow-[2px_1px_2px_rgb(0,0,0,0.1)]"
        active={navSwitch === "hotels"}
        onClick={() => handleNavSwitch("hotels")}
      >
        <TbBed size={44} className=" mx-auto mb-1" />
        Hotels
      </button>
      <button
        className="flex-none w-1/2  md:w-36 lg:w-36 min-w-[144px] h-full py-6 text-black font-semibold text-[0.9em] uppercase hover:opacity-70 duration-200 ease-in-out rounded-lg focus:shadow-[3px_5px_5px_rgb(6,182,212,0.71)] focus:text-cyan-500   shadow-[2px_1px_2px_rgb(0,0,0,0.1)]"
        active={navSwitch === "dining"}
        onClick={() => handleNavSwitch("dining")}
      >
        <GiKnifeFork size={44} className=" mx-auto mb-1" />
        DINING
      </button>
      <button
        className="flex-none w-1/2  md:w-36 lg:w-36 min-w-[144px] h-full py-6 text-black font-semibold text-[0.9em] uppercase hover:opacity-70 duration-200 ease-in-out rounded-lg focus:shadow-[3px_5px_5px_rgb(6,182,212,0.71)] focus:text-cyan-500   shadow-[2px_1px_2px_rgb(0,0,0,0.1)]"
        active={navSwitch === "places"}
        onClick={() => handleNavSwitch("places")}
      >
        <GrMapLocation size={44} className=" mx-auto mb-1" />
        PLACES
      </button>
      <button
        className="flex-none w-1/2  md:w-36 lg:w-36 min-w-[144px] h-full py-6 text-black font-semibold text-[0.9em] uppercase hover:opacity-70 duration-200 ease-in-out rounded-lg focus:shadow-[3px_5px_5px_rgb(6,182,212,0.71)] focus:text-cyan-500   shadow-[2px_1px_2px_rgb(0,0,0,0.1)]"
        active={navSwitch === "events"}
        onClick={() => handleNavSwitch("events")}
      >
        <SlCalender size={44} className=" mx-auto mb-1" />
        EVENTS
      </button>
    </div>
  );
}

export default NavHero;
