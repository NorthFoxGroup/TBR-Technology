import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { TiTimes } from "react-icons/ti";

const Navbar = () => {
  const [button, setButton] = useState(false);
  const activeClass = "text-orange-400 border-b-2 pb-2 border-orange-300";
  return (
    <div className="fixed top-0 w-full flex flex-col lg:flex-row justify-between lg:px-20 px-10 border-b z-20 bg-white lg:items-center items-start py-5">
      <div>
        <p className="text-xl font-bold">TRB Technologies</p>
      </div>

      {/* Laptop Nav */}
      <div className="lg:flex items-center hidden">
        <ul className="flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClass : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="group">
            Services
            <div className="bg-white shadow-xl absolute hidden group-hover:block p-10 rounded-md">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <Link to="/service1">
                    <li className="text-black">Service Page 1</li>
                  </Link>
                  <Link to="/service2">
                    <li className="my-3 text-black">Service Page 2</li>
                  </Link>
                  <Link to="/service3">
                    <li className="my-3 text-black">Service Page 3</li>
                  </Link>
                  <Link to="/service4">
                    <li className="my-3 text-black">Service Page 4</li>
                  </Link>
                  <Link to="/service5">
                    <li className="text-black">Service Page 5</li>
                  </Link>
                </div>
                <div>
                  <Link to="/service6">
                    <li className="text-black">Service Page 6</li>
                  </Link>
                  <Link to="/service7">
                    <li className="my-3 text-black">Service Page 7</li>
                  </Link>
                  <Link to="/service8">
                    <li className="my-3 text-black">Service Page 8</li>
                  </Link>
                  <Link to="/service9">
                    <li className="my-3 text-black">Service Page 9</li>
                  </Link>
                  <Link to="/service10">
                    <li className="text-black">Service Page 10</li>
                  </Link>
                </div>
              </div>
            </div>
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
              to="/businessModal"
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
        <Link to="/contact">
          <button className="ml-5">Get In Touch</button>
        </Link>
      </div>

      {/* Mobile Navbar */}
      <button
        className="xs:block p-0 text-3xl absolute right-5 lg:hidden"
        onClick={() => setButton(!button)}
      >
        {!button ? <BiMenuAltRight /> : <TiTimes />}
      </button>
      <div className={`lg:hidden ${button ? "block" : "hidden"}`}>
        <div className="flex flex-col my-5">
          <ul className="flex flex-col">
            <li className="my-3 text-lg font-medium">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? activeClass : "")}
                onClick={() => {
                  setButton(!button);
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="my-3 text-lg font-medium">
              <NavLink
                to="/company"
                className={({ isActive }) => (isActive ? activeClass : "")}
                onClick={() => {
                  setButton(!button);
                }}
              >
                Company
              </NavLink>
            </li>
            <li className="my-3 text-lg font-medium">
              <NavLink
                to="/businessModal"
                className={({ isActive }) => (isActive ? activeClass : "")}
                onClick={() => {
                  setButton(!button);
                }}
              >
                Business Models
              </NavLink>
            </li>
            <li className="my-3 text-lg font-medium">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? activeClass : "")}
                onClick={() => {
                  setButton(!button);
                }}
              >
                About
              </NavLink>
            </li>
            <li className="my-3 text-lg font-medium">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? activeClass : "")}
                onClick={() => {
                  setButton(!button);
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <Link
            to="/contact"
            onClick={() => {
              setButton(!button);
            }}
          >
            <button className="mt-5">Get In Touch</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
