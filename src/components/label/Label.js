function Label({ children, htmlFor = "", className }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-text2 dark:text-text3 text-sm font-medium cursor-pointer ${className}`}
    >
      {children}
    </label>
  );
}

export default Label;
