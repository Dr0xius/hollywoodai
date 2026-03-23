"use client";
import { AppDispatch, RootState } from "@/redux/store";
import React from "react";
import { FaBolt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { openSignInModal } from "@/redux/slices/modalSlice";
import { useRouter } from "next/navigation";

interface SummarizeButtonProps {
  movieId: string;
  subRequired: boolean;
}

const SummarizeButton = ({ movieId, subRequired }: SummarizeButtonProps) => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.username);
  const isPremium = useSelector((state: RootState) => state.user.isPremium);
  const dispatch: AppDispatch = useDispatch();
  const handleClick = () => {
    if (!user) {
      dispatch(openSignInModal());
    } else if (!isPremium && subRequired) {
      router.push("/plans");
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
