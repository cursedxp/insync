import Image from "next/image";
import { FiFolder, FiSearch, FiMoreHorizontal } from "react-icons/fi";
export default function ChatHeader() {
  return (
    <div className="flex items-center justify-between p-2 w-full shadow-sm">
      <div className="flex items-center gap-2">
        <div className="relative w-12 h-12">
          <Image
            src="/images/users/user-1.jpg"
            alt="user"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium">Jeniffer Wu</p>
          <p className="text-xs text-gray-400">Online</p>
        </div>
      </div>
      <div className="flex items-center gap-4 p-2 bg-white ">
        <FiFolder className="w-5 h-5" />
        <FiSearch className="w-5 h-5" />
        <FiMoreHorizontal className="w-5 h-5" />
      </div>
    </div>
  );
}
