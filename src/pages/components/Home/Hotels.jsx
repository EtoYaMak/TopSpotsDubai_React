import React, { useState } from "react";
import All from "../Hotels/All";
import HotelsTab from "../Hotels/HotelsTab";
import ResortsTab from "../Hotels/ResortsTab";
import BusinessTab from "../Hotels/BusinessTab";
import FamilyTab from "../Hotels/FamilyTab";
import ServicedApartments from "../Hotels/ServicedApartments";
function Hotels() {
  const [filterTab, setFilterTab] = useState("All");
  const handleFilterClick = (tab) => {
    setFilterTab(tab);
  };
  return (
    <div className="relative w-[90%] rounded-t-xl flex flex-col font-Montserrat mx-auto bg-white top-[4vw] ">
      <h1 className="text-[#f16565] text-[1.3em] md:text-[1.7em] lg:text-[2em] font-extrabold mx-4 w-fit h-fit ">
        Hotels & Resorts in Dubai
      </h1>

      {/* FILTER TYPE */}
      <div className="flex justify-center items-center  mx-auto border border-cyan-500 rounded-md h-fit">
        <button
          onClick={() => handleFilterClick("All")}
          className={`text-[18px] px-4 py-1 font-bold  ${
            filterTab === "All" ? "bg-cyan-500 text-black" : "text-cyan-500"
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleFilterClick("Hotels")}
          className={`text-[18px] px-4 py-1 font-bold  ${
            filterTab === "Hotels" ? "bg-cyan-500 text-black" : "text-cyan-500"
          }`}
        >
          Hotels{" "}
        </button>
        <button
          onClick={() => handleFilterClick("Resorts")}
          className={`text-[18px] px-4 py-1 font-bold  ${
            filterTab === "Resorts" ? "bg-cyan-500 text-black" : "text-cyan-500"
          }`}
        >
          Resorts
        </button>
        <button
          onClick={() => handleFilterClick("Business")}
          className={`text-[18px] px-4 py-1 font-bold  ${
            filterTab === "Business"
              ? "bg-cyan-500 text-black"
              : "text-cyan-500"
          }`}
        >
          Business{" "}
        </button>
        <button
          onClick={() => handleFilterClick("Family")}
          className={`text-[18px] px-4 py-1 font-bold  ${
            filterTab === "Family" ? "bg-cyan-500 text-black" : "text-cyan-500"
          }`}
        >
          Family{" "}
        </button>
        <button
          onClick={() => handleFilterClick("Servcied Apartments")}
          className={`text-[18px] px-4 py-1 font-bold  ${
            filterTab === "Servcied Apartments"
              ? "bg-cyan-500 text-black"
              : "text-cyan-500"
          }`}
        >
          Servcied Apartments
        </button>
      </div>
      {/* Render the selected component based on filterTab */}
      <div className="bg-white">
        {filterTab === "All" && <All />}
        {filterTab === "Hotels" && <HotelsTab />}
        {filterTab === "Resorts" && <ResortsTab />}
        {filterTab === "Business" && <BusinessTab />}
        {filterTab === "Family" && <FamilyTab />}
        {filterTab === "Servcied Apartments" && <ServicedApartments />}
      </div>
    </div>
  );
}

export default Hotels;
