import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import Button from "../../ui/Button";

function Profile() {
  return (
    <div className="mt-6">
      <div className="px-6 pb-2 pt-2 flex items-center justify-between shrink-0">
        <Link to="/groups">
          <Button type="secondary">
            <FaArrowLeft />
          </Button>
        </Link>
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
          Profile
        </h1>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <span className="text-2xl text-gray-600 dark:text-gray-300">
            <IoSettingsOutline />
          </span>
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-4 pb-24 scroll-smooth">
        <div className="flex flex-col items-center mb-8 relative">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full bg-linear-to-br from-primary to-purple-500 p-1 shadow-lg">
              <img
                alt="User Profile"
                className="w-full h-full rounded-full object-cover border-4 border-surface-light dark:border-surface-dark"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCztlNOuxu65d4jjjN9cTxD1I06tV98iUxd6NVWD3EJdmumt6rscjoAYgH_HTRdr0sDvKRkBCszLZYvzANPcjgJftFo_enJ-6MieOdLhKxvy1z42igyeaAn1QP_j_tnAN2zdmfDy82Km6sA_-VNRMtcRqoVsiCS9l5nEOa8sySen3hKO_5a1dIh4-kSXA9nQEZ38yMv-XrcJJo2-MogIDMHCuBj5O_I_tzhXX13DHOwWDa2cLlVdJEQ3iLOckj5IM_NGD65CvaAlo6E"
              />
            </div>
            <button className="absolute bottom-0 right-1 bg-primary text-white p-2 rounded-full shadow-md hover:bg-primary-dark transition-colors border-2 border-surface-light dark:border-surface-dark flex items-center justify-center">
              <span className="material-icons-round text-lg">edit</span>
            </button>
          </div>
          <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
            Sarah Wilson
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            sarah.w@example.com
          </p>
        </div>
        <div className="space-y-6">
          <div className="group relative bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-4 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all">
            <div className="flex justify-between items-start">
              <div className="w-full">
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                  Name
                </label>
                <input
                  className="bg-transparent w-full text-gray-900 dark:text-white font-medium border-none focus:ring-0 p-0 placeholder-gray-400"
                  type="text"
                  value="Sarah Wilson"
                />
              </div>
              <button className="dark:text-primary hover:text-primary-dark text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute right-4 top-4">
                Edit
              </button>
            </div>
          </div>
          <div className="group relative bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-4 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all">
            <div className="flex justify-between items-start">
              <div className="w-full">
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                  Email
                </label>
                <input
                  className="bg-transparent w-full text-gray-900 dark:text-white font-medium border-none focus:ring-0 p-0 placeholder-gray-400"
                  type="email"
                  value="sarah.w@example.com"
                />
              </div>
              <button className="text-primary hover:text-primary-dark text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute right-4 top-4">
                Edit
              </button>
            </div>
          </div>
          <div className="group relative bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-4 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all">
            <div className="flex justify-between items-start">
              <div className="w-full">
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                  Username
                </label>
                <div className="flex items-center">
                  <span className="text-gray-400 mr-1">@</span>
                  <input
                    className="bg-transparent w-full text-gray-900 dark:text-white font-medium border-none focus:ring-0 p-0 placeholder-gray-400"
                    type="text"
                    value="sarah_bills"
                  />
                </div>
              </div>
              <button className="text-primary hover:text-primary-dark text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute right-4 top-4">
                Edit
              </button>
            </div>
          </div>
          <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <span className="material-icons-round text-primary dark:text-indigo-400 text-xl">
                  <FaLock />
                </span>
              </div>
              <span className="font-medium text-gray-900 dark:text-white">
                Change Password
              </span>
            </div>
            <span className="material-icons-round text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">
              <IoIosArrowForward />
            </span>
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-surface-light via-surface-light to-transparent dark:from-surface-dark dark:via-surface-dark pt-12">
       <Link to="/">
        <Button>
          <MdLogout /> Logout
        </Button></Link>
      </div>
    </div>
  );
}

export default Profile;
