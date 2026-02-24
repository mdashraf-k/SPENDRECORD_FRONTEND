import { IoCloseSharp } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { seachUser } from "../services/apiUser";
import { useDebounce } from "../hooks/useDebounce";
import { useParams } from "react-router";
import { addMember } from "../services/apiGroupMembers";
import { useNavigate } from "react-router";

function SearchPop({ onClick }) {
  const {id} = useParams();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
console.log(id);

  const { data: users = [] } = useQuery({
    queryKey: ["search_users", debouncedQuery],
    queryFn: () => seachUser(debouncedQuery),
    enabled: debouncedQuery.length > 3,
  });
  // console.log(users);
  const navigate = useNavigate();
  async function addMemberToGroup(group_id, member_id) {
      console.log(group_id, member_id);
      await addMember(group_id, member_id);
      navigate(`/group_details/${group_id}`);
  }
  return (
    <>
      <div className="absolute inset-0 z-50 flex items-center justify-center p-6">
        <div className="relative w-full max-w-sm bg-background-light dark:bg-background-dark rounded-4xl shadow-2xl border border-slate-100 dark:border-slate-700/50 overflow-hidden">
          <div className="flex items-center justify-between px-6 pt-6 pb-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Add Member
            </h3>
            <button
              onClick={onClick}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <span className="text-[20px]">
                <IoCloseSharp />
              </span>
            </button>
          </div>
          <div className="px-6 pb-4">
            <div className="relative group">
              <input
                className="w-full bg-slate-50 dark:bg-slate-700 border-none rounded-2xl py-3 pl-10 pr-4 text-m focus:ring-2 focus:ring-primary/50 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all shadow-inner"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                placeholder="Search by name or email"
                type="text"
              />
            </div>
          </div>
          <div className="px-6 pb-8">
            <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 px-1">
              Suggested Contacts
            </p>
            <div className="space-y-3">
              {/* List of Users */}
              {users.map((user) => (
              <div className="flex items-center justify-between p-2.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group cursor-pointer border border-transparent hover:border-slate-100 dark:hover:border-slate-700/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800 border-2 border-transparent group-hover:border-primary/20">
                    <img
                      alt="Emma Wilson"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE2SUu6RLqOWDjkriw3-GzGCuPaCeyXWHsZysNRjB_xaHR2CGqJxpcQgiUgUhZPkZrikXCYtPwMs--6p_hcPEJ2jR2hfE3MYMGVOGx4hplTldD5VX-dEUrFTQqgfuxuNoUp9LEFPoDa6WUVSCMnxHvC0DDqGeF3Rf0s8othoHox-GkWaRWYTFUqdG89sGJi-uU7lgPCKc-EeEkapx4bClaHSVh8U8RHhvlsERzqasdMCV2uZrwjI7RqURH6eZfaT7wZnym1k7dmaUG"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                      {user.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {user.username}
                    </p>
                  </div>
                </div>
                <button onClick={() => addMemberToGroup(id, user.id)} className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                  <span className="text-[18px] font-bold">
                    <IoMdAdd />
                  </span>
                </button>
              </div>
            ))}

            </div>
          </div>
          <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={onClick}
              className="w-full py-3.5 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 active:scale-95 transition-all"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchPop;
