import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiSearch, FiBookmark, FiList } from "react-icons/fi";
import logo from '../assets/images/logo.png';

const Header = () => (
  <header className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-gray-800 dark:to-gray-900 shadow-lg">
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Logo/Branding */}
        <div className="text-center md:text-left mb-4 md:mb-0">
            {/* <img src={logo} alt="MealApp Logo" className="w-12 h-12 mx-auto md:mx-0 mb-2 float-left" />  */}
          <h1 className="text-3xl font-bold text-white mb-1">
            MealApp
          </h1>
          <p className="text-blue-100 dark:text-gray-300">
            Discover delicious recipes
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center md:justify-end space-x-1 md:space-x-4">
          <NavLink
            to="/home"
            className={({isActive}) => 
              `flex items-center px-3 py-2 rounded-md transition-colors ${isActive 
                ? "bg-white/20 text-white font-medium" 
                : "text-blue-100 hover:bg-white/10 hover:text-white"}`
            }
          >
            <FiHome className="mr-2" />
            Home
          </NavLink>

          <NavLink
            to="/ingredients"
            className={({isActive}) => 
              `flex items-center px-3 py-2 rounded-md transition-colors ${isActive 
                ? "bg-white/20 text-white font-medium" 
                : "text-blue-100 hover:bg-white/10 hover:text-white"}`
            }
          >
            <FiList className="mr-2" />
            Ingredients
          </NavLink>

          <NavLink
            to="/search"
            className={({isActive}) => 
              `flex items-center px-3 py-2 rounded-md transition-colors ${isActive 
                ? "bg-white/20 text-white font-medium" 
                : "text-blue-100 hover:bg-white/10 hover:text-white"}`
            }
          >
            <FiSearch className="mr-2" />
            Search
          </NavLink>

          <NavLink
            to="/saved"
            className={({isActive}) => 
              `flex items-center px-3 py-2 rounded-md transition-colors ${isActive 
                ? "bg-white/20 text-white font-medium" 
                : "text-blue-100 hover:bg-white/10 hover:text-white"}`
            }
          >
            <FiBookmark className="mr-2" />
            Saved
          </NavLink>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;