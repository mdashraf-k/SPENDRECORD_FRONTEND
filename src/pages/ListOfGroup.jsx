import GroupCard from "../ui/GroupCard.jsx";
import { FaRupeeSign, FaMoon, FaSun } from "react-icons/fa";
import { IoRestaurant, IoPersonSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../ui/Button.jsx";
// import { useEffect } from "react";
import { getGroups } from "../services/apiGroups.js";
import { useQuery } from "@tanstack/react-query";

function GroupDetails() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["groups"],
    queryFn: getGroups,
  });
  // console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div className="flex-1 flex flex-col relative w-full h-full">
      <div className="fixed top-14 left-0 right-0 z-10 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto bg-slate-50 dark:bg-slate-950 px-5 pt-6 pb-2">
        <h2 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
          Your Groups
        </h2>
      </div>
      <main className="flex-1 overflow-y-auto px-5 pt-18 space-y-4 no-scrollbar pb-24">
        {data
          .slice()
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .map((group) => (
            <Link key={group.id} to={`/group_expenses/${group.id}`}>
              <GroupCard
                title={group.name}
                description={group.description}
                Icon={IoRestaurant}
              />
            </Link>
          ))}
      </main>

      <div className="fixed bottom-0 left-0 right-0 mx-auto w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl pointer-events-none">
        <div className="px-5 sm:px-7 md:px-9 pb-8 pt-12 bg-linear-to-t from-background-light via-background-light/90 to-transparent dark:from-background-dark dark:via-background-dark/90 flex justify-between items-end">
          <Link
            to="/profile"
            className="pointer-events-auto h-12 w-12 rounded-full bg-card-light dark:bg-card-dark shadow-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:scale-105 active:scale-95 transition-all"
          >
            <IoPersonSharp className="text-xl" />
          </Link>
          <Link
            to="/create_group"
            className="pointer-events-auto h-16 w-16 rounded-full bg-primary shadow-xl shadow-primary/30 flex items-center justify-center text-white hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
          >
            <FaPlus className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GroupDetails;
