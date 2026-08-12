function Skeleton({ width = 'w-full', height = 'h-4', className = '' }) {
  return (
    <div
      className={`${width} ${height} bg-white/10 rounded-md animate-pulse ${className}`}
    ></div>
  );
}

export default Skeleton;