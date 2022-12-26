import Overlay from "../../components/overlay/OverLay";
import DashboardHead from "../../modules/dashboard/DashboardHead";
import DashboardSidebar from "../../modules/dashboard/DashboardSidebar";

function LayoutDashboard({ children }) {
  return (
    <div className="p-10 bg-lite min-h-screen">
      {/* <Overlay></Overlay> */}
      <div className="mb-8">
        <DashboardHead />
      </div>
      <div className="flex gap-x-10">
        <DashboardSidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

export default LayoutDashboard;
