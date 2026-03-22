import React from "react";
import Sidebar from "../dashboard/components/Sidebar";
import Searchbar from "../dashboard/components/Searchbar";
import Faq from "./components/Faq";
import SignInModal from "@/components/modals/SignInModal";
import Plans from "./components/Plans";

const Page = async () => {
  return (
    <div className=" flex justify-start relative bg-[#1A1A1D]">
      <Sidebar />
      <div className="flex min-w-0 flex-col justify-center min-h-screen w-full md:ml-56 w-max-400 bg-[#1A1A1D] text-white">
        <Searchbar />
        <div className="items-start mx-auto w-full h-full flex flex-col">
          <Plans />
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default Page;
