import React from "react";
import { FaBolt } from "react-icons/fa";
import Link from "next/link";

const UpgradeButton = () => {
  return (
    <Link
      href="/plans"
      className="flex items-center justify-center rounded-xl gap-2 bg-linear-to-r from-violet-600 via-violet-800 to-violet-900 h-12 max-w-40 w-full"
    >
      <span>Upgrade</span>
      <FaBolt />
    </Link>
  );
};

export default UpgradeButton;
