"use client";

import React from "react";
import Link from "next/link";
import { SidebarLinks } from "@/types";
import UseAuth from "@/hooks/useAuth";

interface SidebarLink {
  link: SidebarLinks;
}

const SideLinks = ({ link }: SidebarLink) => {
  const { handleSignOut } = UseAuth();
  return link.cursor ? (
    <Link
      onClick={() => {
        link.label === "Log out" && handleSignOut();
      }}
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
