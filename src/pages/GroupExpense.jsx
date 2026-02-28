import { FaArrowLeft, FaInfo } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { MdBlock } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import ExpenseCard from "../components/ExpenseCard";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { groupExpense, addExpence } from "../services/apiExpense";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { getAllMembers } from "../services/apiGroupMembers";
import { useMemo } from "react";
import { getGroups } from "../services/apiGroups";
import Loading from "../components/Loading";

function GroupExpense() {
  // id store group id
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm();
  const { data: user } = useCurrentUser();
  // console.log(user);

  const {
    data: groups,
    isLoading: isGroupLoading,
    isError: isGroupError,
    error: groupError,
  } = useQuery({
    queryKey: ["groups"],
    queryFn: getGroups,
  });
  const group = groups?.find((grp) => grp.id == Number(id));

  const {
    data: expences = [],
    isLoading: isExpenceLoading,
    isError: isExpenceError,
    error: expenceerror,
  } = useQuery({
    queryKey: ["group-expenses", id],
    queryFn: () => groupExpense(id),
    enabled: !!id,
  });
  // console.log(expences);
  const {
    data: group_members = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["group_members", id],
    queryFn: () => getAllMembers(id),
    enabled: !!id,
  });
  // console.log(group_members);

  const mutation = useMutation({
    mutationFn: addExpence,
    onSuccess: () => {
      queryClient.invalidateQueries(["group-expenses", id]);
    },
  });

  function handleAddExpence(data) {
    // console.log(data);
    mutation.mutate({
      group_id: id,
      payload: {
        amount: data.amount,
        description: data.description,
      },
    });
    reset();
  }
  const total = useMemo(() => {
    return expences.reduce((sum, e) => sum + Number(e.amount), 0);
  }, [expences]);

  const UserTotal = useMemo(() => {
    if (!user) return 0;

    return expences.reduce((sum, e) => {
      if (user?.id === e.user?.id) {
        return sum + Number(e.amount);
      }
      return sum;
    }, 0);
  }, [expences, user]);

  let perPersonshare = total / group_members.length;
  let leftBalanceAfterShare = UserTotal - perPersonshare;
  
  
  if (isLoading || isExpenceLoading || isGroupLoading) return <Loading />;
  if (isError || isExpenceError || isGroupError)
    console.log(error || expenceerror || groupError);

  return (
    <div className="fixed inset-0 z-40 flex flex-col bg-background-light dark:bg-background-dark max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
      {/* Header - pinned at top */}
      <header className="bg-surface-light dark:bg-surface-dark px-4 sm:px-6 md:px-8 pt-4 pb-2.5 shadow-sm z-20 flex items-center justify-between border-b border-gray-200 dark:border-gray-700 shrink-0">
        <Link
          to="/groups"
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-500 dark:text-gray-400"
        >
          <FaArrowLeft className="text-lg sm:text-xl md:text-2xl" />
        </Link>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
            <IoRestaurant className="text-base sm:text-lg md:text-xl" />
          </div>
          <h1 className="text-base sm:text-lg md:text-xl font-bold tracking-tight">
            {group.name}
          </h1>
        </div>
        <Link
          to={`/group_details/${id}`}
          className="p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-500 dark:text-gray-400"
        >
          <FaInfo className="text-lg sm:text-xl md:text-2xl" />
        </Link>
      </header>

      {/* Messages area - only this part scrolls, newest at bottom like WhatsApp */}
      <main className="flex-1 overflow-y-auto no-scrollbar flex flex-col-reverse px-4 sm:px-6 md:px-8 py-4 space-y-6 space-y-reverse">
        {[...expences].reverse().map((expence) => (
          <ExpenseCard
            user_type_style={user.id == expence.user.id ? "send" : "received"}
            key={expence.id}
            name={expence.user.name}
            amount={expence.amount}
            description={expence.description}
            time={expence.created_at}
          />
        ))}
        <div className="flex justify-center">
          <span className="text-xs font-medium text-gray-400 dark:text-gray-500 bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full">
            Today
          </span>
        </div>
      </main>

      {/* Bottom summary + input - pinned at bottom */}
      <div className="bg-gray-800 w-full dark:bg-surface-dark border-t pb-6 sm:pb-8 pt-3 sm:pt-4 px-3 sm:px-5 md:px-8 z-30 rounded-t-2xl sm:rounded-t-3xl shrink-0">
        <div className="mb-3 sm:mb-4 bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-100 dark:border-gray-700 flex justify-between items-center shadow-inner">
          <div className="flex flex-col">
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-0.5 sm:mb-1">
              Total Spend
            </span>
            <span className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">
              ₹{total}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-0.5 sm:mb-1">
              Your Share
            </span>
            <span className="text-sm sm:text-base text-gray-900 dark:text-white">
              ₹{perPersonshare.toFixed(2)}
            </span>
          </div>
          <div className="h-8 w-px bg-gray-300 dark:bg-gray-600 mx-1.5 sm:mx-2"></div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-primary font-semibold mb-0.5 sm:mb-1">
              Your Spend
            </span>
            <span className="text-base sm:text-lg md:text-xl font-bold text-primary">
              ₹{UserTotal}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-primary font-semibold mb-0.5 sm:mb-1">
              {leftBalanceAfterShare >= 0 ? "You get back" : "You owes"}
            </span>
            <span className="text-sm sm:text-base text-primary">
              ₹{leftBalanceAfterShare.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <form onSubmit={handleSubmit(handleAddExpence)} className="relative flex-1">
            <input
              {...register("amount", { required: true })}
              className="w-1/2 bg-gray-100 dark:bg-gray-800 text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 rounded-l-full border-r py-2.5 sm:py-3 pl-3 sm:pl-4 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-900 transition-all no-spinner"
              placeholder="Amount"
              type="number"
            />

            <input
              {...register("description")}
              className="w-1/2 bg-gray-100 dark:bg-gray-800 text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 rounded-r-full py-2.5 sm:py-3 pl-3 sm:pl-4 pr-10 sm:pr-12 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-900 transition-all border-none"
              placeholder="Details.."
              type="text"
            />
            <button
              disabled={mutation.isPending}
              className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 p-1 sm:p-1.5 bg-primary text-white rounded-full shadow-md hover:bg-indigo-600 transition-colors flex items-center justify-center"
            >
              {mutation.isPending ? (
                <MdBlock size={20} />
              ) : (
                <FaArrowUp size={20} />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GroupExpense;
