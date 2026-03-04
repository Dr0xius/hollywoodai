"use client";
import React, { useState, useRef, useEffect } from "react";
import { MdAutoGraph } from "react-icons/md";
import { FaCog } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { closeSignInModal } from "@/redux/slices/modalSlice";
import { useRouter } from "next/navigation";

interface MenuItems {
  label: string;
  icon: React.ReactNode;
  action: string;
  showDivider?: boolean;
  link?: string;
}

const LoggedModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleSignOut } = useAuth();
  const user = useSelector((state: RootState) => state.user);

  const dispatch: AppDispatch = useDispatch();

  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // if (user.uid && isOpen) {
  //   dispatch(closeSignInModal());

  //   router.push("/dashboard");
  // }

  // useEffect(() => {
  //   if (user.uid && isOpen) {
  //     dispatch(closeSignInModal());

  //     router.push("/dashboard");
  //   }
  // }, [user.uid, isOpen, router, dispatch]);

  const menuItems: MenuItems[] = [
    {
      label: "Dashboard",
      icon: <MdAutoGraph />,
      action: "dashboard",
      showDivider: true,
      link: "/dashboard",
    },
    {
      label: "Settings",
      icon: <FaCog />,
      action: "settings",
      link: "/settings",
    },
    {
      label: "Log out",
      icon: <IoMdExit />,
      action: "logout",
      link: "/",
      showDivider: true,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAction = (action: string) => {
    console.log(`Triggering: ${action}`);
    if (action === "logout") {
      handleSignOut();
    }
    setIsOpen(false);
  };
  return (
    <div className="relative" ref={menuRef}>
      <Image
        width={32}
        height={32}
        src="/assets/guest-profile2.jpg"
        className="w-8 h-8 rounded-full cursor-pointer"
        alt="Guest Profile Picture"
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div
          className="flex w-full flex-col absolute right-2 top-10
          sm:w-70 sm:h-56 gap-2 items-center
          bg-gray-100 p-3 rounded-2xl shadow-lg z-50"
        >
          <Image
            width={32}
            height={32}
            src="/assets/guest-profile2.jpg"
            className="w-8 h-8 rounded-full"
            alt="Guest Profile Picture"
          />
          <h1 className="font-bold w-full text-center overflow-hidden text-ellipsis text-black">
            {user.email}
          </h1>

          {menuItems.map((item) => (
            <React.Fragment key={item.label}>
              {item.showDivider && <div className="h-px bg-gray-200 w-full" />}
              <button
                onClick={() => handleAction(item.action)}
                className="font-medium p-1 flex gap-2 items-center w-full text-black hover:bg-gray-200 hover:rounded-xl"
              >
                <span className="text-lg">{item.icon}</span>
                <Link href={`${item.link}`}>{item.label}</Link>
              </button>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default LoggedModal;
