import React from "react";
import AudioPlayer from "./components/AudioPlayer";
import { useApi } from "@/hooks/useApi";
import Sidebar from "@/app/dashboard/components/Sidebar";
import Searchbar from "@/app/dashboard/components/Searchbar";
import SummaryPage from "./components/SummaryPage";
interface apiProp {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: apiProp) => {
  const { id } = await params;
  const movies = await useApi(`/movies/${id}`);
  return (
    <div className=" flex justify-start relative bg-[#1A1A1D]">
      <Sidebar />
      <div className="flex min-w-0 flex-col justify-center min-h-screen w-full md:ml-56 w-max-400 bg-[#0D0D10] text-white">
        <Searchbar />
        <div className="pt-6 pb-50 px-4 items-start mx-auto w-full h-full max-w-384 flex flex-col">
          <SummaryPage movie={movies} />
        </div>

        <AudioPlayer
          src={`https://advanced-internship-api-production.up.railway.app/${movies?.audioLink}`}
          title={movies?.title}
          author={movies?.director}
          poster={movies?.imageLink}
          movieId={movies?.id}
        />
      </div>
    </div>
  );
};

export default Page;
