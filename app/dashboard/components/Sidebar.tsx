import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosBookmark, IoMdExit } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaCog, FaRegBookmark, FaSearch, FaTools } from "react-icons/fa";
import SideLinks from "../ui/SideLinks";

interface SidebarLinks {
  label: string;
  icon?: React.ReactNode;
  link?: string;
  cursor?: boolean;
}

const Sidebar = () => {
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
      link: "/",
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

        <ul className="list-none flex flex-col gap-3 mt-10 w-full">
          <h3 className="text-[12px]">LINKS</h3>
          {sidebarLinks.slice(0, 4).map((link, index) => (
            <SideLinks key={index} link={link} />
          ))}
        </ul>

        <ul className="list-none flex flex-col gap-3 mt-10 w-full">
          <h3 className="text-[12px]">EXTRAS</h3>
          {sidebarLinks.slice(4).map((link, index) => (
            <SideLinks key={index} link={link} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
