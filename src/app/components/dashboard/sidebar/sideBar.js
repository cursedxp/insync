import User from "./user/user";
import Search from "./search/search";
export default function SideBar() {
  return (
    <div className="bg-white h-screen w-1/5 shadow-md p-4 flex flex-col gap-4">
      <User />
      <Search />
    </div>
  );
}
