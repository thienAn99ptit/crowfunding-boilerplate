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
function SignIn() {
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
  const handleSignIn = (values) => {
    console.log({ values });
  };
  return (
    <div>
      <HeadSign
        title="Welcome Back!"
        description="Don’t have an account?  "
        link="Sign up"
        to="/sign-up"
      />
      <div className="">
        <button className="w-full border-[1px] border-strock dark:bg-darkStroke dark:border-darkStroke dark:text-white flex items-center justify-center gap-x-3 py-3 rounded-lg mb-5 text-base font-semibold text-text2">
          <GoogleIcon />
          Sign in with google
        </button>

        <form onSubmit={handleSubmit(handleSignIn)}>
          <Field>
            <Label htmlFor="email">Email *</Label>
            <Input
              type="email"
              name="email"
              error={errors.email?.message}
              control={control}
              placeholder="example@gmail.com"
            />
          </Field>
          <Field>
            <Label htmlFor="password">Password *</Label>
            <InputTogglePassword
              name="password"
              error={errors.password?.message?.message}
              control={control}
              placeholder="Create a password"
            />
          </Field>
          <div className="text-right mb-5">
            <NavLink
              className="text-sm font-medium text-primary"
              to="/forgot-password"
            >
              Forgot password
            </NavLink>
          </div>
          <div>
            <Button
              type="submit"
              className="min-h-[56px] rounded-lg text-white text-base font-semibold  py-3"
              kindOf="primary"
              isLoading={false}
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignIn;

// export default ErrorBoundary(SignUp, {
//   fallbackComponent: ErrorComponent,
// });
