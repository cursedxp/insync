import User from "./user/user";
import Search from "./search/search";
import Users from "./users/users";
export default function SideBar() {
  return (
    <div className="bg-white w-1/5 shadow-md flex flex-col gap-4 rounded-2xl">
      <User />
      <Search />
      <Users />
    </div>
  );
}
