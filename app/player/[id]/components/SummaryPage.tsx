import React from "react";
import { MovieProps } from "@/types";

interface Movies {
  movie: MovieProps;
}

const SummaryPage = ({ movie }: Movies) => {
  return (
    <>
      <div className="pt-3 border-b border-white/10 px-4 mx-auto w-full max-w-384">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4">
          {movie.title}
        </h1>
      </div>

      <div className="pt-10 px-4 mx-auto w-full max-w-384">
        <p className="text-[14px] sm:text-[16px] whitespace-pre-line mb-4">
          {movie.summary}
        </p>
      </div>
    </>
  );
};

export default SummaryPage;
