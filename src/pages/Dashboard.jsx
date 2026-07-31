import React from "react";
import "cally";
import SpendingChart from "./SpendingChart";
import { Bell, PlusIcon, UserCircleIcon } from "lucide-react";

export default function Dashboard({ isSignedIn, isMobile }) {
  const tableHeaders = ["Date Spent", "Amount", "Name", "Description"];
  const date = new Date().toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  return isSignedIn && isMobile ? (
    <div className="min-h-screen sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-7xl text-black flex flex-col gap-3">
        <div className="flex w-full justify-between items-center p-6">
          <UserCircleIcon size={30} color="pink" />
          <Bell size={30} color="pink" />
        </div>
        <div className="flex px-6 flex-col gap-2">
          <h1 className="text-white text-2xl">$200</h1>
          <h1 className="text-[medium]  text-white">Budget Balance</h1>
          <div className="flex gap-4 mt-7 justify-evenly">
            <div className="bg-pink-200 w-26 rounded-[10px] text-center p-4 justify-items-center">
              <PlusIcon />
              <h2 className="text-[16px]">Budget</h2>
            </div>

            <div className="bg-pink-200 w-26 rounded-[10px] text-center p-4 justify-items-center">
              <PlusIcon />
              <h2 className=" text-[16px]">Goal</h2>
            </div>
            <div className="bg-pink-200 w-26 rounded-[10px] text-center p-4 justify-items-center">
              <PlusIcon />
              <h2 className=" text-[16px]">Transaction</h2>
            </div>
          </div>
        </div>
        {/* Show any budgets created, if not show a budget button */}
      </div>
    </div>
  ) : null;
}
