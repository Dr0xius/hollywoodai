"use client";

import React from "react";

const MovieDetailsSkeleton = () => {
  return (
    <>
      <div className="animate-pulse mx-auto min-w-50 mb-6 lg:pl-50 w-50 aspect-2/3 rounded-2xl " />

      <div className="animate-pulse">
        <div className="flex flex-col gap-2">
          <div className="h-7.5 sm:h-9 w-3/4 bg-white/20 rounded-lg" />

          <div className="h-5 sm:h-7 w-1/4 bg-white/10 rounded-md" />
          <div className="h-5 sm:h-7 w-1/3 bg-white/10 rounded-md" />
        </div>

        <div className="my-6 py-4 border-t border-b border-white/10">
          <div className="flex flex-col gap-3">
            <div className="flex gap-5 sm:gap-25 max-w-87">
              <div className="flex w-[50%] items-center gap-1">
                <div className="w-5 h-5 bg-white/10 rounded-full" />{" "}
                <div className="h-5 w-16 bg-white/10 rounded-md" />
              </div>
              <div className="flex w-[50%] items-center gap-1">
                <div className="w-5 h-5 bg-white/10 rounded-full" />{" "}
                <div className="h-5 w-16 bg-white/10 rounded-md" />
              </div>
            </div>

            <div className="flex gap-5 sm:gap-25 max-w-87">
              <div className="flex w-[50%] items-center gap-1">
                <div className="w-5 h-5 bg-white/10 rounded-full" />
                <div className="h-5 w-24 bg-white/10 rounded-md" />
              </div>
              <div className="flex w-[50%] items-center gap-1">
                <div className="w-5 h-5 bg-white/10 rounded-full" />
                <div className="h-5 w-12 bg-white/10 rounded-md" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-8">
          <div className="h-12 w-full max-w-md bg-white/10 rounded-xl" />
          <div className="h-12 w-full max-w-md bg-white/10 rounded-xl" />
        </div>

        <div className="h-7 w-40 bg-white/20 rounded-md mb-4" />
        <div className="flex gap-4 mb-6 items-center flex-wrap">
          <div className="h-12 w-24 bg-white/5 border border-white/10 rounded-xl" />
          <div className="h-12 w-32 bg-white/5 border border-white/10 rounded-xl" />
          <div className="h-12 w-28 bg-white/5 border border-white/10 rounded-xl" />
        </div>

        <div className="space-y-3">
          <div className="h-4 w-full bg-white/5 rounded" />
          <div className="h-4 w-full bg-white/5 rounded" />
          <div className="h-4 w-4/5 bg-white/5 rounded" />
        </div>
      </div>
    </>
  );
};

export default MovieDetailsSkeleton;
