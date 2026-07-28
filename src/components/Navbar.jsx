import "../index.css";
{/* // 1. Navigation Menu Comopnent ---- */}
export default function Navbar() {
  return (
    <div className="navbar bg-pink-200 shadow-sm">
      <div className="navbar-start">
        {/* // 1.1 Dropdown Bar Navigation Menu ---- */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-black hover:bg-gray-200 border-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          {/* //// 1.2 Navigation Menu List ---- */}
          <ul
            tabIndex="-1"
            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="dashboard">Dashboard</a>
            </li>
            <li>
              <a href="transactions">Transactions</a>
            </li>
            <li>
              <a href="budgets">Budgets</a>
            </li>
            <li>
              <a href="profile">Profile</a>
            </li>
            <li>
              <a href="reports">Reports</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <p className="text-xl font-bold text-black hover:bg-transparent border-transparent font-lifesavers tracking-wide">Budget Application</p>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle text-black hover:bg-gray-200 border-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />{" "}
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle hover:bg-gray-200 border-transparent">
          <div className="indicator text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />{" "}
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
}
