import { lazy } from "react";

const SignUp = lazy(() => import("../pages/sign/SignUp"));
const SignIn = lazy(() => import("../pages/sign/SignIn"));
const ForgotPassword = lazy(() => import("../pages/sign/ForgotPassword"));
// dashboard
const DashboardHome = lazy(() => import("../pages/dashboard/DashboardHome"));
// campaign
const CampaignHome = lazy(() => import("../pages/campaign/CampaignHome"));
const CampaignStart = lazy(() => import("../pages/campaign/CampaignStart"));

const privaryRoute = [
  {
    element: SignUp,
    path: "/sign-up",
    layout: "authen",
  },
  {
    element: SignIn,
    path: "/sign-in",
    layout: "authen",
  },
  {
    element: ForgotPassword,
    path: "/forgot-password",
    layout: "authen",
  },
  {
    element: DashboardHome,
    path: "/",
    layout: "dashboard",
  },
  {
    element: CampaignHome,
    path: "/campaign",
    layout: "dashboard",
  },
  {
    element: CampaignStart,
    path: "/start-campaign",
    layout: "dashboard",
  },
];

const publicRoute = [];
export { privaryRoute, publicRoute };
