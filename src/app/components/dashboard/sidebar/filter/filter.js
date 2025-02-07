"use client";
import { motion } from "framer-motion";
import { useState, useCallback } from "react";

export default function Filter() {
  const [currentTab, setCurrentTab] = useState("Open");

  const handleTabChange = useCallback((title) => {
    setCurrentTab(title);
  }, []);

  const Tab = ({ title, currentTab, setCurrentTab }) => {
    return (
      <div
        className={`py-2 px-5 hover:scale-105 transition-all duration-300 cursor-pointer ${
          currentTab === title
            ? " bg-white rounded-xl shadow-md text-blue-500 "
            : ""
        }`}
        onClick={() => setCurrentTab(title)}
      >
        {title}
      </div>
    );
  };

  return (
    <div className="flex w-full justify-between relative p-4">
      <div className="flex justify-between gap-2 bg-gray-100 w-full p-1 rounded-xl text-gray-400 text-sm">
        <Tab
          title="Open"
          currentTab={currentTab}
          setCurrentTab={handleTabChange}
        />

        <Tab
          title="Pending"
          currentTab={currentTab}
          setCurrentTab={handleTabChange}
        />

        <Tab
          title="Closed"
          currentTab={currentTab}
          setCurrentTab={handleTabChange}
        />
      </div>
    </div>
  );
}
