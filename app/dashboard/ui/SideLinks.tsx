import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosBookmark, IoMdExit } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaCog, FaSearch, FaTools } from "react-icons/fa";

interface SidebarLinks {
  label: string;
  icon?: React.ReactNode;
  link?: string;
  cursor?: boolean;
}

const SideLinks = ({ link }) => {
  return link.cursor ? (
    <Link
      href={`${link.link}`}
      className="flex gap-2 hover:bg-blue-400/10 hover:text-blue-100 px-2 py-1 
              rounded-2xl items-center transition "
    >
      <span className="w-4 h-4 md:w-4 md:h-4">{link.icon}</span>
      <span className="hidden md:block">{link.label}</span>
    </Link>
  ) : (
    <span
      className="flex gap-2 hover:bg-blue-400/10 hover:text-blue-100 px-2 py-1 
              rounded-2xl items-center transition cursor-not-allowed "
    >
      <span className="w-4 h-4 md:w-4 md:h-4">{link.icon}</span>
      <span className="hidden md:block">{link.label}</span>
    </span>
  );
};

export default SideLinks;
