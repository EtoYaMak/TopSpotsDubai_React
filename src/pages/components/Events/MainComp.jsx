import React, { useState } from "react";
import eventsData from "./eventsData.json";
import { cleanup } from "@testing-library/react";

function MainComp() {
  const Alldata = eventsData;

  return (
    <div className="w-full flex flex-wrap h-fit my-4">
      <h1 className="text-xl text-cyan-500 font-bold  mx-2">
        Featured Shows & Events
      </h1>
      <div className="featured flex w-full">
        {Alldata.map((event, index) => {
          if (event.type === "featured") {
            return (
              <div key={index} className="w-full p-2">
                <ImageContainer src={event.imgSrc} alt={event.h1Text} />
                <h1 className="text-black text-lg font-semibold pt-2">
                  {event.h1Text}
                </h1>
                <h2 className="pl-2 font-medium text-sm text-gray-600">
                  {event.h2Text}
                </h2>
                {event.time && <p>Time: {event.time}</p>}
              </div>
            );
          }
          return null;
        })}
      </div>
      <h1 className="text-xl text-cyan-500 font-bold  mx-2">
        Seasonal Shows & Events
      </h1>
      <div className="seasonal flex w-full">
        {Alldata.map((event, index) => {
          if (event.type === "seasonal") {
            return (
              <div key={index} className="w-full p-2">
                <div className="imagewithbadge relative">
                  <span className="badge bg-red-600 border-0 rounded-md font-medium text-white absolute mt-1 ml-2">
                    {event.date}
                  </span>
                  <ImageContainer src={event.imgSrc} alt={event.h1Text} />
                </div>
                <h1 className="text-black text-lg font-semibold pt-2">
                  {event.h1Text}
                </h1>
                {event.time && (
                  <p className="pl-2 font-medium text-sm text-gray-600">
                    {event.time}
                  </p>
                )}
                <h2 className="pl-2 font-medium text-sm text-gray-600">
                  {event.h2Text}
                </h2>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

function ImageContainer({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`aspect-video rounded-xl flex flex-wrap object-cover h-40 w-full ${
        loaded ? "fade-in-loaded" : "fade-in"
      }`}
      onLoad={handleImageLoad}
    />
  );
}

export default MainComp;
