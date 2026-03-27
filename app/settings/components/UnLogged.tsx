"use client";
import React from "react";
import Image from "next/image";
import LoginButton from "./LoginButton";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SettingsSkeleton from "./SettingsSkeleton";

const UnLogged = () => {
  const user = useSelector((state: RootState) => state.user.username);
  const loading = useSelector((state: RootState) => state.user.loading);

  return (
    <div className="flex-col pt-6 pb-30 px-4 items-start mx-auto w-full h-full max-w-384">
      <div className="pt-3 border-b border-white/10 px-4 mx-auto w-full max-w-384">
        <h1 className="text-4xl font-bold mb-4">Settings</h1>
      </div>
      {user && loading ? (
        <SettingsSkeleton />
      ) : (
        <div
          className={`x-auto w-auto h-auto mt-12 flex flex-col items-center justify-center`}
        >
          <Image
            src="/assets/sign-in-svg.png"
            width={460}
            height={264}
            alt="sign in logo"
          />
          <h1 className="font-bold text-2xl my-5 text-center">
            Sign in to see your account settings
          </h1>

          <LoginButton />
        </div>
      )}
    </div>
  );
};

export default UnLogged;
