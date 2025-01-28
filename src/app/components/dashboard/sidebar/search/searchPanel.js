import { useDispatch } from "react-redux";
import { closeSearch } from "@/app/store/slices/searchSlice";
import ModalContainer from "@/app/components/common/modalContainer/modalContainer";
import { FiX, FiSearch } from "react-icons/fi";

export default function SearchPanel() {
  const dispatch = useDispatch();
  const recentContacts = [
    { name: "Nicolas Wu", phone: "(48) 3090-2851" },
    { name: "Alia Zaita", phone: "(48) 4423-0974" },
    { name: "Young Alaska", phone: "(215) 1003-8210" },
    { name: "Angelina Evelyn", phone: "(48) 9098-1226" },
  ];

  return (
    <ModalContainer className="">
      <div className="bg-[#1a1a1a] p-4 rounded-lg text-gray-300 w-[600px] relative">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-4">
            <button className="text-gray-400 hover:text-gray-200">
              Contact
            </button>
          </div>
          <button
            onClick={() => dispatch(closeSearch())}
            className="text-gray-400 hover:text-gray-200"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <FiSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search message, threads or people.."
            className="w-full bg-[#2a2a2a] rounded-md py-2 pl-10 pr-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
        </div>

        <div className="text-xs text-gray-500 mb-3">RECENT</div>

        <div className="mt-6">
          <div className="space-y-4">
            {recentContacts.map((contact, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-sm">
                  {contact.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium">{contact.name}</p>
                  <p className="text-xs text-gray-500">{contact.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}
