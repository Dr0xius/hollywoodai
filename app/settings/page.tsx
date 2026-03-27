"use client";
import React from "react";
import Sidebar from "../dashboard/components/Sidebar";
import Searchbar from "../dashboard/components/Searchbar";
import SettingsInfo from "./components/SettingsInfo";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SettingsSkeleton from "./components/SettingsSkeleton";
import UnLogged from "./components/UnLogged";

const Page = () => {
  const { loading, username } = useSelector((state: RootState) => state.user);

  let content;

  if (loading) {
    content = <SettingsSkeleton />;
  } else if (!username) {
    content = <UnLogged />;
  } else {
    content = <SettingsInfo />;
  }

  return (
    <div className=" flex justify-start relative bg-[#1A1A1D]">
      <Sidebar />

      <div className="flex min-w-0 flex-col justify-center min-h-screen w-full md:ml-56 w-max-400 bg-[#0D0D10] text-white">
        <Searchbar />

        {content}
      </div>
    </div>
  );
};

export default Page;
