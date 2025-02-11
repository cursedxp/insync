import Users from "../users/users";
import Filter from "../filter/filter";
import SidebarHeader from "../sidebarHeader/sidebarHeader";

export default function ConversationBar() {
  return (
    <div className="flex-1 flex-col gap-4 border-l border-slate-100 ">
      <SidebarHeader />
      <Filter />
      <Users />
    </div>
  );
}
