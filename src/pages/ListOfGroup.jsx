import GroupCard from "../../ui/GroupCard";
import { FaRupeeSign, FaMoon, FaSun   } from "react-icons/fa";
import { IoRestaurant, IoPersonSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
// import { useEffect } from "react";
import {getGroups} from "../services/apiGroups.js";
import { useQuery } from "@tanstack/react-query";

function GroupDetails() {
  const { data, isLoading, isError, error} = useQuery({
    queryKey: ["groups"],
    queryFn: getGroups,
  })
  // console.log(data);
  
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div className="w-full mx-auto max-w-md bg-background-light dark:bg-background-dark h-screen  flex flex-col shadow-2xl overflow-hidden">

      <main className="flex-1 overflow-y-auto px-5 py-6 space-y-4 no-scrollbar pb-24">
        <div className="flex justify-between items-baseline mb-2">
          <h2 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
            Your Groups
          </h2>
        </div>
        {data.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map(group => (
          <Link key={group.id} to={`/group_expenses/${group.id}`}>
          <GroupCard
            title={group.name}
            description={group.description}
            Icon={IoRestaurant}
          />
        </Link>
        ))}
        
        
      </main>

      <div className="absolute bottom-0 w-full p-6 bg-linear-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark pointer-events-none flex justify-between items-end pb-8">
        <button className="pointer-events-auto h-12 w-12 rounded-full bg-card-light dark:bg-card-dark shadow-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:scale-105 active:scale-95 transition-all">
          <span className="text-2xl">
            <Link to="/profile">
              <IoPersonSharp />
            </Link>
          </span>
        </button>
        <button className="pointer-events-auto h-16 w-16 rounded-full bg-primary shadow-xl shadow-primary/30 flex items-center justify-center text-white hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all">
          <span className="text-3xl">
            <Link to="/create_group">
              <FaPlus />
            </Link>
          </span>
        </button>
      </div>
    </div>
  );
}

export default GroupDetails;
