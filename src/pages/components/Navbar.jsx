import React from "react";

function Navbar() {
  const languages = [
    "English",
    "Croatian",
    "German",
    "French",
    "Spanish",
    "Italian",
  ];
  return (
    <div className="flex flex-col gap-2 min-[480px]:gap-0 min-[480px]:flex-row w-full justify-between h-fit min-[480px]:mb-0 mb-2  min-[480px]:h-[69.9876] font-Montserrat z-40 bg-white max-w-7xl mx-auto">
      <div className="logo w-full min-[480px]:w-fit relative left-[4px] min-[480px]:left-16 my-auto pt-[4px]  min-[480px]:py-[10px] z-40 ">
        <img
          src="https://topspotsdubai.com/assets/images/logo.png"
          alt=""
          className="h-[55px] min-[370px]:h-[42px] m-auto mx-auto z-40"
        />
      </div>
      <div className="right flex justify-evenly items-center gap-1 min-[480px]:gap-4 text-black min-[480px]:right-10 relative min-[480px]:mx-0 mx-2 z-40 ">
        <select className="h-8 my-auto border rounded-[5px] px-1 py-[2px] font-semibold text-[15px] bg-white">
          {languages.map((language, index) => (
            <option
              key={index}
              value={language[index]}
              className="font-semibold "
            >
              {language}
            </option>
          ))}
        </select>
        <button className="h-8 flex items-center justify-center text-[13px] rounded-[4px] font-bold font-Montserrat hover:bg-[#eef8ff]/50 px-4 py-2">
          Help
        </button>
        <button className="h-8 flex items-center justify-center bg-[#f16565] text-white font-extrabold px-[14px] py-[6px] text-[13px] font-Montserrat rounded-[4px]">
          Log In
        </button>
      </div>
    </div>
  );
}

export default Navbar;
