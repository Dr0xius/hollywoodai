const SettingsSkeleton = () => {
  return (
    <div className="pt-6 pb-30 px-4 items-start mx-auto w-full h-full max-w-384 flex flex-col animate-pulse">
      <div className="pt-3 border-b border-white/10 px-4 mx-auto w-full max-w-384">
        <div className="h-10 w-40 bg-white/10 rounded-md mb-4" />
      </div>

      <div className="px-4 py-6 border-b border-white/10 mx-auto w-full max-w-384">
        <div className="h-6 w-48 bg-white/10 rounded mb-4" />
        <div className="h-5 w-32 bg-white/5 rounded mb-4" />
        <div className="h-12 w-full max-w-50 bg-white/10 rounded-xl" />
      </div>

      <div className="px-4 py-6 border-b border-white/10 mx-auto w-full max-w-384">
        <div className="h-6 w-20 bg-white/10 rounded mb-4" />
        <div className="h-5 w-56 bg-white/5 rounded" />
      </div>
    </div>
  );
};

export default SettingsSkeleton;
