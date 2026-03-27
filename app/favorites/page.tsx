import React from "react";
import Sidebar from "../dashboard/components/Sidebar";
import Searchbar from "../dashboard/components/Searchbar";
import Favorites from "./components/Favorites";

const Page = () => {
  return (
    <div className=" flex justify-start relative bg-[#1A1A1D]">
      <Sidebar />
      <div className="flex min-w-0 flex-col justify-center min-h-screen w-full md:ml-56 w-max-400 bg-[#0D0D10] text-white">
        <Searchbar />
        <Favorites />
      </div>
    </div>
  );
};

export default Page;
