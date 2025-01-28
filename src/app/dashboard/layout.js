import SideBar from "@/app/components/dashboard/sidebar/sideBar";
import Chat from "@/app/components/chat/chat";
export default function DashboardLayout({ children }) {
  return (
    <div className="bg-gray-100 w-screen ">
      <div className="p-4 h-screen flex gap-4">
        <SideBar />
        <Chat />
      </div>
      {children}
    </div>
  );
}
