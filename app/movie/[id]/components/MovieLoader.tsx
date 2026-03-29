"use client";

import React from "react";

const MovieDetailsSkeleton = () => {
  return (
    <>
      {/* 1. Poster Image - Exact 1:1 container matching your code */}

      <div className="animate-pulse mx-auto min-w-50 mb-6 lg:pl-50 w-50 aspect-2/3 rounded-2xl bg-white/10" />

      <div className="animate-pulse">
        {/* 2. Header Text Section */}
        <div className="flex flex-col gap-2">
          {/* Title height matches text-3xl (30px) to text-4xl (36px) */}
          <div className="h-7.5 sm:h-9 w-3/4 bg-white/20 rounded-lg" />
          {/* Subtext height matches text-sm (20px) to text-lg (28px) */}
          <div className="h-5 sm:h-7 w-1/4 bg-white/10 rounded-md" />
          <div className="h-5 sm:h-7 w-1/3 bg-white/10 rounded-md" />
        </div>
        {/* 3. Stats Section - Exact padding and border-matching */}
        <div className="my-6 py-4 border-t border-b border-white/10">
          <div className="flex flex-col gap-3">
            {/* Row 1: Rating & Duration */}
            <div className="flex gap-5 sm:gap-25 max-w-87">
              <div className="flex w-[50%] items-center gap-1">
                <div className="w-5 h-5 bg-white/10 rounded-full" />{" "}
                {/* Icon space */}
                <div className="h-5 w-16 bg-white/10 rounded-md" />
              </div>
              <div className="flex w-[50%] items-center gap-1">
                <div className="w-5 h-5 bg-white/10 rounded-full" />{" "}
                {/* Icon space */}
                <div className="h-5 w-16 bg-white/10 rounded-md" />
              </div>
            </div>

            {/* Row 2: Audio & Year */}
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
        {/* 4. Buttons - Assuming standard button heights */}
        <div className="flex flex-col gap-3 mb-8">
          <div className="h-12 w-full max-w-md bg-white/10 rounded-xl" />
          <div className="h-12 w-full max-w-md bg-white/10 rounded-xl" />
        </div>
        {/* 5. Tags Section */}
        <div className="h-7 w-40 bg-white/20 rounded-md mb-4" /> {/* Header */}
        <div className="flex gap-4 mb-6 items-center flex-wrap">
          {/* Matches h-12 and px-4 from your code */}
          <div className="h-12 w-24 bg-white/5 border border-white/10 rounded-xl" />
          <div className="h-12 w-32 bg-white/5 border border-white/10 rounded-xl" />
          <div className="h-12 w-28 bg-white/5 border border-white/10 rounded-xl" />
        </div>
        {/* 6. Description - Line-height matching */}
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
