import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const Searchbar = () => {
  return (
    <div className="h-20 p-2 w-full mx-auto border-b border-white/10">
      <div className="px-8 flex w-full h-full justify-between max-w-[1400] items-center m-0">
        <div className="flex gap-2 w-full max-w-100 items-center h-11 bg-black/25 rounded-full relative">
          <FaSearch className="relative left-4" />
          <input
            type="text"
            placeholder="Search for movies..."
            className="outline-none w-full px-4 py-2"
          />
        </div>
        {/* <div className="pl-3">
          <FaBars className="text-2xl md:hidden" />
        </div> */}
        <MobileMenu />
      </div>
    </div>
  );
};

export default Searchbar;
