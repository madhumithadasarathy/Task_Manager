import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Header = () => {
  const [theme, setTheme] = useState("dark"); // State to toggle themes

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className={`absolute top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-7xl 
        backdrop-blur-lg bg-black dark:bg-zinc-800 
        light:bg-white light:dark:bg-gray-300
        rounded-3xl shadow-lg px-6 py-4 flex items-center justify-between`}
    >
      {/* Branding */}
      <div className="flex items-center gap-2">
        <div className="text-white dark:text-gray-200 font-bold text-xl">
          Task Manager
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-zinc-800 dark:bg-gray-300 rounded-full px-3 py-2 w-full max-w-md">
        <SearchIcon className="text-gray-400" />
        <input
          type="text"
          placeholder="Search tasks..."
          className="bg-transparent text-gray-300 dark:text-black placeholder-gray-400 dark:placeholder-gray-600 ml-2 w-full focus:outline-none"
        />
      </div>

      {/* Action Icons */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button className="p-2 bg-zinc-800 dark:bg-gray-300 rounded-full hover:bg-zinc-700 dark:hover:bg-gray-400 focus:ring-2 focus:ring-blue-500">
          <NotificationsOutlinedIcon fontSize="medium" className="text-gray-300 dark:text-black" />
        </button>

        {/* Settings */}
        <button className="p-2 bg-zinc-800 dark:bg-gray-300 rounded-full hover:bg-zinc-700 dark:hover:bg-gray-400 focus:ring-2 focus:ring-blue-500">
          <SettingsOutlinedIcon fontSize="medium" className="text-gray-300 dark:text-black" />
        </button>

        {/* Profile */}
        <button className="p-2 bg-zinc-800 dark:bg-gray-300 rounded-full hover:bg-zinc-700 dark:hover:bg-gray-400 focus:ring-2 focus:ring-blue-500">
          <AccountCircleOutlinedIcon fontSize="large" className="text-gray-300 dark:text-black" />
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 bg-zinc-800 dark:bg-gray-300 rounded-full hover:bg-zinc-700 dark:hover:bg-gray-400 focus:ring-2 focus:ring-blue-500"
        >
          {theme === "dark" ? (
            <WbSunnyOutlinedIcon fontSize="medium" className="text-gray-300 dark:text-black" />
          ) : (
            <DarkModeOutlinedIcon fontSize="medium" className="text-gray-300 dark:text-black" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
