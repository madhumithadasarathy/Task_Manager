import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`absolute top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-7xl 
        backdrop-blur-lg bg-black/60 dark:bg-zinc-800/60 
        rounded-3xl shadow-lg px-6 py-4 flex items-center justify-between`}
    >
      {/* Branding */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="text-white dark:text-gray-200 font-bold text-xl">
          Task Manager
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-gray-300 p-2 rounded-full hover:bg-zinc-700 dark:hover:bg-gray-400"
          onClick={toggleMenu}
        >
          <MenuIcon fontSize="large" />
        </button>
      </div>

      {/* Dropdown for Hamburger Menu */}
      {isMenuOpen && (
        <div className="w-full flex flex-col items-start gap-4 mt-4 md:hidden">
          {/* Icons Section */}
          <div className="flex items-center gap-4">
            <button className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 dark:bg-gray-300 dark:hover:bg-gray-400">
              <NotificationsOutlinedIcon fontSize="medium" className="text-gray-300 dark:text-black" />
            </button>
            <button className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 dark:bg-gray-300 dark:hover:bg-gray-400">
              <SettingsOutlinedIcon fontSize="medium" className="text-gray-300 dark:text-black" />
            </button>
            <button className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 dark:bg-gray-300 dark:hover:bg-gray-400">
              <AccountCircleOutlinedIcon fontSize="medium" className="text-gray-300 dark:text-black" />
            </button>
            <button className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 dark:bg-gray-300 dark:hover:bg-gray-400">
              <WbSunnyOutlinedIcon fontSize="medium" className="text-gray-300 dark:text-black" />
            </button>
          </div>
        </div>
      )}

      {/* Search Bar (visible on larger screens only) */}
      <div className="hidden md:flex items-center bg-zinc-800 dark:bg-gray-300 rounded-full px-3 py-2 w-full max-w-md">
        <SearchIcon className="text-gray-400" />
        <input
          type="text"
          placeholder="Search tasks..."
          className="bg-transparent text-gray-300 dark:text-black placeholder-gray-400 dark:placeholder-gray-600 ml-2 w-full focus:outline-none"
        />
      </div>

      {/* Icons Section (hidden on smaller screens) */}
      <div className="hidden md:flex items-center gap-6">
        <button className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 dark:bg-gray-300 dark:hover:bg-gray-400">
          <NotificationsOutlinedIcon fontSize="medium" className="text-gray-300 dark:text-black" />
        </button>
        <button className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 dark:bg-gray-300 dark:hover:bg-gray-400">
          <SettingsOutlinedIcon fontSize="medium" className="text-gray-300 dark:text-black" />
        </button>
        <button className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 dark:bg-gray-300 dark:hover:bg-gray-400">
          <AccountCircleOutlinedIcon fontSize="medium" className="text-gray-300 dark:text-black" />
        </button>
        <button className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 dark:bg-gray-300 dark:hover:bg-gray-400">
          <WbSunnyOutlinedIcon fontSize="medium" className="text-gray-300 dark:text-black" />
        </button>
      </div>
    </header>
  );
};

export default Header;
