import { FaArrowRight, FaLock } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <main className=" max-w-107.5 px-8 pt-10 pb-12 flex flex-col min-h-screen">
        <Link to="/">
          <Button type="secondary">
            <FaArrowLeft />
          </Button>
        </Link>
        <div className="flex flex-col items-center mt-12 mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Create Account
          </h1>
          <p className="text-slate-500 dark:text-primary/60 text-center font-medium">
            Start tracking shared expenses with your roommates today
          </p>
        </div>

        <div>
          <form>
            <div className="pb-6">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300 ml-1">
                Name
              </label>

              <input
                {...register("name", { required: true })}
                className="w-full bg-slate-200 dark:bg-slate-800  rounded-xl px-4 py-4 text-lg focus:ring-2 focus:ring-primary transition-all placeholder:text-slate-400 outline-none"
                placeholder="Choose a username"
                type="text"
              />
            </div>
            <div className="pb-6">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-white ml-1">
                Username
              </label>
              <input
                {...register("username", { required: true })}
                className="w-full bg-slate-200 dark:bg-slate-800  rounded-xl px-4 py-4 text-lg focus:ring-2 focus:ring-primary transition-all placeholder:text-slate-400 outline-none"
                placeholder="Choose a username"
                type="text"
              />
            </div>

            <div className="pb-6">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-white ml-1">
                Email
              </label>

              <input
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                className="w-full bg-slate-200 dark:bg-slate-800  rounded-xl px-4 py-4 text-lg focus:ring-2 focus:ring-primary transition-all placeholder:text-slate-400 outline-none"
                placeholder="Enter your email"
                type="email"
              />
            </div>

            <div className="pb-10">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-white ml-1">
                Password
              </label>

              <input
                {...register("password", { required: true })}
                className="w-full bg-slate-200 dark:bg-slate-800  rounded-xl px-4 py-4 text-lg focus:ring-2 focus:ring-primary transition-all placeholder:text-slate-400 outline-none"
                placeholder="Create a password"
                type="password"
              />
            </div>

            <Button OnClick={handleSubmit(onSubmit)}>
              <FaArrowRight /> Sign Up
            </Button>
          </form>
        </div>

        <footer className="mt-auto pt-10 flex flex-col items-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Already have an account?
            <Link
              to="/login"
              className="text-primary font-bold hover:underline decoration-2 underline-offset-4 ml-1"
              href="#"
            >
              Log In
            </Link>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default Register;
