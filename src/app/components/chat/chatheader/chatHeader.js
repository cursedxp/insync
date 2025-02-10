import Image from "next/image";
import {
  HiOutlineFolder,
  HiMagnifyingGlass,
  HiEllipsisHorizontal,
  HiOutlineChatBubbleLeft,
} from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { toggleDetails } from "@/app/store/slices/chatSlice";
import { setCurrentTab } from "@/app/store/slices/chatSlice";

export default function ChatHeader() {
  const dispatch = useDispatch();

  const handleDetailsOpen = () => {
    dispatch(toggleDetails());
  };

  return (
    <div className="flex items-center justify-between p-2 w-full shadow-sm">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={handleDetailsOpen}
      >
        <div className="relative w-10 h-10 ml-2">
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
        <button
          className="p-2 rounded-xl hover:bg-gray-100"
          onClick={() => dispatch(setCurrentTab("chat"))}
        >
          <HiOutlineChatBubbleLeft className="text-xl" />
        </button>
        <button
          className="p-2 rounded-xl hover:bg-gray-100"
          onClick={() => dispatch(setCurrentTab("files"))}
        >
          <HiOutlineFolder className="text-xl" />
        </button>

        <button className="p-2 rounded-xl hover:bg-gray-100">
          <HiMagnifyingGlass className="text-xl" />
        </button>
        <button className="p-2 rounded-xl hover:bg-gray-100">
          <HiEllipsisHorizontal className="text-xl" />
        </button>
      </div>
    </div>
  );
}
