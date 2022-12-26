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
    fullName: yup.string().required("This field is registered"),
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
function SignUp() {
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
      fullName: "",
      email: "",
      password: "",
      term: true,
    },
  });
  const termWatch = watch("term");
  const handleSignUp = (values) => {
    console.log({ values });
  };
  return (
    <div>
      <HeadSign
        title="Sign Up"
        description="Already have an account? "
        link="Sign in"
        to="/sign-in"
      />
      <div className="">
        <button className="w-full border-[1px] border-strock dark:bg-darkStroke dark:border-darkStroke dark:text-white flex items-center justify-center gap-x-3 py-3 rounded-lg mb-5 text-base font-semibold text-text2">
          <GoogleIcon />
          Sign up with google
        </button>
        <div className="text-center">
          <NavLink className="text-text2  text-sm font-normal dark:text-white">
            Or sign up with email
          </NavLink>
        </div>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <Field>
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              type="text"
              name="fullName"
              control={control}
              placeholder="Jhon Doe"
              error={errors.fullName?.message}
            />
          </Field>
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
          <FieldTerm>
            <Checkbox
              name="term"
              id="term"
              control={control}
              checked={termWatch === true}
            ></Checkbox>
            <p className="lg:text-sm text-xs text-text2 dark:text-text3 font-normal lg: font-normal flex-1 ">
              I agree to the{" "}
              <NavLink className="text-secondary underline">
                Tearms of Use
              </NavLink>{" "}
              and have read and understand the{" "}
              <NavLink className="text-secondary underline">
                Privacy policy
              </NavLink>
              .
            </p>
          </FieldTerm>
          <div>
            <Button
              type="submit"
              className="min-h-[56px] rounded-lg text-white text-base font-semibold  py-3"
              kindOf="primary"
              isLoading={false}
            >
              Create my account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUp;

// export default ErrorBoundary(SignUp, {
//   fallbackComponent: ErrorComponent,
// });
