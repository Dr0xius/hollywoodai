"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import MovieCard from "./MovieCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./carousel.css";
import { MovieProps } from "@/types";

interface Movies {
  movies: MovieProps[];
}

const Carousel = ({ movies = [] }: Movies) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    inViewThreshold: 1,
    align: "start",
  });
  if (!movies)
    return (
      <div className="w-full aspect-2/3 bg-gray-800 animate-pulse rounded-xl" />
    );

  return (
    <div className="embla">
      <div className="embla__viewport relative max-w-384 w-full" ref={emblaRef}>
        <div className="embla__container flex items-center">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="embla__slide flex-[0_0_50%] sm:flex-[0_0_33%] lg:flex-[0_0_25%] xl:flex-[0_0_20%] 2xl:flex-[0_0_16.66%] 3xl:flex-[0_0_14.28%] min-w-0 pl-4"
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
