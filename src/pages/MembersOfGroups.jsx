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
    <div className="max-w-md mx-auto min-h-screen flex flex-col relative overflow-hidden">
      <div className="h-12 w-full"></div>
      <header className="flex items-center justify-between">
        <Link
          to={`/group_expenses/${id}`}
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <span className="text-2xl">
            <FaArrowLeft />
          </span>
        </Link>
        <h1 className="text-lg font-semibold">Group Info</h1>
        <div className="w-10"></div>
      </header>
      <main className="flex-1 ios-scroll overflow-y-auto px-6 pb-20">
        <div className="flex flex-col items-center mt-6 text-center">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full ring-4 ring-slate-100 dark:ring-slate-800 overflow-hidden bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
              <img
                alt="Roommates Group Photo"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALR1O51PfdqpQgmFRr2obWsgW_LzsHl-hztC-lQ1DSiHveC92O3L1yenSdYYKUwWXxC56OOxOYmeLwD42RpE0mx6lLw4_6O2s9nI7YaZF-7EKiWEG0msjCFQh6y4a6jPvEQFWuY59HBJlLTu3x778iK2LWXwkj6Au0FfjGHlHKs0FPZZuQi1LoY6TAJ8tPOO8fZPU1vovWrModKCj59zuIchH43cMfyzGOzAYE7HWPZE30oUSZoQ0VSCuwuP60BHS00BtUozjeE7nv"
              />
            </div>
          </div>
          <h2 className="mt-6 text-2xl font-bold tracking-tight">
            {group.name}
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-xs text-sm leading-relaxed">
            {group.description}
          </p>
          <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-xs text-sm leading-relaxed">
            Created at : {formatDateTime(group.created_at)}
          </p>
          <div className="flex items-center gap-4 mt-8">
            <button onClick={handleSearchPop} className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-semibold rounded-full hover:opacity-90 active:scale-95 transition-all">
              <span className="text-lg">
                <IoMdPersonAdd />
              </span>
              <span>Add</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 border border-slate-200 dark:border-slate-700 font-semibold rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95 transition-all">
              <span className="text-lg">
                <CiEdit />
              </span>
              <span>Edit</span>
            </button>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold tracking-tight">Group members</h3>
            <span className="text-xs font-medium text-black dark:text-slate-500 uppercase tracking-widest">
              {group_members.length} Members
            </span>
          </div>
          {/* Search POP component implemented here */}
          {searchPop && <SearchPop onClick={handleSearchPop}/>}
          <div className="space-y-4">
            {group_members.map((member) => (
              <MemberCard
                key={member.id}
                name={member.user.name}
                isAdmin={member.role}
                join_date={member.joined_at}
              />
            ))}
          </div>
          <button className="w-full mt-10 py-4 flex items-center justify-center gap-2 text-red-500 font-semibold hover:bg-red-50 dark:hover:bg-red-500/10 rounded-2xl transition-colors">
            <span>Leave Group</span>
          </button>
        </div>
      </main>
    </div>
  );
}

export default MembersOfGroups;
