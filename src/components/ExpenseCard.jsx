import { formatDateTime } from "../utils/formatTimeDate";

function ExpenseCard({ user_type_style, name, amount, description, time }) {
  const user = {
    received: "flex ml-2 flex-col space-y-1 items-start",
    send: "flex flex-col mr-3 space-y-1 items-end",
  };
  return (
    <>
      <div className={user[user_type_style] || user.received}>
        <div className="flex items-end space-x-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 text-lg font-bold shrink-0">
            {name[0].toUpperCase()}
          </div>
          <div className="bg-surface-light dark:bg-surface-dark px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 dark:border-gray-700 max-w-full">
            <p className="text-sm  font-extrabold text-gray-900 dark:text-white">
              ₹{amount}
            </p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {description}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              By {name[0].toUpperCase()+ name.slice(1)}
            </p>
          </div>
        </div>
        <span className="text-[10px] text-gray-400 ml-10">
          {formatDateTime(time)}
        </span>
      </div>
    </>
  );
}

export default ExpenseCard;
