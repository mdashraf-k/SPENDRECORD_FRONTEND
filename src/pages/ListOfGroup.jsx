import GroupCard from "../../ui/GroupCard";
import { useDarkMode } from "../hooks/useDarkMode";
import { FaRupeeSign, FaMoon, FaSun   } from "react-icons/fa";
import { IoRestaurant, IoPersonSharp } from "react-icons/io5";
import { GiClothes, GiBookAura } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

function GroupDetails() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div className="w-full mx-auto max-w-md bg-background-light dark:bg-background-dark min-h-screen relative flex flex-col shadow-2xl overflow-hidden">
      <header className="px-6 pt-12 pb-4 flex justify-between items-center bg-card-light/80 dark:bg-card-dark/80 backdrop-blur-lg sticky top-0 z-20 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">
            Spend
            <span className="text-indigo-600 dark:text-indigo-400">Record</span>
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            to="/donate"
            
          >
            <Button type="round"><FaRupeeSign /></Button>
            
          </Link>
          <Button type="round" OnClick={() => setIsDark(!isDark)}>{isDark ? <FaSun /> : <FaMoon />}</Button>
      
        </div>
      </header>
      <main className="flex-1 overflow-y-auto px-5 py-6 space-y-4 no-scrollbar pb-24">
        <div className="flex justify-between items-baseline mb-2">
          <h2 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
            Your Groups
          </h2>
        </div>
        <Link to="/group_expenses">
          <GroupCard
            title="Food"
            description="Shared meals &amp; groceries"
            Icon={IoRestaurant}
          />
        </Link>
        <Link to="/group_expenses">
          <GroupCard
            title="Cloth"
            description="Shopping &amp; Laundry"
            Icon={GiClothes}
          />
        </Link>
        <Link to="/group_expenses">
          <GroupCard
            title="Books"
            description="Study materials &amp; stationary"
            Icon={GiBookAura}
          />
        </Link>
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
