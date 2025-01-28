"use client";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Users() {
  const users = [
    {
      name: "Jeniffer Wu",
      numberOfMessages: 10,
      image: "/images/users/user-1.jpg",
    },
    {
      name: "Ali Evans",
      numberOfMessages: 5,
      image: "/images/users/user-5.jpg",
    },
    {
      name: "Josh Zaita",
      numberOfMessages: 0,
      image: "/images/users/user-2.jpg",
    },
    {
      name: "Jessica Smith",
      numberOfMessages: 0,
      image: "/images/users/user-4.jpg",
    },
    {
      name: "Young Alaska",
      numberOfMessages: 2,
      image: "/images/users/user-3.jpg",
    },
  ];

  return (
    <motion.ul
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col"
    >
      {users.map((user) => (
        <motion.li
          whileHover={{ scale: 1.01 }}
          key={uuidv4()}
          className="hover:bg-gray-100 cursor-pointer px-4 py-3 hover:shadow-sm"
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
                {user.numberOfMessages > 0 && (
                  <p className="text-xs text-gray-400">
                    Waiting for response...
                  </p>
                )}
              </div>
            </div>
            {user.numberOfMessages > 0 && (
              <div className="rounded-xl bg-green-500 text-white text-xs px-2 py-1">
                {user.numberOfMessages}
              </div>
            )}
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
}
