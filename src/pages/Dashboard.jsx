import React, { useState } from "react";
import "cally";
import { Bell, PlusIcon, UserCircleIcon } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import { usePageSwipe } from "../components/PageSwipe";
import SpendingDayChart from "../components/SpendingMonthChart";
import CategorySection from "../components/CategorySection";
import ProfileBar from "../components/ProfileBar";
import AddBudget from "../components/AddBudget";

export default function Dashboard({ isSignedIn, isMobile }) {
  const tableHeaders = ["Date Spent", "Amount", "Name", "Description"];
  const date = new Date().toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const [budget, setBudget] = useState(false);
  const navigate = useNavigate();
  
  const handlers = usePageSwipe({
    rightRoute: "/transactions",
  });

  const openBudget = () => setBudget(true);
  const closeBudget = () => setBudget(false);
  return isSignedIn && isMobile ? (
    <div {...handlers} className="min-h-screen md:px-8 lg:px-10 pb-20">
      <div className="mx-auto w-full max-w-7xl text-black flex flex-col">
        <ProfileBar />
        <div className="flex px-6 flex-col gap-2">
          <div className="flex gap-4 mt-7 justify-evenly">
            <button
              className="bttn bg-pink-200 w-26 rounded-[10px] text-center p-4 justify-items-center"
              onClick={openBudget}
            >
              <PlusIcon />
              <h2 className="buttonHeaders text-[16px]">Budget</h2>
            </button>
            <button className="bttn bg-pink-200 w-26 rounded-[10px] text-center p-4 justify-items-center" onClick={openBudget}>
              <PlusIcon />
              <h2 className="buttonHeaders text-[16px]">Goal</h2>
            </button>
            <button className="bttn bg-pink-200 w-26 rounded-[10px] text-center p-4 justify-items-center" onClick={openBudget}>
              <PlusIcon />
              <h2 className="buttonHeaders text-[16px]">Transaction</h2>
            </button>
          </div>
          <SpendingDayChart />
          <div className="flex justify-between items-center">
            <h2 className="text-[16px] font-bold">Categories</h2>

            <button className="btn btn-success flex items-center gap-2">
              <PlusIcon className="text-white" />
              <h2>Category</h2>
            </button>
          </div>
          <CategorySection />
          {budget && <AddBudget onClose={closeBudget} /> }
        </div>
        {/* Show any budgets created, if not show a budget button */}
      </div>
    </div>
  ) : null;
}
