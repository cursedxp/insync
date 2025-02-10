"use client";
import { FiSearch, FiEdit } from "react-icons/fi";
import { openSearch, closeSearch } from "@/app/store/slices/searchSlice";
import { useDispatch } from "react-redux";
export default function SidebarHeader() {
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(openSearch());
  };

  return (
    <div className="flex items-center justify-between px-4 pt-4">
      <h1 className="text-base font-bold">All Conversations</h1>
      <div className="flex gap-2">
        <button
          className=" rounded-xl p-2 hover:bg-gray-100"
          onClick={handleSearch}
        >
          <FiSearch className="text-lg" />
        </button>
        <button className=" rounded-xl p-2 hover:bg-gray-100">
          <FiEdit className="text-lg" />
        </button>
      </div>
    </div>
  );
}
