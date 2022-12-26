import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  CampaignIcon,
  DashboardIcon,
  LogoutIcon,
  Payment,
  PaymentIcon,
  ProfileIcon,
  WithdrawIcon,
} from "../../components/icons/Icons";

const sidebarLinks = [
  {
    icon: <DashboardIcon></DashboardIcon>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <CampaignIcon></CampaignIcon>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <PaymentIcon></PaymentIcon>,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <WithdrawIcon></WithdrawIcon>,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <ProfileIcon></ProfileIcon>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <LogoutIcon></LogoutIcon>,
    title: "Logout",
    url: "/logout",
  },
  //   {
  //     icon: <IconDarkmode></IconDarkmode>,
  //     title: "Light/Dark",
  //     url: "/#",
  //     onClick: () => {},
  //   },
];
function DashboardSidebar() {
  const navlinkClass =
    "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8  last:mt-auto last:bg-white last:shadow-sdprimary";
  const dispatch = useDispatch();
  return (
    <aside>
      <div className="w-full md:w-[76px] rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] px-[14px] py-10 flex flex-col flex-shrink-0">
        {sidebarLinks.map((link) => {
          if (link.url === "/logout") {
            return (
              <button
                onClick={() => dispatch()}
                className={navlinkClass}
                key={link.title}
              >
                <span>{link.icon}</span>
                <span className="md:hidden">{link.title}</span>
              </button>
            );
          }
          return (
            <NavLink
              to={link.url}
              key={link.title}
              className={({ isActive }) =>
                isActive
                  ? `${navlinkClass} text-primary bg-primary bg-opacity-20`
                  : `${navlinkClass} text-icon-color`
              }
            >
              <span>{link.icon}</span>
              <span className="md:hidden">{link.title}</span>
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
}

export default DashboardSidebar;
