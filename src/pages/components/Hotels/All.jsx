import React, { useState } from "react";
import HotelImageContainer from "./HotelImageContainer";
import { GoStarFill } from "react-icons/go";
import dataHotels from "./dataHotels.json";

function All() {
  const filterAllHotelsData = dataHotels;
  // Function to generate stars based on rating
  const generateStars = (rating) => {
    return Array.from({ length: Number(rating) }, (_, index) => (
      <GoStarFill key={index} className="inline text-yellow-300" />
    ));
  };
  // Function to convert numeric rating to words
  const getRatingWord = (rating) => {
    const ratingWords = {
      1: "One",
      2: "Two",
      3: "Three",
      4: "Four",
      5: "Five",
      // Add more as needed
    };

    return ratingWords[rating] || "Unknown";
  };
  // Group hotels by rating and type
  const hotelsByRatingAndType = filterAllHotelsData.reduce((acc, hotel) => {
    const key = `${getRatingWord(hotel.rating)} Star ${hotel.type}`;
    acc[key] = acc[key] || [];
    acc[key].push(hotel);
    return acc;
  }, {});

  return (
    <div className="w-full flex flex-wrap h-fit my-4">
      {Object.keys(hotelsByRatingAndType).map((groupKey, index) => (
        <div key={index} className="w-full my-4">
          <h1 className="text-[#f16565] text-2xl font-extrabold mb-2 flex flex-col justify-center items-center">
            <span>{groupKey}</span>

            <span>
              {generateStars(hotelsByRatingAndType[groupKey][0].rating)}
            </span>
          </h1>
          <div className="flex flex-wrap">
            {hotelsByRatingAndType[groupKey].map((hotel, hotelIndex) => (
              <div
                key={hotelIndex}
                className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 gap-1 sm:p-2 justify-start mb-4"
              >
                {/* Your hotel content */}
                <HotelImageContainer src={hotel.imgSrc} alt={hotel.h1Text} />
                <h1 className="w-full text-black font-bold font-Montserrat text-lg text-center">
                  {hotel.h1Text}
                </h1>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default All;
