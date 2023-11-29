import React from "react";
import GiftContainer from "../Gifts/GiftContainer";

function Gifts() {
  return (
    <div className="relative w-[90%] rounded-t-xl flex flex-col font-Montserrat mx-auto bg-white top-[4vw] ">
      <h1 className="text-[#f16565] text-[1.3em] md:text-[1.7em] lg:text-[2em] font-extrabold mx-4 w-fit h-fit ">
        Gift Activities in Dubai
      </h1>

      {/* Render the selected component based on filterTab */}
      <div className="bg-white">
        {/* Default Component */}
        <GiftContainer />
      </div>
    </div>
  );
}

export default Gifts;
