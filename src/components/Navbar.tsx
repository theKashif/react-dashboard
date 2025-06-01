import React from "react";
import toggleInsideIcon from "../assets/svgs/toggleInside.svg";
import arrowDownIcon from "../assets/svgs/arrow-down.svg";
import notificationBellIcon from "../assets/svgs/notification-bell.svg";
import ellipseIcon from "../assets/svgs/ellipse.svg";
import userIcon from "../assets/images/person.png";
import SearchBar from "./SearchBar";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();
  console.log("🚀 ~ Navbar ~ user:", user)
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white px-4 py-4 sm:px-6 sm:py-4 rounded-b-2xl w-full gap-4 shadow-lg/2">
      <nav className="flex items-center space-x-1 text-xs text-gray-400 select-none overflow-x-auto scrollbar-hide whitespace-nowrap">
        <a
          className="underline font-normal text-[10px] text-[#8D8C8E]"
          href="#"
        >
          Requests
        </a>
        <span>›</span>
        <span className="font-bold text-darkGrey text-[10px]">
          Registration
        </span>
      </nav>
      <div className="flex flex-1 min-w-0 items-center space-x-4 justify-between">
        <SearchBar />

        <div className="flex items-center space-x-4 sm:space-x-6 flex-shrink-0">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" checked />
            <div className="relative w-14 h-7 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-[#F4BE2A] dark:peer-checked:bg-[#F4BE2A]">
              <img
                src={toggleInsideIcon}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 w-4 h-4 transition-all opacity-100 peer-checked:opacity-100 z-10"
                alt=""
              />
            </div>
          </label>

          <button
            aria-expanded="false"
            aria-haspopup="true"
            className="flex items-center space-x-1 text-xs font-semibold text-gray-600 hover:text-gray-900 focus:outline-none whitespace-nowrap"
          >
            <span>En</span>
            <img src={arrowDownIcon} />
          </button>

          <button
            aria-label="Notifications"
            className="relative text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <img src={notificationBellIcon} />
            <img
              src={ellipseIcon}
              className="absolute -top-[2px] -right-[2px]"
            />
          </button>

          <button
            aria-expanded="false"
            aria-haspopup="true"
            className="flex items-center space-x-2 focus:outline-none whitespace-nowrap"
          >
            <img
              alt="Avatar of John Doe with turban and beard"
              className="w-8 h-8 rounded-full object-cover bg-[#FFA954]"
              height="32"
              src={user?.image || userIcon}
              width="32"
            />
            <span className="text-[#59595B] font-semibold text-sm select-none hidden sm:block">
              {user?.username || "John Doe"}
            </span>
            <img src={arrowDownIcon} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
