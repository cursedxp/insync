import Image from "next/image";
import {
  FiPhone,
  FiMessageSquare,
  FiUser,
  FiBriefcase,
  FiMail,
  FiX,
  FiCircle,
} from "react-icons/fi";
import { motion } from "framer-motion";
import ChatInput from "../chatinput/chatInput";
import { useSelector, useDispatch } from "react-redux";
import { setDetailsClose } from "@/app/store/slices/chatSlice";

const mockMessages = [
  {
    id: 1,
    user: {
      name: "Jeniffer Wu",
      avatar: "/images/users/user-1.jpg",
    },
    message: "Customer requested a follow-up next week",
    timestamp: "12:30 PM",
    reactions: [{ emoji: "👍", count: 2 }],
  },
  {
    id: 2,
    user: {
      name: "Brandon Lee",
      avatar: "/images/users/user-2.jpg",
    },
    message: "Noted, I'll schedule it for next Tuesday",
    timestamp: "12:35 PM",
    reactions: [{ emoji: "✅", count: 1 }],
  },
  {
    id: 3,
    user: {
      name: "Sarah Chen",
      avatar: "/images/users/user-1.jpg",
    },
    message: "Great! Don't forget to prepare the presentation materials.",
    timestamp: "1:15 PM",
    reactions: [{ emoji: "🎯", count: 3 }],
  },
];

export default function UserDetails({ className }) {
  const chat = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setDetailsClose());
  };

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`${className} border-l flex flex-col`}
    >
      <div>
        <div className="absolute top-2 right-2">
          <button
            onClick={handleClose}
            className="hover:bg-gray-100 p-2 rounded-xl"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-col items-center my-8">
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
        <div className="border-t p-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <FiBriefcase size={16} className="text-gray-500" />
              <span className="text-gray-500">Company</span>
            </div>
            <div>
              <span>Dipa Inhouse Inc.</span>
            </div>

            <div className="flex items-center gap-2">
              <FiUser size={16} className="text-gray-500" />
              <span className="text-gray-500">Role</span>
            </div>
            <div>
              <span>Developer</span>
            </div>

            <div className="flex items-center gap-2">
              <FiPhone size={16} className="text-gray-500" />
              <span className="text-gray-500">Phone</span>
            </div>
            <div>
              <span>(48) 3870-2271</span>
            </div>

            <div className="flex items-center gap-2">
              <FiMail size={16} className="text-gray-500" />
              <span className="text-gray-500">Email</span>
            </div>
            <div>
              <span>brandon.lee@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCircle size={16} className="text-gray-500" />
              <span className="text-gray-500">Status</span>
            </div>
            <div className="items-center text-sm text-center px-2 py-1 rounded-md bg-green-300 text-green-800 max-w-fit">
              <span>Open</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="px-8 pt-0 flex-1 flex flex-col min-h-0">
          <h3 className="text-gray-500 text-sm mb-8">Notes</h3>
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-4">
              {mockMessages.map((msg) => (
                <div key={msg.id} className="flex items-start gap-2 group">
                  <div className="w-8 h-8 relative flex-shrink-0">
                    <Image
                      src={msg.user.avatar}
                      fill
                      className="rounded-full"
                      alt="User"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{msg.user.name}</span>
                      <span className="text-xs text-gray-500">
                        {msg.timestamp}
                      </span>
                    </div>
                    <p className="text-sm">{msg.message}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex -space-x-1">
                        {msg.reactions.map((reaction, index) => (
                          <div
                            key={index}
                            className="bg-gray-100 rounded-full px-2 py-1 text-xs flex items-center gap-1"
                          >
                            {reaction.emoji}{" "}
                            <span className="text-gray-600">
                              {reaction.count}
                            </span>
                          </div>
                        ))}
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-gray-600 text-sm">
                        <span className="text-xl">+</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-8 mt-auto">
          <ChatInput className="bg-white" />
        </div>
      </div>
    </motion.div>
  );
}
