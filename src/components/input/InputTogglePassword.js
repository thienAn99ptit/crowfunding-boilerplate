import { useController } from "react-hook-form";
import useToggle from "../../hook/useToggle";
import { EyeCloseIcon, EyeIcon } from "../icons/Icons";

function InputTogglePassword({
  name = "",
  className,
  placeholder,
  control,
  error = "",
  type = "text",
  ...props
}) {
  const { value, toggle } = useToggle();
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        className={`py-4 px-6 text-text-text4 bg-white dark:bg-darkStroke dark:text-white text-sm w-full max-w-full border-[1px] outline-none ${
          error.lenght > 0
            ? "border-error"
            : "border-strock dark:border-darkStroke"
        } rounded-lg ${className}`}
        id={name}
        type={value ? "text" : "password"}
        placeholder={placeholder}
        {...field}
        {...props}
      />
      {error.length > 0 ? (
        <span className="absolute top-1/2 left-6 -translate-y-1/2 pointer-events-none text-error text-sm font-normal error-input">
          {error}
        </span>
      ) : null}
      <span
        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
        onClick={toggle}
      >
        {value ? <EyeIcon /> : <EyeCloseIcon />}
      </span>
    </div>
  );
}

export default InputTogglePassword;
