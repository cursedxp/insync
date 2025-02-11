import { useState } from "react";
import Task from "./task";
import TaskContainer from "./taskContainer";
import { motion } from "framer-motion";
import {
  DndContext,
  DragOverlay,
  defaultDropAnimationSideEffects,
  pointerWithin,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      lastNote: {
        note: "Implement new design system components",
        createdAt: "2024-01-01",
        createdBy: {
          name: "Alex Dwyer",
          image: "/images/users/user-7.jpg",
        },
      },
      priority: "High",
      customer: {
        name: "Jeniffer Wu",
        image: "/images/users/user-1.jpg",
      },
    },
    {
      id: 2,
      lastNote: {
        note: "Connect backend endpoints with frontend",
        createdAt: "2024-01-01",
        createdBy: {
          name: "Alex Dwyer",
          image: "/images/users/user-7.jpg",
        },
      },
      priority: "High",
      customer: {
        name: "Ali Evans",
        image: "/images/users/user-5.jpg",
      },
    },
    {
      id: 3,
      lastNote: {
        note: "Write technical documentation for new features",
        createdAt: "2024-01-01",
        createdBy: {
          name: "Alex Dwyer",
          image: "/images/users/user-7.jpg",
        },
      },
      priority: "Medium",
      customer: {
        name: "Josh Zaita",
        image: "/images/users/user-2.jpg",
      },
    },
    {
      id: 4,
      lastNote: {
        note: "Review pull requests from team members",
        createdAt: "2024-01-01",
        createdBy: {
          name: "Alex Dwyer",
          image: "/images/users/user-7.jpg",
        },
      },
      priority: "Medium",
      customer: {
        name: "Young Alaska",
        image: "/images/users/user-3.jpg",
      },
    },
    {
      id: 5,
      lastNote: {
        note: "Address minor UI inconsistencies",
        createdAt: "2024-01-01",
        createdBy: {
          name: "Alex Dwyer",
          image: "/images/users/user-7.jpg",
        },
      },
      priority: "Low",
      customer: {
        name: "Jessica Smith",
        image: "/images/users/user-4.jpg",
      },
    },
  ]);
  const [activeTask, setActiveTask] = useState(null);

  const handleDragStart = (event) => {
    const taskId = parseInt(event.active.id.split("-")[1]);
    const task = tasks.find((t) => t.id === taskId);
    setActiveTask(task);
  };

  const handleDragOver = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    const activeTaskId = parseInt(activeId.split("-")[1]);

    if (["High", "Medium", "Low"].includes(overId)) {
      const activeTask = tasks.find((t) => t.id === activeTaskId);
      if (activeTask && activeTask.priority !== overId) {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === activeTaskId ? { ...task, priority: overId } : task
          )
        );
      }
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) {
      setActiveTask(null);
      return;
    }

    const activeId = active.id;
    const overId = over.id;

    const activeTaskId = parseInt(activeId.split("-")[1]);

    if (["High", "Medium", "Low"].includes(overId)) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === activeTaskId ? { ...task, priority: overId } : task
        )
      );
    } else {
      const overTaskId = parseInt(overId.split("-")[1]);

      setTasks((prevTasks) => {
        const oldIndex = prevTasks.findIndex((t) => t.id === activeTaskId);
        const newIndex = prevTasks.findIndex((t) => t.id === overTaskId);

        const activeTask = prevTasks[oldIndex];
        const overTask = prevTasks[newIndex];

        // Update priority if moving between columns
        if (activeTask.priority !== overTask.priority) {
          prevTasks[oldIndex] = { ...activeTask, priority: overTask.priority };
        }

        return arrayMove(prevTasks, oldIndex, newIndex);
      });
    }

    setActiveTask(null);
  };

  // Configure sensors with better defaults for sorting
  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 200ms, with tolerance of 5px of movement
    activationConstraint: {
      delay: 200,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };

  // Group tasks by priority
  const highPriorityTasks = tasks.filter((task) => task.priority === "High");
  const mediumPriorityTasks = tasks.filter(
    (task) => task.priority === "Medium"
  );
  const lowPriorityTasks = tasks.filter((task) => task.priority === "Low");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      className="w-full rounded-2xl h-full bg-white flex flex-col p-6"
    >
      <h1 className="text-2xl font-semibold mb-6">My Tasks</h1>
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCenter}
        measuring={{
          droppable: {
            strategy: pointerWithin,
          },
        }}
      >
        <div className="flex gap-4 overflow-x-auto h-full pb-4">
          <TaskContainer
            id="High"
            items={highPriorityTasks.map((task) => `task-${task.id}`)}
          >
            {highPriorityTasks.map((task) => (
              <Task key={`task-${task.id}`} id={task.id} task={task} />
            ))}
          </TaskContainer>
          <TaskContainer
            id="Medium"
            items={mediumPriorityTasks.map((task) => `task-${task.id}`)}
          >
            {mediumPriorityTasks.map((task) => (
              <Task key={`task-${task.id}`} id={task.id} task={task} />
            ))}
          </TaskContainer>
          <TaskContainer
            id="Low"
            items={lowPriorityTasks.map((task) => `task-${task.id}`)}
          >
            {lowPriorityTasks.map((task) => (
              <Task key={`task-${task.id}`} id={task.id} task={task} />
            ))}
          </TaskContainer>
        </div>

        <DragOverlay dropAnimation={dropAnimation}>
          {activeTask ? <Task id={activeTask.id} task={activeTask} /> : null}
        </DragOverlay>
      </DndContext>
    </motion.div>
  );
}
