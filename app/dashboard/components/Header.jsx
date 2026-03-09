import React from "react";

const Header = () => {
  return (
    <div className="py-6 px-8 border-b w-full border-white/10">
      <div className="max-w-368 w-full h-full mx-auto">
        <h1 className="text-3xl font-bold">AI Movie Summarizer</h1>
        <h3 className="text-sm text-white/60">
          Enjoy high-quality summaries of your favourite movies instantly
          without breaking a sweat.
        </h3>
      </div>
    </div>
  );
};

export default Header;
