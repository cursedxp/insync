import { useState } from "react";
import { FiSmile, FiPaperclip, FiMoreHorizontal } from "react-icons/fi";

export default function ChatInput() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log(message);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full p-4 bg-white">
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Write your SMS message here..."
          className="w-full px-4 pt-3 pb-4 text-gray-700 placeholder:text-gray-400 text-[15px] outline-none border-none rounded-lg focus:ring-0"
        />

        <div className="flex items-center justify-between px-4 pb-3">
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-gray-600">
              <FiSmile className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <FiPaperclip className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <FiMoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={handleSend}
            className={`px-4 py-1.5 rounded-md ${
              message.trim()
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "bg-gray-100 text-gray-400"
            } transition-colors text-sm font-medium`}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
