import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CheckLogged from "./modals/checkLogged";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <Image
          src="/assets/logo-dark.png"
          width={140}
          height={40}
          alt="Logo"
          className="nav__logo"
        />
      </Link>
      <div className="nav__links">
        <a href="#" className="nav__link">
          About
        </a>
        <a href="#" className="nav__link">
          Features
        </a>
        <a href="#" className="nav__link">
          How it works
        </a>
        <a href="#" className="nav__link">
          Privacy policy
        </a>
      </div>
      <CheckLogged />
    </nav>
  );
};

export default Navbar;
