"use client";
import SideBar from "@/app/components/dashboard/sidebar/sideBar";
import Chat from "@/app/components/chat/chat";
import { useSelector } from "react-redux";
export default function DashboardLayout({ children }) {
  const currentFunctionTab = useSelector(
    (state) => state.app.currentFunctionTab
  );
  return (
    <div className="bg-gray-100 w-screen ">
      <div className="p-4 h-screen flex gap-4">
        <SideBar />
        {currentFunctionTab === "chat" && <Chat />}
      </div>
      {children}
    </div>
  );
}
