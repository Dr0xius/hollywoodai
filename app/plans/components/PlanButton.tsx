"use client";
import React from "react";
import useAuth from "@/hooks/useAuth";
import { FaSpinner } from "react-icons/fa";

interface PlanButtonProps {
  priceId: string;
}

const PlanButton = ({ priceId }: PlanButtonProps) => {
  const { handleCheckout, isSubscribing } = useAuth();

  const handleClick = () => {
    handleCheckout(priceId);
  };
  return (
    <button
      onClick={handleClick}
      className="w-full py-4 bg-violet-600 flex gap-2 justify-center hover:bg-violet-500 active:scale-[0.97] transition-all rounded-2xl font-bold text-sm tracking-wide shadow-lg"
    >
      {isSubscribing ? (
        <>
          <span>Loading</span>
          <span className="flex animate-spin justify-center">
            <FaSpinner size={20} />
          </span>
        </>
      ) : (
        <span>Choose Plan</span>
      )}
    </button>
  );
};

export default PlanButton;
