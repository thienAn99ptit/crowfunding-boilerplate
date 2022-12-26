import { Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Image from "../../components/image/Image";
import images from "../../assets/images";
import ErrorComponent from "../../components/common/ErrorComponent";

function AuthenLayout({ children }) {
  return (
    <div className="relative bg-lite dark:bg-darkbg p-10 w-full min-h-screen isolate">
      <Link to="/" className="inline-block mb-5 lg:mb-[64px]">
        <Image src={images.Logo}></Image>
      </Link>
      <Image
        src={images.Ellipse}
        className="absolute bottom-0 left-0 right-0 -z-[1]"
      ></Image>
      <div className=" max-w-[328px] lg:max-w-[556px] bg-white dark:bg-darkSecondary rounded-xl mx-auto px-5 lg:px-16 py-8 lg:py-[50px] shadow-sm z-10">
        {children}
      </div>
    </div>
  );
}
export default AuthenLayout;

// export default ErrorBoundary(AuthenLayout, {
//   fallbackComponent: ErrorComponent,
// });
