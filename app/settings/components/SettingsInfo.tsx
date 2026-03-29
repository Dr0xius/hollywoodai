"use client";
import React from "react";
import UpgradeButton from "./UpgradeButton";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const SettingsInfo = () => {
  const isPremium = useSelector((state: RootState) => state.user.isPremium);
  const subTier = useSelector((state: RootState) => state.user.subTier);
  const email = useSelector((state: RootState) => state.user.email);

  return (
    <div className="pt-6 pb-30 px-4 items-start mx-auto w-full h-full max-w-384 flex flex-col">
      <div className="pt-3 border-b border-white/10 px-4 mx-auto w-full max-w-384">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4">
          Settings
        </h1>
      </div>
      <div className="px-4 py-6 border-b border-white/10 mx-auto w-full max-w-384">
        <h1 className="text-xl font-bold mb-2">Your subscription plan</h1>
        <h3 className={`text-lg text-white/60 ${!isPremium && "mb-4"}`}>
          {subTier}
        </h3>
        {!isPremium && <UpgradeButton />}
      </div>
      <div className="px-4 py-6 border-b border-white/10 mx-auto w-full max-w-384">
        <h1 className="text-xl font-bold mb-2">Email</h1>
        <h3 className="text-lg text-white/60">{email}</h3>
      </div>
    </div>
  );
};

export default SettingsInfo;
