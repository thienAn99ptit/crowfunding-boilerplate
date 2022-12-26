import { useController } from "react-hook-form";

function Input({
  name = "",
  className,
  placeholder,
  control,
  error = "",
  type = "text",
  ...props
}) {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        className={`py-4 px-6 text-text4 bg-white dark:bg-darkStroke dark:text-white text-sm w-full max-w-full border outline-none ${
          error.lenght > 0
            ? "border-error"
            : "border-strock dark:border-darkStroke"
        }  rounded-lg ${className}`}
        id={name}
        type={type}
        placeholder={placeholder}
        {...field}
        {...props}
      />
      {error.length > 0 ? (
        <span className="absolute top-1/2 left-6 -translate-y-1/2 pointer-events-none text-error text-sm font-normal error-input">
          {error}
        </span>
      ) : null}
    </div>
  );
}

export default Input;
