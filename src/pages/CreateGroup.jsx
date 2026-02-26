import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { FaArrowLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { createGroup } from "../services/apiGroups.js";

function CreateGroup() {
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function onSubmit(data) {
    // console.log(data);
    async function fetch() {
      const res = createGroup(data);
      console.log(res);
      
    }
    fetch();
    navigate("/groups");
  }

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
        <h1 className="text-base sm:text-lg font-semibold">Create Group</h1>
        <div className="w-10"></div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar px-4 sm:px-6 md:px-8 pt-6 sm:pt-9 pb-20">
        <div className="md:max-w-sm md:mx-auto">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white dark:bg-text-primary-light flex items-center justify-center relative group">
              <img
                alt="Group avatar"
                className="w-full h-full rounded-full object-cover opacity-50"
                data-alt="Abstract vibrant green and white geometric pattern"
                src="/public/people.png"
              />
            </div>
          </div>
          <form>
            <div className="space-y-1.5 sm:space-y-2 mb-8 sm:mb-10">
              <label className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                Group Name
              </label>
              <input
                {...register("name", { required: true })}
                className="w-full bg-slate-200 dark:bg-slate-800 border-none rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg focus:ring-2 focus:ring-primary transition-all placeholder:text-slate-400 outline-none"
                placeholder="e.g. Groceries or Rent"
                type="text"
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2 mb-8 sm:mb-10">
              <label className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                Description
              </label>
              <input
                {...register("description", { required: true })}
                className="w-full bg-slate-200 dark:bg-slate-800 rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg focus:ring-2 focus:ring-primary transition-all placeholder:text-slate-400 outline-none"
                placeholder="Write your Description!!"
                type="text"
              />
            </div>
          </form>
        </div>
      </main>

      {/* Action Button - Pinned at bottom */}
      <div className="shrink-0 px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 pt-3 bg-linear-to-t from-slate-50 via-slate-50 to-transparent dark:from-slate-950 dark:via-slate-950">
        <div className="md:max-w-sm md:mx-auto">
          <Link to="/groups">
            <Button OnClick={handleSubmit(onSubmit)}>Create Group</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CreateGroup;
