import React from "react";
import MovieCard from "../ui/MovieCard";
import Carousel from "../ui/Carousel";
import { useApi } from "@/hooks/useApi";

const SelectedMovies = async () => {
  const movies = await useApi("/selectedMovies");
  return (
    <div className="pt-3 sm:pt-6 px-4 sm:px-8 mx-auto w-full h-full max-w-384">
      <h1 className="text-xl font-bold">Selected just for you</h1>
      <h3 className="text-sm text-white/60 mb-4">
        We think you'll like these.
      </h3>
      <div className="w-full min-w-0">
        <Carousel movies={movies} />
      </div>
    </div>
  );
};

export default SelectedMovies;
