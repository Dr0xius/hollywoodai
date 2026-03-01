import React from "react";
import Image from "next/image";
import SignInModal from "./modals/SignInModal";
import SignUpModal from "./modals/SignUpModal";

const Navbar = () => {
  return (
    <nav>
      <a href="#">
        <Image
          src="/assets/logo-dark.png"
          width={140}
          height={40}
          alt="Logo"
          className="nav__logo"
        />
      </a>
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
      <SignInModal />
      <SignUpModal />
    </nav>
  );
};

export default Navbar;
