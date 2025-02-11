"use client";
import ChatHeader from "./chatheader/chatHeader";
import UserDetails from "./userdetails/userDetails";
import ChatInput from "./chatinput/chatInput";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import ChatArea from "./chatarea/chatArea";
import Files from "./files/files";

export default function Chat() {
  const detailsOpen = useSelector((state) => state.chat.detailsOpen);
  const currentTab = useSelector((state) => state.chat.currentTab);

  return (
    <div className="w-full rounded-2xl h-full bg-white flex flex-col">
      <ChatHeader />
      <div className="flex overflow-hidden">
        <div
          className={`${
            detailsOpen ? "w-4/6" : "w-full"
          } relative flex flex-col h-full`}
        >
          {currentTab === "files" && <Files />}
          {currentTab === "chat" && (
            <>
              <ChatArea />
              <ChatInput className="pb-8 px-8 pt-4" />
            </>
          )}
        </div>
        <AnimatePresence>
          {detailsOpen && (
            <UserDetails
              className={`${
                detailsOpen ? "w-2/6" : "w-0"
              } relative flex flex-col h-full`}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
