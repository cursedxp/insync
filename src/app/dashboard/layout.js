"use client";
import SideBar from "@/app/components/dashboard/sidebar/sideBar";
import Chat from "@/app/components/chat/chat";
import Tasks from "@/app/components/tasks/tasks";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function DashboardLayout({ children }) {
  const [showContent, setShowContent] = useState(false);
  const currentFunctionTab = useSelector(
    (state) => state.app.currentFunctionTab
  );

  useEffect(() => {
    if (currentFunctionTab !== "chat") {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 300); // Match this with ConversationBar exit animation duration
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [currentFunctionTab]);

  return (
    <div className="bg-gray-100 w-screen">
      <div className="p-4 h-screen flex gap-4">
        <SideBar />
        <AnimatePresence mode="wait">
          {currentFunctionTab === "chat" && <Chat key="chat" />}
          {currentFunctionTab === "tasks" && showContent && (
            <Tasks key="tasks" />
          )}
        </AnimatePresence>
      </div>
      {children}
    </div>
  );
}
