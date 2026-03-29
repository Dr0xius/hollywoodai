"use client";
import React from "react";
import Image from "next/image";
import { MdOutlineDashboard } from "react-icons/md";
import { IoMdExit } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaCog, FaRegBookmark, FaSearch, FaTools } from "react-icons/fa";
import SideLinks from "../ui/SideLinks";
import { SidebarLinks } from "@/types";
import useAuth from "@/hooks/useAuth";
import SignInModal from "@/components/modals/SignInModal";
import SignUpModal from "@/components/modals/SignUpModal";
import ForgotPassModal from "@/components/modals/ForgotPassModal";

const Sidebar = () => {
  const { handleSignOut } = useAuth();
  const sidebarLinks: SidebarLinks[] = [
    {
      label: "Dashboard",
      icon: <MdOutlineDashboard />,
      link: "/dashboard",
      cursor: true,
    },
    {
      label: "Favorites",
      icon: <FaRegBookmark />,
      link: "/favorites",
      cursor: true,
    },
    {
      label: "Search",
      icon: <FaSearch />,
      cursor: false,
    },
    {
      label: "Trending",
      icon: <FaArrowTrendUp />,
      cursor: false,
    },
    {
      label: "Help & Support",
      icon: <FaTools />,
      cursor: false,
    },
    {
      label: "Settings",
      icon: <FaCog />,
      link: "/settings",
      cursor: true,
    },
    {
      label: "Log out",
      icon: <IoMdExit />,
      cursor: true,
    },
  ];
  return (
    <aside className="hidden h-screen w-56 md:block shrink-0 fixed top-0 left-0 z-20 text-white border-r border-white/10">
      <div className="flex flex-col items-start py-5 px-3">
        <Image
          src="/assets/logo-light.png"
          width={140}
          height={40}
          alt="Logo"
          className="w-[140] h-10"
        />

        <ul className="list-none flex flex-col gap-2 mt-10 w-full">
          <h3 className="text-[12px]">LINKS</h3>
          {sidebarLinks.slice(0, 4).map((link) => (
            <SideLinks
              key={link.label}
              link={link}
              handleSignOut={handleSignOut}
            />
          ))}
        </ul>

        <ul className="list-none flex flex-col gap-2 mt-10 w-full">
          <h3 className="text-[12px]">EXTRAS</h3>
          {sidebarLinks.slice(4).map((link) => (
            <SideLinks
              key={link.label}
              link={link}
              handleSignOut={handleSignOut}
            />
          ))}
        </ul>
      </div>
      <SignInModal />
      <SignUpModal />
      <ForgotPassModal />
    </aside>
  );
};

export default Sidebar;
