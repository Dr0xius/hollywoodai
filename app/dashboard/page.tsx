import React from "react";
import Sidebar from "./components/Sidebar";
import SelectedMovies from "./components/SelectedMovies";
import TopMovies from "./components/TopMovies";
import Searchbar from "./components/Searchbar";
import Header from "./components/Header";
import { UseApi } from "@/hooks/useApi";

const Page = async () => {
  const movies = await UseApi("/selectedMovies");
  return (
    <div className=" flex justify-start relative bg-[#1A1A1D]">
      <Sidebar />
      <div className="flex min-w-0 flex-col justify-center min-h-screen w-full md:ml-56 w-max-400 bg-[#1A1A1D] text-white">
        <Searchbar />
        <Header />
        <SelectedMovies />
        <TopMovies />
      </div>
    </div>
  );
};

export default Page;
