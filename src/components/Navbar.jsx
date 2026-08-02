import {
  CircleUserRound,
  DollarSign,
  DollarSignIcon,
  House,
  LayoutDashboard,
  NotepadText,
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
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      label: "Transactions",
      icon: Wallet,
      path: "/transactions",
    },
    {
      label: "Budget",
      icon: DollarSign,
      path: "/budget",
    },
    {
      label: "Goals",
      icon: NotepadText,
      path: "/goals",
    },
  ];
  const handleRoute = (route) => {
    navigate(route);
  };

  const setClass = () => {};

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex  lg:h-full lg:left-0 lg:translate-x-0 lg:z-0 lg:bottom-0">
      <div className="rounded-2xl lg:rounded-none lg:h-full bg-gray-700 p-2 lg:p-10 h-13 content-center lg:content-start">
        <div className="flex text-white lg:px-0 lg:flex-col lg:gap-7 lg:w-full">
          <div className="hidden lg:inline-flex font-bold gap-5 place-items-center">
            <img
              src={budgetIcon}
              alt="Our Budget App"
              className="lg:w-10 lg:h-10 lg:cursor-pointer"
            />
            <h1>Budgeter</h1>
          </div>

          {navItems.map(({ label, icon: Icon, path }) =>
            isMobile ? (
              <a
                key={path}
                onClick={() => handleRoute(path)}
                className={`w-12 h-9 content-center justify-items-center rounded-full ${location.pathname === path ? "bg-blue-500" : "bg-transparent"}`}
              >
                <Icon size={24} />
              </a>
            ) : (
              <button
                key={path}
                onClick={() => handleRoute(path)}
                className="text-left hover:bg-gray-200 cursor-pointer p-2 rounded-[10px]"
              >
                {label}
              </button>
            ),
          )}
        </div>
      </div>
    </nav>
  );
}
