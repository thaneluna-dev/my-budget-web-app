import React from "react";
import "cally";
import { Bell, PlusIcon, UserCircleIcon } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import { usePageSwipe } from "../components/PageSwipe";
import SpendingDayChart from "../components/SpendingMonthChart";

export default function Dashboard({ isSignedIn, isMobile }) {
  const tableHeaders = ["Date Spent", "Amount", "Name", "Description"];
  const date = new Date().toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const navigate = useNavigate();
  const handleBudget = () => {};
  const handlers = usePageSwipe({
    rightRoute: "/transactions",
  });
  return isSignedIn && isMobile ? (
    <div {...handlers} className="min-h-screen px-6 md:px-8 lg:px-10 pb-5">
      <div className="mx-auto w-full max-w-7xl text-black flex flex-col gap-3">
        <div className="flex w-full justify-between items-center p-6">
          <UserCircleIcon size={30} color="pink" />
          <Bell size={30} color="pink" />
        </div>
        <div className="flex px-6 flex-col gap-2">
          <div className="flex gap-4 mt-7 justify-evenly">
            <div className="bg-pink-200 w-26 rounded-[10px] text-center p-4 justify-items-center">
              <PlusIcon />
              <h2 className="buttonHeaders text-[16px]">Budget</h2>
            </div>

            <div className="bg-pink-200 w-26 rounded-[10px] text-center p-4 justify-items-center">
              <PlusIcon />
              <h2 className="buttonHeaders text-[16px]">Goal</h2>
            </div>
            <div className="bg-pink-200 w-26 rounded-[10px] text-center p-4 justify-items-center">
              <PlusIcon />
              <h2 className="buttonHeaders text-[16px]">Transaction</h2>
            </div>
          </div>
          <SpendingDayChart />
          <div className="flex justify-between items-center">
            <h2 className="text-[16px] font-bold">Categories</h2>

            <button className="btn btn-primary flex items-center gap-2">
              <PlusIcon className="text-white" />
              <h2>Category</h2>
            </button>
          </div>
          <div className="grid grid-cols-2 scroll-auto gap-3">
            <div className="bg-gray-300 rounded-[10px] p-4">Groceries</div>
            <div className="bg-gray-300 rounded-[10px] p-4">Entertainment</div>
          </div>
        </div>
        {/* Show any budgets created, if not show a budget button */}
      </div>
    </div>
  ) : null;
}
