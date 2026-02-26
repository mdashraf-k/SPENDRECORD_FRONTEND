import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { LuCheckCheck } from "react-icons/lu";
import { CiEdit } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
import Button from "../ui/Button";
import { logout } from "../services/apiAuth";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useQueryClient } from "@tanstack/react-query";
import EditableField from "../components/EditableField";
import { formatDateTime } from "../utils/formatTimeDate";

function Profile() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: user, isLoading, isError, error } = useCurrentUser();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  const logoutUser = async () => {
    await logout();
    queryClient.clear();
    navigate("/");
  };
// console.log(user);

 
  return (
    <div className="fixed inset-0 z-40 flex flex-col bg-slate-50 dark:bg-slate-950 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
      {/* Header */}
      <header className="px-4 sm:px-6 md:px-8 pt-4 pb-2.5 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 shrink-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <Link
          to="/groups"
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <FaArrowLeft className="text-lg sm:text-xl md:text-2xl" />
        </Link>
        <h1 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
          Profile
        </h1>
        <button className="p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <IoSettingsOutline className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300" />
        </button>
      </header>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto no-scrollbar px-4 sm:px-6 md:px-8 py-4 pb-28">
        <div className="flex flex-col items-center mb-6 sm:mb-8 relative">
          <div className="relative group">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-linear-to-br dark:bg-white p-1 shadow-lg">
              <img
                alt="User Profile"
                className="w-full h-full rounded-full object-cover border-4 border-surface-light dark:border-surface-dark"
                src="https://cdn-icons-png.flaticon.com/512/615/615075.png"
              />
            </div>
          </div>
          <h1 className="mt-3 sm:mt-4 mb-1 sm:mb-2 text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
            {user.name}
          </h1>
          <h3 className="text-xs sm:text-sm mb-0.5 sm:mb-1 text-gray-500 dark:text-gray-400">
            {user.email}
          </h3>
          <h3 className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Join at :: {formatDateTime(user.created_at)}
          </h3>
        </div>
        <div className="space-y-4 sm:space-y-6 flex-1 md:max-w-sm md:mx-auto">
          <EditableField label="Name" name="name" defaultValue={user?.name} />
          <EditableField label="Email" name="email" defaultValue={user?.email} />
          <EditableField label="Username" name="username" defaultValue={user?.username} />

          <button className="w-full flex items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group">
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <div className="p-1.5 sm:p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <FaLock className="text-base sm:text-lg md:text-xl text-primary dark:text-indigo-400" />
              </div>
              <span className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">
                 Change Password
              </span>
            </div>
            <IoIosArrowForward className="text-base sm:text-lg text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
          </button>
        </div>
      </main>

      {/* Fixed logout button */}
      <div className="shrink-0 px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 pt-3 bg-linear-to-t from-slate-50 via-slate-50 to-transparent dark:from-slate-950 dark:via-slate-950">
        <Button OnClick={logoutUser}>
          <MdLogout /> Logout
        </Button>
      </div>
    </div>
  );
}

export default Profile;
