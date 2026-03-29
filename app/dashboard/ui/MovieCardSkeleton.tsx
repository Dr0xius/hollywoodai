"use client";

import React from "react";

const MovieCardSkeleton = () => {
  return (
    <div className="w-full bg-white/5 max-w-67 backdrop-blur-md border border-white/10 overflow-hidden rounded-xl animate-pulse">
      <div className="aspect-2/3 w-full relative bg-white/10 rounded-xl" />

      <div className="px-1 sm:px-2 py-3 w-full flex flex-col gap-2">
        <div className="h-4 w-3/4 bg-white/20 rounded-md" />

        <div className="h-3 w-1/2 bg-white/10 rounded-md mt-0.5" />

        <div className="flex items-center gap-2 sm:gap-3 mt-1.5">
          <div className="h-3 w-10 bg-white/10 rounded-md" />

          <div className="h-3 w-10 bg-white/10 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
