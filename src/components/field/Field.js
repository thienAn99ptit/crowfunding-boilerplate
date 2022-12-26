function Field({ children, className }) {
  return (
    <div className={`flex flex-col gap-y-3 pt-3 mb-3 ${className}`}>
      {children}
    </div>
  );
}

export default Field;
