import { FaArrowLeft } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
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
import { getGroups } from "../services/apiGroups"

function GroupExpense() {
  // id store group id
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { register, handleSubmit } = useForm();
  const { data: user } = useCurrentUser();
  // console.log(user);

  const { data: groups, isLoading: isGroupLoading, isError: isGroupError, error: groupError} = useQuery({
      queryKey: ["groups"],
      queryFn: getGroups,
    })
    const group = groups?.find((grp) => grp.id == Number(id))
    
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
  let leftBalanceAfterShare = UserTotal - perPersonshare

  if (isLoading || isExpenceLoading || isGroupLoading) return <p>Loading</p>;
  if (isError || isExpenceError || isGroupError) console.log(error || expenceerror || groupError);

  return (
    <div>
      <div className="w-full max-w-md bg-background-light dark:bg-background-dark h-screen relative flex flex-col shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
        <header className="bg-surface-light dark:bg-surface-dark px-4 pt-12 pb-4 shadow-sm z-20 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
          <Link
            to="/groups"
            className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-500 dark:text-gray-400"
          >
            <span className=" text-2xl">
              <FaArrowLeft />
            </span>
          </Link>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
              <span className="material-icons-round text-xl">
                <IoRestaurant />
              </span>
            </div>
            <h1 className="text-xl font-bold tracking-tight">{group.name}</h1>
          </div>
          <Link
            to={`/group_details/${id}`}
            className="p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-500 dark:text-gray-400"
          >
            <span className=" text-2xl">
              <SlOptionsVertical />
            </span>
          </Link>
        </header>
        <main className="flex-1 pb-63 md:pb-50 overflow-y-auto no-scrollbar space-y-6 bg-background-light dark:bg-background-dark">
          <div className="flex justify-center my-4">
            <span className="text-xs font-medium text-gray-400 dark:text-gray-500 bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full">
              Today
            </span>
          </div>

          {expences.map((expence) => (
            <ExpenseCard
              user_type_style={user.id == expence.user.id ? "send" : "received"}
              key={expence.id}
              name={expence.user.name}
              amount={expence.amount}
              description={expence.description}
              time={expence.created_at}
            />
          ))}
        </main>
        <div className="fixed bottom-0 right-0   bg-gray-800 left-0 w-full dark:bg-surface-dark border-t  pb-8 pt-4 px-4 z-30 rounded-t-3xl">
          <div className="mb-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 flex justify-between items-center shadow-inner">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-1">
                Total Spend
              </span>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                ₹{total}
              </span>
              <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-1">
                Your Share
              </span>
              <span className="text-gray-900 dark:text-white">₹{perPersonshare}</span>
            </div>
            <div className="h-8 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>
            <div className="flex flex-col items-end">
              <span className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">
                Your Spend
              </span>
              <span className="text-xl font-bold text-primary">
                ₹{UserTotal}
              </span>
              <span className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">
                {leftBalanceAfterShare >= 0 ?"You get back" : "You owes"}
              </span>
              <span className=" text-primary">
                ₹{leftBalanceAfterShare}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <input
                {...register("amount", { required: true })}
                className="w-1/2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 rounded-l-full border-r py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-900 transition-all"
                placeholder="Amount"
                type="number"
              />

              <input
                {...register("description")}
                className="w-1/2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 rounded-r-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-900 transition-all border-none"
                placeholder="Expense details.."
                type="text"
              />
              <button
                onClick={handleSubmit(handleAddExpence)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-primary text-white rounded-full shadow-md hover:bg-indigo-600 transition-colors flex items-center justify-center"
              >
                <span className=" text-lg">
                  <FaArrowUp />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupExpense;
