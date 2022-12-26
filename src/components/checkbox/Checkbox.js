import { useController } from "react-hook-form";
import { CheckIcon } from "../icons/Icons";

function Checkbox({ name, control, className, checked, onClick, ...props }) {
  const { field } = useController({
    name,
    defaultValue: "",
    control,
  });
  return (
    <label
      className={`flex items-center justify-center text-white w-5 h-5 border-2 border-strock cursor-pointer ${
        checked && " bg-primary"
      } rounded ${className}`}
    >
      {checked && <CheckIcon />}
      <input type="checkbox" className="hidden" name={name} {...field} />
    </label>
  );
}

export default Checkbox;
