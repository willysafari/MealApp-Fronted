import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 px-6 py-4 shadow flex items-center justify-between">
      <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        MealApp
      </div>
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search meals..."
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        {/* Add nav links or buttons here if needed */}
      </div>
    </nav>
  );
};

export default Navbar;