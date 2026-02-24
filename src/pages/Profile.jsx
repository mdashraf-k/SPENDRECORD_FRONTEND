import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { LuCheckCheck } from "react-icons/lu";
import { CiEdit } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
import Button from "../../ui/Button";
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
            <div className="w-32 h-32 rounded-full bg-linear-to-br  dark:bg-white  p-1 shadow-lg">
              <img
                alt="User Profile"
                className="w-full h-full rounded-full object-cover border-4 border-surface-light dark:border-surface-dark"
                src="https://cdn-icons-png.flaticon.com/512/615/615075.png"
              />
            </div>
            
          </div>
          <h1 className="mt-4 mb-2 text-xl font-bold text-gray-900 dark:text-white">
            {user.name}
          </h1>
          <h3 className="text-sm mb-1 text-gray-500 dark:text-gray-400">
            {user.email}
          </h3>
          <h3 className="text-sm text-gray-500 dark:text-gray-400">
            Join at :: {formatDateTime(user.created_at)}
          </h3>
        </div>
        <div className="space-y-6">
          <EditableField label="Name" name="name" defaultValue={user?.name} />
          <EditableField label="Email" name="email" defaultValue={user?.email} />
          <EditableField label="Username" name="username" defaultValue={user?.username} />

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
        <Button OnClick={logoutUser}>
          <MdLogout /> Logout
        </Button>
      </div>
    </div>
  );
}

export default Profile;
