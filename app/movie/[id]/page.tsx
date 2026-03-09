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

const Page = () => {
  return (
    <div className=" flex justify-start relative bg-[#1A1A1D]">
      <Sidebar />
      <div className="flex min-w-0 flex-col justify-start min-h-screen w-full md:ml-56 bg-[#1A1A1D] text-white">
        <Searchbar />
        <div className="pt-6 px-8 items-start mx-auto w-full h-full max-w-384 flex flex-col lg:flex-row-reverse">
          <div className="mx-auto min-w-50 mb-6 lg:ml-8 w-50 aspect-2/3 rounded-2xl overflow-hidden">
            <img
              className="w-full h-full "
              src="https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UY281_CR0,0,190,281_.jpg"
              alt="Post Image"
            />
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl text-white font-bold">Movie Title</h1>
              <span className="text-sm text-white/60">Movie Director</span>
              <span className="text-sm text-white/60">Movie Tagline</span>
            </div>
            <div className="my-6 py-4 border-t border-b border-white/10">
              <div className="flex flex-col gap-3">
                <div className="flex gap-20">
                  <div className="flex items-center gap-1 text-md text-yellow-500 font-medium">
                    <FaStar />
                    <span>Rating</span>
                  </div>
                  <div className="flex items-center gap-1 text-md text-white">
                    <FaRegClock />
                    <span>120 min</span>
                  </div>
                </div>

                <div className="flex gap-20">
                  <div className="flex items-center gap-1 text-md text-white">
                    <FaMicrophone />
                    <span>Rating</span>
                  </div>
                  <div className="flex items-center gap-1 text-md text-white">
                    <FaCalendar />
                    <span>Rating</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="flex mb-6 items-center justify-center rounded-xl gap-2 bg-purple-950 h-12 max-w-70 w-full">
              <span>Summarize</span>
              <FaBolt />
            </button>
            <button className="flex mb-8 items-center gap-2 text-blue-300">
              <FaRegBookmark />
              <span>Add to Favorites</span>
            </button>
            <h2 className="mb-4 text-xl font-semibold">What's it about?</h2>
            <div className="flex gap-4 mb-6 items-center flex-wrap">
              <div className="h-12 flex px-4 border-white/60 border items-center bg-black/10 rounded-xl ">
                Action
              </div>
              <div className="h-12 flex px-4 border-white/60 border items-center bg-black/10 rounded-xl ">
                Action
              </div>
              <div className="h-12 flex px-4 border-white/60 border items-center bg-black/10 rounded-xl ">
                Action
              </div>
              <div className="h-12 flex px-4 border-white/60 border items-center bg-black/10 rounded-xl ">
                Action
              </div>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi, nostrum odit! Quam adipisci amet numquam fugit et velit
              aspernatur provident id esse, sit, quaerat, explicabo
              reprehenderit similique beatae expedita modi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
