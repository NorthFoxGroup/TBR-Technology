import React from "react";
import { NavLink } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const activeClass = "text-orange-400";
  return (
    <>
      <div className="p-20 pb-0 bg-[#023047]">
        <div className="grid grid-cols-4 gap-10 border-b border-[#ffffff55] pb-10">
          <div>
            <p className="text-white font-medium text-2xl">TRB Technology</p>
            <p className="text-slate-400 mt-5">
              We work with a passion of taking challenges and creating new ones
              in advertising sector.
            </p>
            <button className="mt-5 text-white hover:border-orange-400 hover:bg-transparent border-orange-400 bg-orange-400 px-5 text-sm">
              About Us
            </button>
          </div>
          <div>
            <p className="text-white font-medium text-2xl">Quick Links</p>
            <ul className="text-slate-400 mt-5">
              <li className="my-2">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? activeClass : "")}
                >
                  Home
                </NavLink>
              </li>
              <li className="my-2">
                <NavLink
                  to="/company"
                  className={({ isActive }) => (isActive ? activeClass : "")}
                >
                  Company
                </NavLink>
              </li>
              <li className="my-2">
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) => (isActive ? activeClass : "")}
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="my-2">
                <NavLink
                  to="/resources"
                  className={({ isActive }) => (isActive ? activeClass : "")}
                >
                  Resources
                </NavLink>
              </li>
              <li className="my-2">
                <NavLink
                  to="/business-modal"
                  className={({ isActive }) => (isActive ? activeClass : "")}
                >
                  Business Models
                </NavLink>
              </li>
              <li className="my-2">
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? activeClass : "")}
                >
                  About
                </NavLink>
              </li>
              <li className="my-2">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? activeClass : "")}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white font-medium text-2xl">Official info</p>
            <div className="flex mt-5 items-center gap-5">
              <FaMapMarkerAlt className="text-orange-400" />
              <p className="text-slate-400">
                30 Commercial Road Fratton, Australia
              </p>
            </div>
            <div className="flex mt-5 items-center gap-5">
              <FaPhoneAlt className="text-orange-400" />
              <p className="text-slate-400">+ 91 9033 71 7372</p>
            </div>
            <div className="mt-5 ">
              <p className="text-white font-medium">Open Hours:</p>
              <p className="text-slate-400 my-2">Mon – Sat: 8 am – 5 pm,</p>
              <p className="text-slate-400 my-2">Sunday: CLOSED</p>
            </div>
          </div>
          <div>
            <p className="text-white font-medium text-2xl">Newsletter</p>
            <p className="text-slate-400 mt-5">
              Subscribe our newsletter to get our latest update & news.
            </p>
            <div className="relative flex items-center">
              <input
                type="text"
                className="border bg-transparent p-2 focus:outline-0 text-white mt-5 rounded-full w-full text-sm"
                placeholder="Enter Your Email Here..."
              />
              <FaTelegramPlane className="bg-white w-9 h-9 p-1 mt-5 rounded-full -ml-8" />
            </div>
            <div className="flex mt-10 gap-5">
              <BsFacebook className="text-[#ffffff44] hover:text-[#1778F2] hover:cursor-pointer text-xl" />
              <BsInstagram className="text-[#ffffff44] hover:text-[#E4405F] hover:cursor-pointer text-xl" />
              <BsTwitter className="text-[#ffffff44] hover:text-[#1DA1F2] hover:cursor-pointer text-xl" />
              <BsLinkedin className="text-[#ffffff44] hover:text-[#0A66C2] hover:cursor-pointer text-xl" />
            </div>
          </div>
        </div>
        <div className="flex justify-between py-5">
            <p className="text-slate-400 text-sm"> {new Date().getFullYear()} &copy; TRB Technology  </p>
            <p className="text-sm text-slate-400">Designed By <a href="//princu09.github.io"  target="_blank" rel="noreferrer" className="hover:text-cyan-400">NorthFox Group</a></p>
        </div>
      </div>
    </>
  );
};

export default Footer;
