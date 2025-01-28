"use client";
import ChatHeader from "./chatheader/chatHeader";
import UserDetails from "./userdetails/userDetails";
import ChatInput from "./chatinput/chatInput";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import ChatArea from "./chatarea/chatArea";
export default function Chat() {
  const detailsOpen = useSelector((state) => state.chat.detailsOpen);

  return (
    <div className="w-4/5 rounded-2xl h-full bg-white flex flex-col">
      <ChatHeader />
      <div className="flex flex-1 overflow-hidden">
        <div
          className={`${
            detailsOpen ? "w-3/4" : "w-full"
          } relative flex flex-col h-full`}
        >
          <div className="flex-1 overflow-hidden">
            <ChatArea />
          </div>
          <ChatInput />
        </div>
        {/* User Details */}
        <AnimatePresence>{detailsOpen && <UserDetails />}</AnimatePresence>
      </div>
    </div>
  );
}
