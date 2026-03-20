"use client";
import { AppDispatch, RootState } from "@/redux/store";
import React from "react";
import { FaBolt } from "react-icons/fa";
import { useDispatch, useSelector, UseSelector } from "react-redux";
import { openSignInModal } from "@/redux/slices/modalSlice";
import { useRouter } from "next/navigation";

interface SummarizeButtonProps {
  movieId: string;
}

const SummarizeButton = ({ movieId }: SummarizeButtonProps) => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.username);
  const dispatch: AppDispatch = useDispatch();
  const handleClick = () => {
    if (!user) {
      dispatch(openSignInModal());
    } else {
      router.push(`/player/${movieId}`);
    }
    return;
  };
  return (
    <button
      onClick={handleClick}
      className="flex mb-6 items-center justify-center rounded-xl gap-2 bg-purple-950 h-12 max-w-70 w-full"
    >
      <span>Summarize</span>
      <FaBolt />
    </button>
  );
};

export default SummarizeButton;
