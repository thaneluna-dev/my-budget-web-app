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

{
  /* // 1. Navigation Menu Comopnent ---- */
}
export default function Navbar({isMobile}) {
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
      <div className="rounded-full lg:rounded-none lg:h-full bg-gray-300 p-2 lg:p-10 h-12 content-center lg:content-start">
        <div className="flex text-black gap-10 px-5 lg:px-0">
          <a className="lg:cursor-pointer" onClick={() => window.location.href="/dashboard"}>
            <LayoutDashboard />
          </a>
          <a className="lg:cursor-pointer" onClick={() => window.location.href="/transactions"}>
            <Wallet />
          </a>
          <a className="lg:cursor-pointer" onClick={() => window.location.href="/budget"}>
            <DollarSign />
          </a>
        </div>
      </div>
    </nav>
  );
}
