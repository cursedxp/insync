import Image from "next/image";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

export default function Task({ id, task }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: `task-${id}`,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    position: "relative",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        bg-white rounded-lg p-4 shadow-sm border border-gray-100
        ${isDragging ? "z-50 shadow-lg" : ""}
        ${isDragging ? "cursor-grabbing" : "cursor-grab"}
        transition-shadow duration-200
        hover:shadow-md
      `}
    >
      {isDragging && (
        <div className="absolute inset-0 border-2 border-blue-500 rounded-lg pointer-events-none" />
      )}

      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="relative w-10 h-10">
            <Image
              src={task.customer.image}
              alt={task.customer.name}
              fill
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-medium">{task.customer.name}</p>
          </div>
        </div>
      </div>

      {/* Last Notes Section */}
      <div className="mt-4 bg-slate-100 rounded-xl p-2">
        <div className="flex items-start gap-2">
          <div className="relative w-6 h-6 flex-shrink-0">
            <Image
              src={task.lastNote.createdBy.image}
              alt={task.lastNote.createdBy.name}
              fill
              className="rounded-full"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2">
              <div className="text-xs text-gray-500 mb-1">
                {task.lastNote.createdBy.name}
              </div>
              <div className="text-xs text-gray-500 mb-1">
                {task.lastNote.createdAt}
              </div>
            </div>
            <p className="text-sm text-gray-700">{task.lastNote.note}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
