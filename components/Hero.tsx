import React from "react";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <header>
      <div className="row header__row">
        <div className="header__widget">
          <span className="header__widget__title">Meet HollywoodAI</span>
          <span className="header__widget__emoji"> ⏺ </span>
          <span className="header__widget__description">
            Unleash the Power of AI
          </span>
        </div>
        <h1 className="header__title flex items-end gap-4">
          Ultimate AI <br />
          Summariser
          <Image
            src="/assets/bolt.svg"
            alt="Lightning Bolt Icon"
            width={47}
            height={62}
            className="header__title__icon"
          />
        </h1>
        <p className="header__paragraph">
          All-in-one platform to watch your favourite movies in minutes using
          AI.
        </p>
        <a className="header__button">
          <div className="header__button__iconWrapper">
            <PlayIcon width={24} height={24} />
          </div>
          <span className="header__button__text">See how it works &nbsp;</span>
        </a>
      </div>
      <svg
        className="header__svg"
        width="1440"
        height="105"
        viewBox="0 0 1440 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M0 0C240 68.7147 480 103.072 720 103.072C960 103.072 1200 68.7147 1440 0V104.113H0V0Z"></path>
      </svg>
    </header>
  );
};

export default Hero;
