import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeClass = "text-orange-400 border-b-2 pb-2 border-orange-300";
  return (
    <div className="px-20 py-5 bg-white fixed top-0 w-full z-50 shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xl font-bold">TRB Technologies</p>
        </div>
        <div className="flex items-center">
          <ul className="flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? activeClass : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/company"
                className={({ isActive }) => (isActive ? activeClass : "")}
              >
                Company
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? activeClass : "")}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resources"
                className={({ isActive }) => (isActive ? activeClass : "")}
              >
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/business-modal"
                className={({ isActive }) => (isActive ? activeClass : "")}
              >
                Business Models
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? activeClass : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? activeClass : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <button className="ml-5">Get In Touch</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
