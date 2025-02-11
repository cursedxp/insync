"use client";
import { useState } from "react";
import FunctionBar from "./functionbar/functionBar";
import ConversationBar from "./coversationbar/conversationBar";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

export default function SideBar() {
  const [isConversationBarExited, setIsConversationBarExited] = useState(true);
  const currentFunctionTab = useSelector(
    (state) => state.app.currentFunctionTab
  );

  const handleConversationBarExit = () => {
    setIsConversationBarExited(true);
  };

  // Reset the exit state when conversation bar should show
  if (currentFunctionTab === "chat" && isConversationBarExited) {
    setIsConversationBarExited(false);
  }

  return (
    <div className="bg-white shadow-md flex justify-center rounded-2xl">
      <FunctionBar />
      <AnimatePresence onExitComplete={handleConversationBarExit}>
        {currentFunctionTab === "chat" && (
          <ConversationBar onExitComplete={handleConversationBarExit} />
        )}
      </AnimatePresence>
    </div>
  );
}
