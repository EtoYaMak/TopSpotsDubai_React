import React, { useState } from "react";
import All from "../Dining/All";

function Dining() {
  return (
    <div className="relative w-[90%] rounded-t-xl flex flex-col font-Montserrat mx-auto bg-white top-[4vw] ">
      <h1 className="text-[#f16565] text-[1.3em] md:text-[1.7em] lg:text-[2em] font-extrabold mx-4 w-fit h-fit ">
        Top Dining Spots in Dubai
      </h1>

      {/* Render the selected component based on filterTab */}
      <div className="bg-white">
        <All />
      </div>
    </div>
  );
}

export default Dining;
