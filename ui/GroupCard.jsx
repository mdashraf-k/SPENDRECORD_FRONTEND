import React from "react";
// import { IoRestaurant  } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";


function GroupCard({
  title = "Food",
  description = "Shared meals & groceries",
  // eslint-disable-next-line no-unused-vars
  Icon,
  color = "orange",
}) {
  return (
    <div className="group mb-2.5 relative cursor-pointer rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md active:scale-95 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center gap-4">
        {/* Icon Container - Using dynamic color mapping */}
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full bg-${color}-100 text-${color}-500 dark:bg-${color}-900/30 dark:text-${color}-400`}
        >
          <Icon />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>

        {/* Chevron */}
        <span className="material-icons-round text-gray-300 transition-colors group-hover:text-blue-500 dark:text-gray-600">
          <IoIosArrowForward />
        </span>
      </div>
    </div>
  );
}

export default GroupCard;
