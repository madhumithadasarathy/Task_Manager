import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    console.log("Search Query:", searchQuery); // Handle search logic
  };

  return (
    <header className="bg-black text-gray-300 px-6 py-4 flex items-center justify-between shadow-md">
      {/* Branding */}
      <div className="flex items-center gap-2">
        <div className="text-white font-bold text-xl">Task Manager</div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-zinc-800 rounded-md px-3 py-2 w-full max-w-md">
        <SearchIcon className="text-gray-400" />
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="bg-zinc-800 text-gray-300 placeholder-zinc-400 ml-2 w-full focus:outline-none"
        />
      </div>

      {/* Action Icons */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 focus:ring-2 focus:ring-blue-500">
          <NotificationsOutlinedIcon fontSize="medium" className="text-gray-300" />
        </button>

        {/* Settings */}
        <button className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 focus:ring-2 focus:ring-blue-500">
          <SettingsOutlinedIcon fontSize="medium" className="text-gray-300" />
        </button>

        {/* Profile */}
        <button className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 focus:ring-2 focus:ring-blue-500">
          <AccountCircleOutlinedIcon fontSize="large" className="text-gray-300" />
        </button>
      </div>
    </header>
  );
};

export default Header;
