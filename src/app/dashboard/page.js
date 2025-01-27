"use client";
import SearchPanel from "@/app/components/dashboard/sidebar/search/searchPanel";
import ModalContainer from "@/app/components/common/modalContainer/modalContainer";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const isOpen = useSelector((state) => state.search.isOpen);
  return (
    <div>
      Dashboard
      {isOpen && <SearchPanel />}
    </div>
  );
}
