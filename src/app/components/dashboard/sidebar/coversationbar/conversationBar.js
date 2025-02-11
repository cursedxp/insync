import Users from "../users/users";
import Filter from "../filter/filter";
import SidebarHeader from "../sidebarHeader/sidebarHeader";
import { motion, AnimatePresence } from "framer-motion";

export default function ConversationBar({ onExitComplete }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onAnimationComplete={(definition) => {
        if (definition === "exit") {
          onExitComplete?.();
        }
      }}
    >
      <div className="flex-1 flex-col gap-4 border-l border-slate-100">
        <SidebarHeader />
        <Filter />
        <Users />
      </div>
    </motion.div>
  );
}
