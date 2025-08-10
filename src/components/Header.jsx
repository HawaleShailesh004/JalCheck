import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="w-full h-auto flex justify-between items-center py-4 px-10 border-b-2 border-blue-500 bg-white shadow-xl">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/images/jalCheck-logo.png"
          alt="Jal Check"
          className=" h-12 sm:h-15 w-auto cursor-pointer"
        />
      </div>

      {/* Search Box */}
      <div className=" flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="sm:w-90 w-60 px-4 py-2 border border-blue-300 rounded-3xl focus:outline-none focus:ring-1 focus:ring-primary-dark shadow-sm"
        />
      </div>

      {/* Navigation Links */}
      <ul className=" justify-center items-center gap-6 text-lg font-medium text-blue-900 sm:flex hidden">
        <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
          Home
        </li>
        <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
          Browse
        </li>
        <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
          Assessment
        </li>
        <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
          About
        </li>
      </ul>

      {/* Auth Buttons */}
      <div className="justify-center items-center gap-4 sm:flex hidden">
        <button className="px-4 py-2 text-blue-900 border border-blue-900 rounded-md hover:opacity-75 transition-all duration-200 cursor-pointer">
          Login
        </button>
        <button className="px-4 py-2 bg-primary-light text-primary-dark rounded-md hover:opacity-75 transition-colors duration-200 cursor-pointer">
          Signup
        </button>

        {/* Profile Icon */}
        <div className="ml-4 hover:text-blue-500 cursor-pointer transition-colors duration-200">
          <FaUserCircle className="text-3xl text-[#000433]" />
        </div>
      </div>
      <div className="sm:hidden flex items-center gap-4">
        <RxHamburgerMenu
          className={`text-3xl text-[#000433] cursor-pointer hover:text-blue-500 transition-all duration-300 ${
            !menuOpen ? "block" : "hidden"
          }`}
          onClick={() => toggleMenu()}
        />
        <RxCross2
          className={`text-3xl text-[#000433] cursor-pointer hover:text-blue-500 transition-all duration-300  ${
            menuOpen ? "block" : "hidden"
          }`}
          onClick={() => toggleMenu()}
        />
      </div>

      <div
        className={`w-40 borer-2 border-blue-500 bg-white shadow-xl absolute top-20 right-0 z-50 rounded-s p-4 transition-all duration-300 ease-in-out ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className={`flex gap-2 flex-col`}>
          <li classNam="hover:text-primary-light transition-all duration-200 hover:border-b-1 hover:border-b-primary-light">
            Home
          </li>
          <li className="hover:text-primary-light transition-all duration-200 hover:border-b-1 hover:border-b-primary-light">
            Browse
          </li>
          <li className="hover:text-primary-light transition-all duration-200 hover:border-b-1 hover:border-b-primary-light">
            Assessment
          </li>
          <li className="hover:text-primary-light transition-all duration-200 hover:border-b-1 hover:border-b-primary-light">
            About
          </li>
          <li className="hover:text-primary-light transition-all duration-200 hover:border-b-1 hover:border-b-primary-light">
            Sign In
          </li>
          <li
            className="hover:text-primary-light transition-all duration-200 hover:border-b-1 hover:border-b-primary-light"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light" : "Dark"}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
