"use client";
import FunctionBar from "./functionbar/functionBar";
import ConversationBar from "./coversationbar/conversationBar";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
export default function SideBar() {
  const currentFunctionTab = useSelector(
    (state) => state.app.currentFunctionTab
  );
  return (
    <div className="bg-white shadow-md flex justify-center rounded-2xl">
      <FunctionBar />
      <AnimatePresence>
        {currentFunctionTab === "chat" && <ConversationBar />}
      </AnimatePresence>
    </div>
  );
}
