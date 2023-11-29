import React, { useState } from "react";
import Search from "./components/Home/Search.jsx";
import NavHero from "./components/Home/NavHero.jsx";
import Activities from "./components/Home/Activities.jsx";
import Gifts from "./components/Home/Gifts.jsx";
import Hotels from "./components/Home/Hotels.jsx";
import Dining from "./components/Home/Dining.jsx";
import Places from "./components/Home/Places.jsx";
import Events from "./components/Home/Events.jsx";
function Home() {
  const [navSwitch, setNavSwitch] = useState("activities");

  const handleNavSwitch = (tab) => {
    // If the same tab is clicked again, set filterTab to "default"

    setNavSwitch(tab);
  };

  // Render the component based on the navSwitch state
  const renderNavComponent = () => {
    switch (navSwitch) {
      case "activities":
        return <Activities />;
      case "gifts":
        return <Gifts />;
      case "hotels":
        return <Hotels />;
      case "dining":
        return <Dining />;
      case "places":
        return <Places />;
      case "events":
        return <Events />;
      // Add cases for other components
      default:
        return null;
    }
  };

  return (
    <div className="w-full ">
      {/* HEADER CONTENT */}
      <div className="flex flex-col justify-end items-center w-full  px-[26px] font-Montserrat z-10 relative mb-8  h-1/4 ">
        <img
          src="https://topspots-bucket.s3.eu-central-1.amazonaws.com/categories/top_activites2.jpg"
          alt=""
          className="absolute z-0 object-center object-cover w-full h-full  " //min-w-[25vw]  min-h-[35%] h-fit
        />
        <div className="flex flex-col items-center justify-center h-[30vh] w-full">
          <div className="z-10 text-white min-[480px]:p-3 p-0 flex items-center justify-center flex-col mb-5 py-1 min-[480px]:gap-2 gap-0 w-full ">
            <h1 className="min-[480px]:text-[1.7em] text-[1.24em] tracking-widest font-bold text-center w-full">
              TOP SPOTS DUBAI
            </h1>
            <h2 className="min-[480px]:text-[1em] text-[0.85em] tracking-widest font-semibold text-center w-full">
              RANKINGS YOU CAN TRUST
            </h2>
          </div>
          <Search />
        </div>
      </div>

      <div className=" flex flex-col relative -top-10 pb-24 ">
        {/* NAV COMPONENT SWITCH */}
        <div className="w-full flex justify-center items-start h-fit sm:px-10  z-20  ">
          <NavHero navSwitch={navSwitch} handleNavSwitch={handleNavSwitch} />
        </div>
        {/* Render NAV COMPONENT SWITCH */}
        <div className="w-full bg-white max-w-[1280px] mx-auto">
          {renderNavComponent()}
        </div>
      </div>
    </div>
  );
}

export default Home;
