/* eslint-disable no-unused-vars */
import { FaArrowRight, FaLock } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import { login } from "../services/apiAuth";
import { useQueryClient } from "@tanstack/react-query";
import { getUserData } from "../services/apiUser";
import { useCurrentUser } from "../hooks/useCurrentUser";

function Login() {
  const queryClient = useQueryClient();
  const naviagte = useNavigate();
  const { data: user } = useCurrentUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // if (user) return <Navigate to="/groups" replace />;
  async function onSubmit(data) {
    // console.log(data);
    const res = await login(data);
    if (res != 200) {
      return "Invalid Details";
    }
    queryClient.clear();
    await queryClient.prefetchQuery({
      queryKey: ["profile"],
      queryFn: getUserData,
    });
    naviagte("/groups");
  }

  return (
    <main className="flex-1 flex flex-col px-8 pt-10 pb-12">
        <Link to="/">
          <Button type="secondary">
            <FaArrowLeft />
          </Button>
        </Link>
        <div className="flex flex-col items-center mt-12 mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Login</h1>
          <p className="text-slate-500 dark:text-primary/60 text-center font-medium">
            Shared living, simplified spending.
          </p>
        </div>

        <form>
          <div className="pb-10">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 px-1">
              Username or Email
            </label>

            <input
              {...register("identifier", { required: true })}
              className="w-full bg-slate-200 dark:bg-slate-800  rounded-xl px-4 py-4 text-lg focus:ring-2 focus:ring-primary transition-all placeholder:text-slate-400 outline-none"
              placeholder="e.g., alex@home.com"
              type="text"
            />
          </div>
          <div className="pb-10">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 px-1">
              Password
            </label>
            <div className="relative">
              <input
                {...register("password", { required: true })}
                className="w-full bg-slate-200 dark:bg-slate-800  rounded-xl px-4 py-4 text-lg focus:ring-2 focus:ring-primary transition-all placeholder:text-slate-400 outline-none"
                placeholder="••••••••"
                type="password"
              />
              <span className="material-icons absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl cursor-pointer">
                <FaLock />
              </span>
            </div>
            <div className="flex justify-end mt-3">
              <a
                className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </div>
          <Button OnClick={handleSubmit(onSubmit)}>
            <FaArrowRight />
            Log In
          </Button>
        </form>

        <div className="mt-auto pb-10 text-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Don't have an account?
            <Link
              to="/signup"
              className="text-primary font-bold ml-1 hover:underline"
              href="#"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </main>
  );
}

export default Login;
