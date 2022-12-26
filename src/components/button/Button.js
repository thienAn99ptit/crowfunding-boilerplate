function Button({
  children,
  className,
  type = "button",
  onClick,
  kindOf,
  isLoading = false,
  ...props
}) {
  let bg = "";
  if (kindOf === "primary") {
    bg = "bg-primary";
  } else if (kindOf === "secondary") {
    bg = "bg-secondary";
  }
  const child = isLoading ? (
    <span className="w-8 h-8 border-4 border-white border-t-transparent border-b-transparent animate-spin rounded-full "></span>
  ) : (
    children
  );

  return (
    <button
      type={type}
      className={`flex items-center justify-center w-full max-w-full ${
        isLoading && "opacity-50 pointer-events-none"
      }  ${bg} ${className}`}
      onClick={onClick}
      {...props}
    >
      {child}
    </button>
  );
}

export default Button;
