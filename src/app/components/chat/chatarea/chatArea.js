import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function ChatArea() {
  const messagesEndRef = useRef(null);
  // Sample messages - in a real app, this would come from a state management system
  const [messages] = useState([
    {
      id: 1,
      sender: "Jeniffer Wu",
      content: "Hey, how are you doing?",
      timestamp: "09:41 AM",
      isSender: false,
      avatar: "/images/users/user-1.jpg",
    },
    {
      id: 2,
      sender: "Me",
      content: "I'm doing great! Just working on some new features.",
      timestamp: "09:42 AM",
      isSender: true,
      avatar: "/images/user.jpg",
    },
    {
      id: 3,
      sender: "Jeniffer Wu",
      content:
        "That sounds interesting! What kind of features are you working on?",
      timestamp: "09:45 AM",
      isSender: false,
      avatar: "/images/users/user-1.jpg",
    },
    {
      id: 4,
      sender: "Me",
      content:
        "I'm working on a new chat interface with real-time messaging capabilities. It includes features like message history, user profiles, and typing indicators.",
      timestamp: "09:47 AM",
      isSender: true,
      avatar: "/images/user.jpg",
    },
    {
      id: 5,
      sender: "Jeniffer Wu",
      content:
        "That's amazing! Will it support file sharing and emoji reactions too?",
      timestamp: "09:48 AM",
      isSender: false,
      avatar: "/images/users/user-1.jpg",
    },
    {
      id: 6,
      sender: "Me",
      content:
        "Yes, absolutely! Those are planned for the next sprint. I'm also considering adding voice messages and video calls in the future.",
      timestamp: "09:50 AM",
      isSender: true,
      avatar: "/images/user.jpg",
    },
    {
      id: 7,
      sender: "Jeniffer Wu",
      content:
        "The video call feature would be really useful for our remote team meetings. Have you considered integration with calendar for scheduling?",
      timestamp: "09:52 AM",
      isSender: false,
      avatar: "/images/users/user-1.jpg",
    },
    {
      id: 8,
      sender: "Me",
      content:
        "That's a great suggestion! I'll add it to our feature backlog. We could potentially sync with Google Calendar or Outlook.",
      timestamp: "09:54 AM",
      isSender: true,
      avatar: "/images/user.jpg",
    },
    {
      id: 9,
      sender: "Jeniffer Wu",
      content:
        "Perfect! Let me know if you need any help with testing when it's ready. I'd be happy to provide feedback.",
      timestamp: "09:55 AM",
      isSender: false,
      avatar: "/images/users/user-1.jpg",
    },
    {
      id: 10,
      sender: "Me",
      content:
        "Thanks, I really appreciate that! I'll definitely take you up on the offer once we have a prototype ready.",
      timestamp: "09:56 AM",
      isSender: true,
      avatar: "/images/user.jpg",
    },
    {
      id: 11,
      sender: "Jeniffer Wu",
      content:
        "By the way, how are you handling the backend for this? Are you using WebSocket for real-time updates?",
      timestamp: "09:58 AM",
      isSender: false,
      avatar: "/images/users/user-1.jpg",
    },
    {
      id: 12,
      sender: "Me",
      content:
        "Yes, we're using WebSocket with Socket.io for real-time communication. It's working really well for instant message delivery and typing indicators.",
      timestamp: "10:00 AM",
      isSender: true,
      avatar: "/images/user.jpg",
    },
    {
      id: 13,
      sender: "Jeniffer Wu",
      content:
        "That's a solid choice! The performance must be great. Are you also implementing message persistence with a database?",
      timestamp: "10:02 AM",
      isSender: false,
      avatar: "/images/users/user-1.jpg",
    },
    {
      id: 14,
      sender: "Me",
      content:
        "Absolutely! We're using MongoDB for message storage. It gives us the flexibility we need for storing different types of messages and attachments.",
      timestamp: "10:03 AM",
      isSender: true,
      avatar: "/images/user.jpg",
    },
  ]);

  // Auto scroll to bottom on new messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="h-[calc(100vh-13rem)] overflow-y-auto px-4">
      <div className="space-y-4 py-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-3 ${
              message.isSender ? "flex-row-reverse" : ""
            }`}
          >
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src={message.avatar}
                alt={message.sender}
                fill
                className="rounded-full object-cover"
              />
            </div>

            <div
              className={`flex flex-col max-w-[70%] ${
                message.isSender ? "items-end" : ""
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-gray-600">{message.sender}</span>
                <span className="text-xs text-gray-400">
                  {message.timestamp}
                </span>
              </div>

              <div
                className={`rounded-2xl px-4 py-2 ${
                  message.isSender
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
