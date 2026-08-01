import {
  CircleUserRound,
  DollarSign,
  DollarSignIcon,
  House,
  LayoutDashboard,
  Settings,
  Wallet,
} from "lucide-react";
import "../index.css";
import { Navigate, useNavigate } from "react-router-dom";
import budgetIcon from "../assets/money-3.png";

{
  /* // 1. Navigation Menu Comopnent ---- */
}
export default function Navbar({ isMobile }) {
  // Items here is for the notification bar to show any updates
  // Most likely will be a fetch to the table that has all acitivties that have happened since last refresh
  const navigate = useNavigate();
  const navItems = [
    { label: "Settings", icon: <Settings color="pink" />, key: "/settings" },
  ];

  const navItems2 = [
    {
      label: "Home",
      icon: <House size={24} color="pink" />,
      key: "/dashboard",
    },
    {
      label: "Budget",
      icon: <Wallet size={24} color="pink" />,
      key: "/budget",
    },
    {
      label: "Transactions",
      icon: <DollarSign color="pink" />,
      key: "/transactions",
    },
  ];
  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex  lg:h-full lg:left-0 lg:translate-x-0 lg:z-0 lg:bottom-0">
      <div className="rounded-full lg:rounded-none lg:h-full bg-gray-700 p-2 lg:p-10 h-12 content-center lg:content-start">
        <div className="flex text-white gap-10 lg:px-0 lg:flex-col lg:gap-7 lg:w-full">
          <div className="hidden lg:inline-flex font-bold gap-5 place-items-center">
            <img
              src={budgetIcon}
              alt="Our Budget App"
              className="lg:w-10 lg:h-10 lg:cursor-pointer"
            />
            <h1 id="title">Our Budget App</h1>
          </div>
          {isMobile ? (
            <a
              className="lg:cursor-pointer"
              onClick={() => (window.location.href = "/dashboard")}
            >
              <LayoutDashboard size={24} />
            </a>
          ) : (
            <button className="text-left hover:bg-gray-200  cursor-pointer p-2 rounded-[10px]">
              Dashboard
            </button>
          )}
          {isMobile ? (
            <a
              className="lg:cursor-pointer"
              onClick={() => (window.location.href = "/dashboard")}
            >
              <Wallet size={24} />
            </a>
          ) : (
            <button className="text-left hover:bg-gray-200  cursor-pointer p-2 rounded-[10px]">
              Transactions
            </button>
          )}
          {isMobile ? (
            <a
              className="lg:cursor-pointer"
              onClick={() => (window.location.href = "/dashboard")}
            >
              <DollarSign size={24} />
            </a>
          ) : (
            <button className="text-left hover:bg-gray-200 cursor-pointer p-2 rounded-[10px]">
              Budget
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
