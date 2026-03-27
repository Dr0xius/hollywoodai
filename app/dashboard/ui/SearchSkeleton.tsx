const SearchSkeleton = () => {
  return (
    <div className="flex flex-col">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 border-b border-white/5 animate-pulse"
          >
            <div className="w-14 aspect-2/3 bg-white/10 rounded-lg shadow-lg" />

            <div className="flex flex-col gap-2 flex-1">
              <div className="h-4 w-3/4 bg-white/10 rounded" />

              <div className="h-3 w-1/2 bg-white/5 rounded" />

              <div className="h-3 w-1/4 bg-white/5 rounded mt-1" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default SearchSkeleton;
