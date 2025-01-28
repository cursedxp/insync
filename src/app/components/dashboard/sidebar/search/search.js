"use client";

import { useSelector, useDispatch } from "react-redux";
import { openSearch, closeSearch } from "@/app/store/slices/searchSlice";

export default function Search() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.search.isOpen);

  const handleOpen = () => {
    dispatch(openSearch());
  };

  const handleClose = () => {
    dispatch(closeSearch());
  };

  return (
    <div
      className="flex bg-gray-100 p-2 mx-4 rounded-xl text-gray-400 cursor-pointer"
      onClick={handleOpen}
    >
      Search
    </div>
  );
}
