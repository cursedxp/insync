"use client";
import SearchPanel from "@/app/components/dashboard/sidebar/search/searchPanel";
import Chat from "@/app/components/chat/chat";
import { useSelector } from "react-redux";
export default function Dashboard() {
  const isOpen = useSelector((state) => state.search.isOpen);
  return <div className="flex">{isOpen && <SearchPanel />}</div>;
}
