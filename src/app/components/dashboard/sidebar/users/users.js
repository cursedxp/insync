"use client";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Users() {
  const users = [
    {
      name: "Jane Hill",
      numberOfMessages: 3,
      image: "/images/users/user-6.jpg",
      status: "new",
    },
    {
      name: "Jeniffer Wu",
      numberOfMessages: 10,
      image: "/images/users/user-1.jpg",
      priority: "High",
      lastMessageBy: "Alex Dwyer",
      status: "assigned",
    },
    {
      name: "Ali Evans",
      numberOfMessages: 5,
      image: "/images/users/user-5.jpg",
      priority: "Medium",
      lastMessageBy: "Alex Dwyer",
      status: "assigned",
    },
    {
      name: "Josh Zaita",
      numberOfMessages: 0,
      image: "/images/users/user-2.jpg",
      priority: "Low",
      lastMessageBy: "Alex Dwyer",
    },
    {
      name: "Jessica Smith",
      numberOfMessages: 0,
      image: "/images/users/user-4.jpg",
      priority: "Low",
      lastMessageBy: "Alex Dwyer",
    },
    {
      name: "Young Alaska",
      numberOfMessages: 2,
      image: "/images/users/user-3.jpg",
      priority: "Medium",
    },
  ];

  // Sort users to show new messages first
  const sortedUsers = [...users].sort((a, b) => {
    if (a.status === "new" && b.status !== "new") return -1;
    if (a.status !== "new" && b.status === "new") return 1;
    return 0;
  });

  return (
    <motion.ul
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col px-4 gap-2"
    >
      {sortedUsers.map((user) => (
        <motion.li
          whileHover={{ scale: 1.01 }}
          key={uuidv4()}
          className="hover:bg-slate-100 cursor-pointer px-4 py-3 hover:shadow-sm rounded-2xl"
        >
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <Image
                  src={user.image}
                  alt="User"
                  fill
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-md font-medium">{user.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {user.status === "new" && (
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                  New
                </span>
              )}
              {user.numberOfMessages > 0 && (
                <div className="rounded-full min-w-5 min-h-5 flex items-center justify-center bg-green-500 text-white text-xs px-1 py-0.5">
                  {user.numberOfMessages}
                </div>
              )}
            </div>
          </div>
          {user.status === "assigned" && (
            <div className="flex-1 items-center gap-2 mt-3">
              <div className="flex  items-center gap-2">
                <div className="flex items-center gap-2">
                  {user.priority && (
                    <>
                      {user.priority === "High" && (
                        <div className="bg-red-100 text-xs px-2 py-1 rounded-md text-red-500 flex items-center gap-2">
                          <div className="bg-red-500 w-2 h-2 rounded-full"></div>
                          {user.priority}
                        </div>
                      )}
                      {user.priority === "Medium" && (
                        <div className="bg-yellow-200 text-xs px-2 py-1 rounded-md text-yellow-500 flex items-center gap-2">
                          <div className="bg-yellow-500 w-2 h-2 rounded-full"></div>
                          {user.priority}
                        </div>
                      )}
                      {user.priority === "Low" && (
                        <div className="bg-green-200 text-xs px-2 py-1 rounded-md text-green-500 flex items-center gap-2">
                          <div className="bg-green-500 w-2 h-2 rounded-full"></div>
                          {user.priority}
                        </div>
                      )}
                    </>
                  )}
                </div>
                {user.lastMessageBy && (
                  <div className="relative w-6 h-6">
                    <Image
                      src="/images/users/user-7.jpg"
                      alt="User"
                      fill
                      className="rounded-full"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
}
