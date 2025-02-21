import React, { useState, useCallback } from "react";
import { SlLayers } from "react-icons/sl";
import { PiCarThin } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Rides", href: "/", icon: PiCarThin },
  { name: "History", href: "/history", icon: SlLayers },
];

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeSidebar = useCallback(() => setIsOpen(false), []);

  return (
    <>
      {/* Mobile Navbar */}
      <div className="flex items-center justify-between sm:hidden  py-2 px-4">
        <button
          onClick={toggleSidebar}
          aria-controls="logo-NavBar"
          aria-expanded={isOpen}
          className="p-2 text-gray-500 rounded-lg hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
        >
          <span className="sr-only">Open Navigation</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              clipRule="evenodd"
            />
          </svg>
        </button>

      </div>

      {/* Sidebar Navigation */}
      <aside
        id="logo-NavBar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-5 transition-transform bg-gray-50 shadow-sm dark:bg-gray-800 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="h-full flex flex-col px-4 pb-4 overflow-y-auto">
          {/* Close Button (Mobile) */}
          <div className="flex items-center justify-end sm:hidden">
            <button onClick={closeSidebar} className="p-2 text-blue-900">
              <span className="sr-only">Close</span>
              <svg className="w-5 h-5" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l12 12M13 1L1 13"
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <a href="/" className="flex items-center mb-10">
            <img src="/logo.svg" className="h-6 me-3 sm:h-7" alt="Logo" />
            <span className="text-2xl font-bold text-blue-600">Rides</span>
          </a>

          {/* Navigation Links */}
          <ul className="space-y-2 font-medium">
            {navItems.map(({ name, href, icon: Icon }) => (
              <li key={name}>
                <Link to={href} onClick={closeSidebar}>
                  <div
                    className={`flex items-center p-2 rounded-lg transition-all ease-linear duration-100 ${
                      location.pathname === href
                        ? "bg-blue-600 text-white"
                        : "text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="ml-3">{name}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {/* Bottom Section */}
          <div className="mt-auto">
            <hr className="my-2 border-gray-200 dark:border-gray-700" />
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
};

export default NavBar;