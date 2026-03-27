"use client";

import React from "react";
import Link from "next/link";
import { SidebarLinks } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { openSignInModal } from "@/redux/slices/modalSlice";

interface SidebarLink {
  link: SidebarLinks;
  onClick?: () => void;
  handleSignOut: () => void;
}

const SideLinks = ({ link, onClick, handleSignOut }: SidebarLink) => {
  const user = useSelector((state: RootState) => state.user.username);
  const dispatch: AppDispatch = useDispatch();
  const logOutLink = link.label === "Log out" || link.label === "Log In";
  const displayLink = !user && logOutLink ? "Log in" : link.label;
  const handleClick = (e: React.MouseEvent) => {
    if (logOutLink) {
      if (user) {
        handleSignOut();
        e.preventDefault();
      } else {
        dispatch(openSignInModal());
        e.preventDefault();
      }
    }

    if (onClick) {
      onClick();
    }
  };

  return link.cursor ? (
    <Link
      onClick={handleClick}
      href={!user && logOutLink ? "#" : `${link.link}`}
      className="flex gap-2 hover:bg-purple-400/10 hover:text-purple-100 px-2 py-1.75 rounded-xl items-center transition"
    >
      <span className="w-4 h-4 md:w-4 md:h-4">{link.icon}</span>
      <span className="">{displayLink}</span>
    </Link>
  ) : (
    <span className="flex gap-2 hover:bg-purple-400/10 hover:text-purple-100 px-2 py-1.5 rounded-xl items-center transition cursor-not-allowed">
      <span className="w-4 h-4 md:w-4 md:h-4">{link.icon}</span>
      <span className="">{link.label}</span>
    </span>
  );
};

export default SideLinks;
