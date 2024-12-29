import React, { useState } from "react";
import { navlinks } from "../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="padding-x py-3 absolute z-7 w-full bg-opacity-80">
      <nav className="flex justify-between items-center max-container relative">
        {/* Logo */}
        <a href='/' className="text-3xl font-serif sm:py-3">
        <div className="flex gap-1">
        <img src="../src/assets/brainwave-symbol.svg" alt="" />
        <h1 className=" text-yellow-300 mt-2 ">Bruex</h1>
        </div>
        
        </a>

        {/* Hamburger Icon for Small Screens */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-1 bg-gray-700 mb-1"></div>
          <div className="w-6 h-1 bg-gray-700 mb-1"></div>
          <div className="w-6 h-1 bg-gray-700"></div>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row text-slate-400 font-serif items-center md:px-40 md:mr-44 gap-8 md:gap-14 absolute md:static top-16 left-0 w-full md:w-auto md:justify-center`}
        >
          {navlinks.map((items) => (
            <li key={items.label}>
              <a
                href={items.href}
                className="font-serif leading-normal text-md hover:text-purple-600"
              >
                {items.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Login Button - Hidden on Small Screens */}
        <div className="absolute top-2 right-9 hidden md:block sm:-right-14 md:px-6">
          <button className="relative border-2 border-transparent bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 text-yellow-300 px-7 py-2 rounded-full overflow-hidden">
            <span className="absolute inset-0 bg-n-7 rounded-full"></span>
            <span className="relative bg-transparent hover:text-purple-600">
              Login
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
