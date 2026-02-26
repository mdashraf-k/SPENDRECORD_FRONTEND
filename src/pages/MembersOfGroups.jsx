import { FaArrowLeft } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router";
import { useParams } from "react-router";
import MemberCard from "../components/MemberCard";
import { useQuery } from "@tanstack/react-query";
import { getAllMembers } from "../services/apiGroupMembers";
import { formatDateTime } from "../utils/formatTimeDate";
import { getGroups } from "../services/apiGroups";
import SearchPop from "../components/SearchPop";
import { useState } from "react";
import { Key } from "lucide-react";

function MembersOfGroups() {
  const [searchPop, setSearchPop] = useState(false);
  // this is a group id
  const { id } = useParams();

  const { data: groups } = useQuery({
    queryKey: ["groups"],
    queryFn: getGroups,
  });
  const {
    data: group_members,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["group_members"],
    queryFn: () => getAllMembers(id),
    enabled: !!id,
  });
  // console.log(group_members);
  
  
  const group = groups?.find(grp => grp.id === Number(id));
  // console.log(group);
  function handleSearchPop() {
    setSearchPop(!searchPop);
  }
  if (isLoading) return <p>Loading</p>;
  if (isError) console.log(error);

  return (
    <div className="fixed inset-0 z-40 flex flex-col bg-slate-50 dark:bg-slate-950 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
      {/* Header */}
      <header className="px-4 sm:px-6 md:px-8 pt-4 pb-2.5 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 shrink-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <Link
          to={`/group_expenses/${id}`}
          className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <FaArrowLeft className="text-lg sm:text-xl md:text-2xl" />
        </Link>
        <h1 className="text-base sm:text-lg font-semibold">Group Info</h1>
        <div className="w-10"></div>
      </header>

      {/* Scrollable content */}
      <main className="flex-1 overflow-y-auto no-scrollbar px-4 sm:px-6 md:px-8 pb-20">
        <div className="flex flex-col items-center mt-6 text-center">
          <div className="relative group">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full ring-4 ring-slate-100 dark:ring-slate-800 overflow-hidden bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
              <img
                alt="Roommates Group Photo"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALR1O51PfdqpQgmFRr2obWsgW_LzsHl-hztC-lQ1DSiHveC92O3L1yenSdYYKUwWXxC56OOxOYmeLwD42RpE0mx6lLw4_6O2s9nI7YaZF-7EKiWEG0msjCFQh6y4a6jPvEQFWuY59HBJlLTu3x778iK2LWXwkj6Au0FfjGHlHKs0FPZZuQi1LoY6TAJ8tPOO8fZPU1vovWrModKCj59zuIchH43cMfyzGOzAYE7HWPZE30oUSZoQ0VSCuwuP60BHS00BtUozjeE7nv"
              />
            </div>
          </div>
          <h2 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-bold tracking-tight">
            {group.name}
          </h2>
          <p className="mt-1.5 sm:mt-2 text-slate-500 dark:text-slate-400 max-w-xs text-xs sm:text-sm leading-relaxed">
            {group.description}
          </p>
          <p className="mt-1 sm:mt-2 text-slate-500 dark:text-slate-400 max-w-xs text-xs sm:text-sm leading-relaxed">
            Created at : {formatDateTime(group.created_at)}
          </p>
          <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button onClick={handleSearchPop} className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-primary text-white text-sm sm:text-base font-semibold rounded-full hover:opacity-90 active:scale-95 transition-all">
              <IoMdPersonAdd className="text-base sm:text-lg" />
              <span>Add</span>
            </button>
            <button className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 border border-slate-200 dark:border-slate-700 text-sm sm:text-base font-semibold rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95 transition-all">
              <CiEdit className="text-base sm:text-lg" />
              <span>Edit</span>
            </button>
          </div>
        </div>
        <div className="mt-8 sm:mt-12">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-base sm:text-lg font-bold tracking-tight">Group members</h3>
            <span className="text-[10px] sm:text-xs font-medium text-black dark:text-slate-500 uppercase tracking-widest">
              {group_members.length} Members
            </span>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {group_members.map((member) => (
              <MemberCard
                key={member.id}
                name={member.user.name}
                isAdmin={member.role}
                join_date={member.joined_at}
              />
            ))}
          </div>
          <button className="w-full mt-8 sm:mt-10 py-3 sm:py-4 flex items-center justify-center gap-2 text-red-500 text-sm sm:text-base font-semibold hover:bg-red-50 dark:hover:bg-red-500/10 rounded-2xl transition-colors">
            <span>Leave Group</span>
          </button>
        </div>
      </main>

      {/* Search popup with blur overlay */}
      {searchPop && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleSearchPop}></div>
          <SearchPop onClick={handleSearchPop} />
        </div>
      )}
    </div>
  );
}

export default MembersOfGroups;
