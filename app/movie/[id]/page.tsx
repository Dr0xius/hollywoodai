import React from "react";
import Sidebar from "@/app/dashboard/components/Sidebar";
import Searchbar from "@/app/dashboard/components/Searchbar";
import {
  FaBolt,
  FaCalendar,
  FaMicrophone,
  FaRegBookmark,
  FaRegClock,
  FaStar,
} from "react-icons/fa";
import { useApi } from "@/hooks/useApi";
import SummarizeButton from "./components/SummarizeButton";
import SignInModal from "@/components/modals/SignInModal";
import FavoritesButton from "./components/FavoritesButton";
interface apiProp {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: apiProp) => {
  const { id } = await params;
  const movies = await useApi(`/movies/${id}`);

  return (
    <div className=" flex justify-start relative bg-[#1A1A1D]">
      <Sidebar />
      <SignInModal />
      <div className="flex min-w-0 flex-col justify-start min-h-screen w-full md:ml-56 bg-[#1A1A1D] text-white">
        <Searchbar />
        <div className="py-6 px-8 items-start mx-auto w-full h-full max-w-384 flex flex-col lg:flex-row-reverse">
          <div className="mx-auto min-w-50 mb-6 lg:ml-8 w-50 aspect-2/3 rounded-2xl overflow-hidden">
            <img
              className="w-full h-full "
              src={movies?.imageLink}
              alt="Post Image"
            />
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl sm:text-4xl text-white font-bold">
                {movies?.title}
              </h1>
              <span className="text-sm sm:text-lg text-white/60">
                {movies?.director}
              </span>
              <span className="text-sm sm:text-lg text-white/60">
                {movies?.tagLine}
              </span>
            </div>
            <div className="my-6 py-4 border-t border-b border-white/10">
              <div className="flex flex-col gap-3">
                <div className="flex gap-5 sm:gap-25 max-w-87">
                  <div className="flex w-[50%] items-center gap-1 text-md text-yellow-500 font-medium">
                    <FaStar />
                    <span>{movies?.rating} / 10</span>
                  </div>
                  <div className="flex w-[50%] items-center gap-1 text-md text-white">
                    <FaRegClock />
                    <span>20:21</span>
                  </div>
                </div>

                <div className="flex gap-5 sm:gap-25 max-w-87">
                  <div className="flex w-[50%] items-center gap-1 text-md text-white">
                    <FaMicrophone />
                    <span className="text-sm md:text-[12px]">
                      Audio and text
                    </span>
                  </div>
                  <div className="flex w-[50%] items-center gap-1 text-md text-white">
                    <FaCalendar />
                    <span>{movies?.releaseYear}</span>
                  </div>
                </div>
              </div>
            </div>
            <SummarizeButton movieId={id} />
            <FavoritesButton />
            <h2 className="mb-4 text-xl font-semibold">What's it about?</h2>
            <div className="flex gap-4 mb-6 items-center flex-wrap">
              <div
                className={`${!movies?.tags[0] && "hidden"} h-12 flex px-4 border-white/60 border items-center bg-black/10 rounded-xl `}
              >
                {movies?.tags[0]}
              </div>
              <div
                className={`${!movies?.tags[1] && "hidden"} h-12 flex px-4 border-white/60 border items-center bg-black/10 rounded-xl `}
              >
                {movies?.tags[1]}
              </div>
              <div
                className={`${!movies?.tags[2] && "hidden"} h-12 flex px-4 border-white/60 border items-center bg-black/10 rounded-xl `}
              >
                {movies?.tags[2]}
              </div>
              <div
                className={`${!movies?.tags[3] && "hidden"} h-12 flex px-4 border-white/60 border items-center bg-black/10 rounded-xl `}
              >
                {movies?.tags[3]}
              </div>
            </div>
            <p>{movies?.movieDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
