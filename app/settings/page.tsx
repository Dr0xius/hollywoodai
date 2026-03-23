"use client";
import React from "react";
import Sidebar from "../dashboard/components/Sidebar";
import Searchbar from "../dashboard/components/Searchbar";
import { FaBolt } from "react-icons/fa";
import SettingsInfo from "./components/SettingsInfo";
import UnLogged from "./components/UnLogged";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Page = () => {
  const user = useSelector((state: RootState) => state.user.username);
  return (
    <div className=" flex justify-start relative bg-[#1A1A1D]">
      <Sidebar />

      <div className="flex min-w-0 flex-col justify-center min-h-screen w-full md:ml-56 w-max-400 bg-[#1A1A1D] text-white">
        <Searchbar />
        {user ? <SettingsInfo /> : <UnLogged />}
      </div>
    </div>
  );
};

export default Page;
