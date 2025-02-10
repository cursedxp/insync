import User from "./user/user";
import Search from "./search/search";
import Users from "./users/users";
import Filter from "./filter/filter";
import SidebarHeader from "./sidebarHeader/sidebarHeader";
import {
  HiChatBubbleLeftRight,
  HiRectangleStack,
  HiCalendarDays,
  HiUserGroup,
  HiCog6Tooth,
} from "react-icons/hi2";
import Image from "next/image";
export default function SideBar() {
  return (
    <div className="bg-white w-1/4 shadow-md flex rounded-2xl">
      <div className="flex flex-col w-1/6 h-full border-r border-slate-200 justify-between items-center">
        <div className="flex flex-col items-center px-2 gap-4">
          <div className="w-12 h-12 relative mt-4  rounded-full">
            <Image
              src="/images/user.jpg"
              alt="user"
              fill
              className="rounded-full border-[3px] border-green-500"
            />
          </div>
          {/* {AllConversations} */}
          <button className="w-12 h-12  rounded-xl flex items-center justify-center hover:bg-gray-100 relative">
            <HiChatBubbleLeftRight className="text-2xl" />
            <div className="absolute top-2 right-0 px-1 rounded-full min-w-5 min-h-5 flex items-center justify-center text-white text-xs z-20 bg-green-500">
              17
            </div>
          </button>
          {/* {TeamConversations} */}
          <button className="w-12 h-12 rounded-xl flex items-center justify-center hover:bg-gray-100 relative">
            <HiUserGroup className="text-2xl" />
            <div className="absolute top-2 right-0 px-1 rounded-full min-w-5 min-h-5 flex items-center justify-center text-white text-xs z-20 bg-green-500">
              1
            </div>
          </button>
          {/* {MyTasks} */}
          <button className="w-12 h-12 rounded-xl flex items-center justify-center hover:bg-gray-100">
            <HiRectangleStack className="text-2xl" />
          </button>
          {/* {MyReminders} */}
          <button className="w-12 h-12 rounded-xl flex items-center justify-center hover:bg-gray-100 relative">
            <HiCalendarDays className="text-2xl" />
            <div className="absolute top-2 right-0 px-1 rounded-full min-w-5 min-h-5 flex items-center justify-center text-white text-xs z-20 bg-red-500">
              2
            </div>
          </button>
          {/* {Settings} */}
        </div>
        <button className="w-12 h-12 rounded-xl flex items-center justify-center hover:bg-gray-100">
          <HiCog6Tooth className="text-2xl" />
        </button>
      </div>
      <div className="flex-1 flex-col gap-4">
        <SidebarHeader />
        {/* <User /> */}
        <Filter />
        <Users />
      </div>
    </div>
  );
}
