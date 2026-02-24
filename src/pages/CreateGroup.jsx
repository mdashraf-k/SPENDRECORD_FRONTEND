import { Link, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
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
    <div className="mt-6">
      <header className="flex items-center justify-between px-6 py-4">
        <Link to="/groups">
          <Button type="secondary">
            <FaArrowLeft />
          </Button>
        </Link>
      </header>
      <h1 className="text-2xl text-center font-bold tracking-tight">
        Create Group
      </h1>
      <div className="flex-1 overflow-y-auto px-6 pt-9 pb-32">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-white dark:bg-text-primary-light flex items-center justify-center relative group">

            <img
              alt="Group avatar"
              className="w-full  h-full rounded-full object-cover opacity-50"
              data-alt="Abstract vibrant green and white geometric pattern"
              src="/public/people.png"
            />
          </div>
        </div>
        <form>
          <div className="space-y-2 mb-10">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
              Group Name
            </label>
            <input
              {...register("name", { required: true })}
              className="w-full bg-slate-200 dark:bg-slate-800 border-none rounded-xl px-4 py-4 text-lg focus:ring-2 focus:ring-primary transition-all placeholder:text-slate-400 outline-none"
              placeholder="e.g. Groceries or Rent"
              type="text"
            />
          </div>

          <div className="space-y-2 mb-10">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
              Description
            </label>
            <input
              {...register("description", { required: true })}
              className="w-full bg-slate-200 dark:bg-slate-800  rounded-xl px-4 py-4 text-lg focus:ring-2 focus:ring-primary transition-all placeholder:text-slate-400 outline-none"
              placeholder="Write your Description!!"
              type="text"
            />
          </div>
          <Link to="/groups">
            <Button OnClick={handleSubmit(onSubmit)}>Create Group</Button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default CreateGroup;
