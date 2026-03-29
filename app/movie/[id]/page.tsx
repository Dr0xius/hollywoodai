import React from "react";
import Sidebar from "@/app/dashboard/components/Sidebar";
import Searchbar from "@/app/dashboard/components/Searchbar";
import { FaCalendar, FaMicrophone, FaRegClock, FaStar } from "react-icons/fa";
import { useApi } from "@/hooks/useApi";
import SummarizeButton from "./components/SummarizeButton";
import FavoritesButton from "./components/FavoritesButton";
import MovieDetails from "./components/MovieDetails";
interface apiProp {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: apiProp) => {
  const { id } = await params;
  const movies = await useApi(`/movies/${id}`);

  return (
    <div className=" flex justify-start relative bg-[#1A1A1D]">
      <Sidebar />
      <div className="flex min-w-0 flex-col justify-start min-h-screen w-full md:ml-56 bg-[#0D0D10] text-white">
        <Searchbar />
        <div className="py-6 px-8 items-start mx-auto w-full h-full max-w-384 flex flex-col lg:flex-row-reverse">
          <MovieDetails
            movie={movies}
            src={`https://advanced-internship-api-production.up.railway.app/${movies?.audioLink}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
