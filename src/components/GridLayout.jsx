
const GridLayout = ({ children, className = "" }) => {
  return (
    <div
      className={`grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-12 px-2 md:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default GridLayout;
