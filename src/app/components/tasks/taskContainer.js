"use client";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export default function TaskContainer({ id, items, children }) {
  const { setNodeRef, isOver } = useDroppable({
    id: id,
  });

  const getPriorityStyle = () => {
    switch (id) {
      case "High":
        return "bg-red-100 text-red-500 text-xs";
      case "Medium":
        return "bg-yellow-200 text-yellow-500 text-xs";
      case "Low":
        return "bg-green-200 text-green-500 text-xs";
      default:
        return "bg-gray-100 text-gray-500 text-xs";
    }
  };

  const getPriorityDot = () => {
    switch (id) {
      case "High":
        return "bg-red-500";
      case "Medium":
        return "bg-yellow-500";
      case "Low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="flex-1 min-w-[300px]">
      <div
        className={`inline-flex items-center gap-2 px-2 py-1 rounded-md mb-4 ${getPriorityStyle()}`}
      >
        <div className={`w-2 h-2 rounded-full ${getPriorityDot()}`}></div>
        <h2 className="font-semibold ">{id}</h2>
      </div>
      <div
        ref={setNodeRef}
        className={`
          space-y-4 min-h-[200px] p-4 rounded-lg
          ${isOver ? "bg-gray-100" : "bg-gray-50"}
          transition-all duration-200 ease-in-out
        `}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {children}
          {!children?.length && (
            <div
              className={`
              text-center py-8 text-gray-500
              border-2 border-dashed rounded-lg
              ${isOver ? "border-gray-300 bg-gray-100" : "border-gray-300"}
            `}
            >
              Drop tasks here
            </div>
          )}
        </SortableContext>
      </div>
    </div>
  );
}
