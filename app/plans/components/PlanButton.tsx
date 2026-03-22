"use client";
import React from "react";
import useAuth from "@/hooks/useAuth";

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
      className="w-full py-4 bg-blue-400 hover:bg-blue-400/40 active:scale-[0.97] transition-all rounded-2xl font-bold text-sm tracking-wide shadow-lg"
    >
      Choose plan
    </button>
  );
};

export default PlanButton;
