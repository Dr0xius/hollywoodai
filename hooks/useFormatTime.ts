import { forbidden } from "next/navigation";
import React from "react";

const useFormatTime = () => {
  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return { formatTime };
};

export default useFormatTime;
