import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
function Search() {
  return (
    <div className="relative inline-block sm:w-[280px] h-[40px] bg-transparent">
      <HiOutlineSearch
        className="absolute top-[10px] left-3 text-[#555]"
        size={18}
      />
      <input
        type="text"
        placeholder="Explore top activities"
        className="w-full rounded-[2em] border-[1px] h-10 pr-8 pl-10 text-[15px] ring-0 outline-none bg-white"
      />
    </div>
  );
}

export default Search;
