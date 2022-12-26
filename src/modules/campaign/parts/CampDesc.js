function CampDesc({ children, className = "font-normal text-xs mb-[15px]" }) {
  return <p className={` text-text3 ${className}`}>{children}</p>;
}

export default CampDesc;
