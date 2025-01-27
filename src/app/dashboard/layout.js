import SideBar from "@/app/components/dashboard/sidebar/sideBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-gray-100 flex">
      <SideBar />
      {children}
    </div>
  );
}
