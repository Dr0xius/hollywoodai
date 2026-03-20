"use client";
import React, { useState } from "react";
import {
  FaBars,
  FaCog,
  FaRegBookmark,
  FaSearch,
  FaTimes,
  FaTools,
} from "react-icons/fa";
import SideLinks from "../ui/SideLinks";
import { SidebarLinks } from "@/types";
import { MdOutlineDashboard } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdExit } from "react-icons/io";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import useAuth from "@/hooks/useAuth";

interface SidebarLink {
  link: SidebarLinks;
}

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

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleSignOut } = useAuth();
  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-4 text-white focus:outline-none"
      >
        <FaBars size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-100 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 z-101 w-56 max-w-[80%] bg-[#1A1A1D] h-full p-3 shadow-xl"
            >
              <div className="relative w-56 max-w-full bg-[#1A1A1D] h-full shadow-xl">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-2 right-2 text-white/60"
                >
                  <FaTimes size={20} />
                </button>

                <Image
                  src="/assets/logo-light.png"
                  width={140}
                  height={40}
                  alt="Logo"
                  className="w-[140] h-10"
                />

                <div className="mt-10 text-white flex flex-col gap-3 w-full">
                  <h3 className="text-[12px]">LINKS</h3>
                  {sidebarLinks.slice(0, 4).map((link) => (
                    <SideLinks
                      key={link.label}
                      link={link}
                      onClick={() => setIsOpen(false)}
                      handleSignOut={handleSignOut}
                    />
                  ))}
                </div>

                <div className="mt-10 text-white flex flex-col gap-3 w-full">
                  <h3 className="text-[12px]">EXTRAS</h3>
                  {sidebarLinks.slice(4).map((link) => (
                    <SideLinks
                      key={link.label}
                      link={link}
                      onClick={() => setIsOpen(false)}
                      handleSignOut={handleSignOut}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* {isOpen && (
        <div className="fixed inset-0 z-100 flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative w-56 max-w-[80%] bg-[#1A1A1D] h-full p-3 shadow-xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/60"
            >
              <FaTimes size={20} />
            </button>

            <Image
              src="/assets/logo-light.png"
              width={140}
              height={40}
              alt="Logo"
              className="w-[140] h-10"
            />

            <div className="mt-10 text-white flex flex-col gap-3 w-full">
              <h3 className="text-[12px]">LINKS</h3>
              {sidebarLinks.slice(0, 4).map((link, index) => (
                <SideLinks
                  key={index}
                  link={link}
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </div>

            <div className="mt-10 text-white flex flex-col gap-3 w-full">
              <h3 className="text-[12px]">EXTRAS</h3>
              {sidebarLinks.slice(4).map((link, index) => (
                <SideLinks
                  key={index}
                  link={link}
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default MobileMenu;
