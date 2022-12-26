import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Field from "../../components/field/Field";
import { GoogleIcon } from "../../components/icons/Icons";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import ErrorComponent from "../../components/common/ErrorComponent";
import FieldTerm from "../../components/field/FieldTerm";
import InputTogglePassword from "../../components/input/InputTogglePassword";
import Button from "../../components/button/Button";
import Checkbox from "../../components/checkbox/Checkbox";
import HeadSign from "../../layouts/authenLayout/headSign/HeadSign";
const schema = yup
  .object({
    email: yup
      .string()
      .email("This email already registered ")
      .required("This field is registered"),
    password: yup
      .string()
      .min(8, { message: "Password must be 8 character " })
      .required("This field is registered"),
  })
  .required();
function ForgotPassword() {
  const {
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const termWatch = watch("term");
  const handleSend = (values) => {
    console.log({ values });
  };
  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-5 dark:text-white">
        Forgot Password
      </h1>
      <div className="mb-5">
        <p className="text-sm font-normal dark:text-text3">
          Please Enter the OTP you receive to
        </p>
        <p className="text-sm font-normal dark:text-white">
          hellouihut@gmail.com
        </p>
      </div>
      <form onSubmit={handleSubmit(handleSend)}>
        <div className="flex gap-x-5 mb-5">
          <input
            type="number"
            maxLength="1"
            className="w-[50px] outline-none h-[72px] text-center font-semibold text-lg dark:text-white border dark: border-strock dark:bg-darkSecondary rounded-md "
          />
          <input
            type="number"
            maxLength="1"
            className="w-[50px] outline-none h-[72px] text-center font-semibold text-lg dark:text-white border border-strock dark:bg-darkSecondary rounded-md "
          />
          <input
            type="number"
            maxLength="1"
            className="w-[50px] outline-none h-[72px] text-center font-semibold text-lg dark:text-white border border-strock dark:bg-darkSecondary rounded-md "
          />
          <input
            type="number"
            maxLength="1"
            className="w-[50px] outline-none h-[72px] text-center font-semibold text-lg dark:text-white border border-strock dark:bg-darkSecondary rounded-md "
          />
        </div>
        <div className="mb-7">
          <span className="font-semibold text-sm text-secondary ">
            Resend OTP
          </span>
        </div>
        <div>
          <Button
            type="submit"
            className="min-h-[56px] rounded-lg text-white text-base font-semibold py-3 mb-7"
            kindOf="primary"
            isLoading={false}
          >
            Confirm
          </Button>
        </div>
        <div>
          <NavLink
            to="/sign-in"
            className="font-semibold text-sm text-secondary "
          >
            Back to Login
          </NavLink>
        </div>
      </form>
    </div>
  );
}
export default ForgotPassword;

// export default ErrorBoundary(SignUp, {
//   fallbackComponent: ErrorComponent,
// });
