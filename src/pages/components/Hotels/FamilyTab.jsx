import React from "react";
import data from "./dataHotels.json";
import HotelImageContainer from "./HotelImageContainer";
function FamilyTab() {
  const familyData = data.filter((item) =>
    item.h1Text.toLowerCase().includes("family")
  );
  return (
    <div className="w-full flex flex-wrap h-fit my-10">
      {/* Repeat this block for each item */}
      {familyData.map((data, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 gap-1 sm:p-2 justify-start mb-4"
        >
          <HotelImageContainer src={data.imgSrc} />
          <h1 className="w-full  text-black font-bold font-Montserrat text-lg text-center">
            {data.h1Text}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default FamilyTab;
