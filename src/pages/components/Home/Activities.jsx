import React, { useState } from "react";
import { MdChevronRight, MdOutlineKeyboardArrowDown } from "react-icons/md";
import DefaultFilterHome from "../Activities/DefaultFilterHome.jsx";
import DesertFilterHome from "../Activities/DesertFilterHome.jsx";
import CityFilterHome from "../Activities/CityFilterHome.jsx";
import SeaFilterHome from "../Activities/SeaFilterHome.jsx";

function Activities() {
  const [filterTab, setFilterTab] = useState("default");
  const handleFilterClick = (tab) => {
    // If the same tab is clicked again, set filterTab to "default"
    if (filterTab === tab) {
      setFilterTab("default");
    } else {
      setFilterTab(tab);
    }
  };
  return (
    <div className="relative w-[90%] rounded-t-xl flex flex-col font-Montserrat mx-auto bg-white top-[4vw] ">
      <h1 className="text-[#f16565] text-[1.3em] md:text-[1.7em] lg:text-[2em] font-extrabold mx-4 w-fit h-fit ">
        Top Activities in Dubai
      </h1>
      <div className="w-full pl-4 pt-4">
        <h1 className="text-cyan-500 font-semibold text-[1em] md:text-[1.4em] lg:text-[1.7em] w-fit s">
          Filter Activity By Type
        </h1>
      </div>
      {/* FILTER TYPE */}
      <div className="w-full flex flex-row justify-center items-center py-[6px] gap-1 sm:gap-4 px-2 ">
        <button
          className={`w-1/3 h-[42px] flex items-center justify-center py-2 rounded-lg text-[14px] font-semibold border-2 ${
            filterTab === "desert"
              ? "border-cyan-500 text-cyan-500"
              : "border-cyan-500 text-black"
          }`}
          onClick={() => handleFilterClick("desert")}
        >
          Desert{" "}
          {filterTab === "desert" ? (
            <MdOutlineKeyboardArrowDown size={24} />
          ) : (
            <MdChevronRight size={24} />
          )}
        </button>
        <button
          className={`w-1/3 flex items-center justify-center py-2 rounded-lg text-[14px] h-[42px] font-semibold border-2 ${
            filterTab === "city"
              ? "border-cyan-500 text-cyan-500"
              : "border-cyan-500 text-black"
          }`}
          onClick={() => handleFilterClick("city")}
        >
          City{" "}
          {filterTab === "city" ? (
            <MdOutlineKeyboardArrowDown size={24} />
          ) : (
            <MdChevronRight size={24} />
          )}
        </button>
        <button
          className={`w-1/3 flex items-center justify-center py-2 rounded-lg text-[14px] h-[42px] font-semibold border-2 ${
            filterTab === "sea"
              ? "border-cyan-500 text-cyan-500"
              : "border-cyan-500 text-black"
          }`}
          onClick={() => handleFilterClick("sea")}
        >
          Sea{" "}
          {filterTab === "sea" ? (
            <MdOutlineKeyboardArrowDown size={24} />
          ) : (
            <MdChevronRight size={24} />
          )}
        </button>
      </div>
      {/* Render the selected component based on filterTab */}
      <div className="bg-white">
        {/* Default Component */}
        {filterTab === "default" && <DefaultFilterHome />}
        {filterTab === "desert" && <DesertFilterHome />}
        {filterTab === "city" && <CityFilterHome />}
        {filterTab === "sea" && <SeaFilterHome />}
      </div>
    </div>
  );
}

export default Activities;
