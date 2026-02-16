import { FaArrowLeft } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { FaArrowUp } from "react-icons/fa";
import {Link} from "react-router-dom"
function GroupExpense() {
  return (
    <div>
      <div class="w-full max-w-md bg-background-light dark:bg-background-dark h-screen relative flex flex-col overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
        <header class="bg-surface-light dark:bg-surface-dark px-4 pt-12 pb-4 shadow-sm z-20 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
          <Link to="/groups" class="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-500 dark:text-gray-400">
            <span class="material-icons-round text-2xl">
              <FaArrowLeft/>
            </span>
          </Link>
          <div class="flex items-center space-x-2">
            <div class="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
              <span class="material-icons-round text-xl"><IoRestaurant/></span>
            </div>
            <h1 class="text-xl font-bold tracking-tight">Food</h1>
          </div>
          <button class="p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-500 dark:text-gray-400">
            <span class=" text-2xl"><SlOptionsVertical/></span>
          </button>
        </header>
        <main class="flex-1 overflow-y-auto no-scrollbar p-4 space-y-6 bg-background-light dark:bg-background-dark">
          <div class="flex justify-center my-4">
            <span class="text-xs font-medium text-gray-400 dark:text-gray-500 bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full">
              Today
            </span>
          </div>
          <div class="flex flex-col space-y-1 items-start">
            <div class="flex items-end space-x-2">
              <div class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 text-xs font-bold shrink-0">
                U1
              </div>
              <div class="bg-surface-light dark:bg-surface-dark px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 dark:border-gray-700 max-w-[80%]">
                <p class="text-sm font-medium text-gray-900 dark:text-white">
                  Grocery Run
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Paid by Alex
                </p>
              </div>
            </div>
            <span class="text-[10px] text-gray-400 ml-10">
              $45.00 • 10:30 AM
            </span>
          </div>
          <div class="flex flex-col space-y-1 items-end">
            <div class="flex items-end space-x-2 flex-row-reverse space-x-reverse">
              <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
                Me
              </div>
              <div class="bg-primary/10 dark:bg-primary/20 px-4 py-3 rounded-2xl rounded-br-none max-w-[80%]">
                <p class="text-sm font-medium text-gray-900 dark:text-white">
                  Coffee Beans
                </p>
                <p class="text-xs text-primary dark:text-indigo-300 mt-1">
                  Paid by You
                </p>
              </div>
            </div>
            <span class="text-[10px] text-gray-400 mr-10">
              $12.50 • 11:15 AM
            </span>
          </div>
          <div class="flex flex-col space-y-1 items-start">
            <div class="flex items-end space-x-2">
              <div class="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-300 text-xs font-bold shrink-0">
                U3
              </div>
              <div class="bg-surface-light dark:bg-surface-dark px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 dark:border-gray-700 max-w-[80%]">
                <p class="text-sm font-medium text-gray-900 dark:text-white">
                  Pizza Night
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Paid by Sarah
                </p>
              </div>
            </div>
            <span class="text-[10px] text-gray-400 ml-10">
              $32.00 • 1:45 PM
            </span>
          </div>
          <div class="flex justify-center my-6">
            <span class="text-xs text-gray-400 italic">
              User 2 settled up with User 1
            </span>
          </div>
          <div class="flex flex-col space-y-1 items-start pb-24">
            <div class="flex items-end space-x-2">
              <div class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 text-xs font-bold shrink-0">
                U1
              </div>
              <div class="bg-surface-light dark:bg-surface-dark px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 dark:border-gray-700 max-w-[80%]">
                <p class="text-sm font-medium text-gray-900 dark:text-white">
                  Milk &amp; Eggs
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Paid by Alex
                </p>
              </div>
            </div>
            <span class="text-[10px] text-gray-400 ml-10">$8.20 • 4:20 PM</span>
          </div>
        </main>
        <div class="absolute bottom-0 left-0 w-full bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-700 pb-8 pt-4 px-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-30 rounded-t-3xl">
          <div class="mb-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 flex justify-between items-center shadow-inner">
            <div class="flex flex-col">
              <span class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-1">
                Total Spend
              </span>
              <span class="text-xl font-bold text-gray-900 dark:text-white">
                $345.00
              </span>
            </div>
            <div class="h-8 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>
            <div class="flex flex-col items-end">
              <span class="text-xs uppercase tracking-wider text-primary font-semibold mb-1">
                Your Spend
              </span>
              <span class="text-xl font-bold text-primary">$112.50</span>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="relative flex-1">
              <input
                class="w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-900 transition-all border-none"
                placeholder="Type expense details..."
                type="text"
              />
              <button class="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-primary text-white rounded-full shadow-md hover:bg-indigo-600 transition-colors flex items-center justify-center">
                <span class=" text-lg"><FaArrowUp/></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupExpense;
