"use client";
import React from "react";
import { FaRegBookmark } from "react-icons/fa";

const FavoritesButton = () => {
  return (
    <button className="flex mb-8 items-center gap-2 text-blue-300">
      <FaRegBookmark />
      <span>Add to Favorites</span>
    </button>
  );
};

export default FavoritesButton;
