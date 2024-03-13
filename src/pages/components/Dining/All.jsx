import React, { useState } from "react";
import DiningImageContainer from "./DiningImageContainer";
import { GoStarFill } from "react-icons/go";
import diningData from "./diningData.json";

function All() {
  const filterAllDiningData = diningData;
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
      // Add more as needed
    };

    return ratingWords[rating] || "Unknown";
  };
  // Group dining by rating and type
  const diningByRatingAndType = filterAllDiningData.reduce((acc, dining) => {
    const key = `${getRatingWord(dining.price)}`;
    acc[key] = acc[key] || [];
    acc[key].push(dining);
    return acc;
  }, {});

  return (
    <div className="w-full flex flex-wrap h-fit my-4">
      {Object.keys(diningByRatingAndType).map((groupKey, index) => (
        <div key={index} className="w-full my-4">
          {/*           <h1 className="text-[#f16565] text-2xl font-extrabold mb-2 flex flex-col justify-center items-center">
            <span>{groupKey}</span>

            <span>
              {generateStars(diningByRatingAndType[groupKey][0].rating)}
            </span>
          </h1> */}
          <div className="flex flex-wrap">
            {diningByRatingAndType[groupKey].map((dining, dIndex) => (
              <div
                key={dIndex}
                className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 gap-1 sm:p-2 justify-start mb-4"
              >
                {/* Your dining content */}
                <DiningImageContainer src={dining.imgSrc} alt={dining.h1Text} />
                <h1 className="w-full text-black font-bold font-Montserrat text-lg text-center">
                  {dining.h1Text}
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
