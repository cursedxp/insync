"use client";
import Image from "next/image";
import ChatHeader from "./chatheader/chatHeader";
import {
  FiPhone,
  FiMessageSquare,
  FiUser,
  FiBriefcase,
  FiMail,
  FiMapPin,
  FiGlobe,
  FiHash,
} from "react-icons/fi";

export default function Chat() {
  return (
    <div className="w-4/5 rounded-2xl h-full bg-white flex flex-col">
      <ChatHeader />
      <div className="flex flex-1">
        <div className="w-3/4"></div>
        <div className="w-1/4 border-l  overflow-y-auto p-4">
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-16 h-16 mb-2">
              <Image
                src="/images/users/user-1.jpg"
                fill
                className="rounded-full"
                alt="Profile"
              />
            </div>

            <h2 className="text-lg font-medium">Jeniffer Wu</h2>
            <div className="flex gap-4 mt-2">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <FiPhone className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <FiMessageSquare className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <FiUser className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-gray-500 text-sm mb-4">PROFILE</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FiBriefcase size={16} />
                  <span>Dipa Inhouse Inc.</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiUser size={16} />
                  <span>Developer</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiPhone size={16} />
                  <span>(48) 3870-2271</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMail size={16} />
                  <span>brandon.lee@gmail.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-gray-500 text-sm mb-4">ADDRESS</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FiMapPin size={16} />
                  <span>San Diego</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin size={16} />
                  <span>California</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiGlobe size={16} />
                  <span>United States</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
