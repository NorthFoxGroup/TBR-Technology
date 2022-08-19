import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
import { BsDownload, BsPieChartFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutPlan = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col m-20">
        <p className="text-3xl font-medium">Pricing Plans</p>
        <div className="grid grid-cols-3 gap-10 mt-20 w-4/5">
          <div className="group">
            <div className="flex justify-center items-center flex-col px-10 group-hover:shadow-2xl transition-all delay-200 ease-in-out group-hover:cursor-pointer group-hover:text-cyan-400 group-hover:bg-[#023047] rounded-lg">
              <div className="my-10 mb-5 flex justify-center flex-col items-center">
                <p className="font-medium text-xl">Basic Plan</p>
                <BiBadgeCheck className="text-7xl mt-3" />
              </div>
              <div className="">
                <p className="font-bold text-6xl relative">
                  <sup className="text-xl absolute top-0 -left-5">$</sup>
                  29
                  <sub className="text-lg font-normal absolute bottom-1">
                    /month
                  </sub>
                </p>
              </div>
              <div className="w-full mt-10">
                <div className="flex justify-between">
                  <p>Powerful Admin Panel</p>
                  <FaCheck />
                </div>
                <div className="flex justify-between">
                  <p>3 Native Android App</p>
                  <FaCheck />
                </div>
                <div className="flex justify-between">
                  <p>Multi-Language Support</p>
                  <FaCheck />
                </div>
                <div className="flex justify-between">
                  <p>Support via E-mail and Phone</p>
                  <FaCheck />
                </div>
              </div>
              <Link to="/contact">
                <button className="my-10 px-10">Buy Now</button>
              </Link>
            </div>
          </div>
          <div className="group">
            <div className="flex justify-center items-center flex-col px-10 group-hover:shadow-2xl transition-all delay-200 ease-in-out group-hover:cursor-pointer group-hover:text-cyan-400 group-hover:bg-[#023047] rounded-lg">
              <div className="my-10 mb-5 flex justify-center flex-col items-center">
                <p className="font-medium text-xl">Premium Plan</p>
                <BsDownload className="text-7xl mt-3" />
              </div>
              <div className="">
                <p className="font-bold text-6xl relative">
                  <sup className="text-xl absolute top-0 -left-5">$</sup>
                  49
                  <sub className="text-lg font-normal absolute bottom-1">
                    /month
                  </sub>
                </p>
              </div>
              <div className="w-full mt-10">
                <div className="flex justify-between">
                  <p>Powerful Admin Panel</p>
                  <FaCheck />
                </div>
                <div className="flex justify-between">
                  <p>3 Native Android App</p>
                  <FaCheck />
                </div>
                <div className="flex justify-between">
                  <p>Multi-Language Support</p>
                  <FaCheck />
                </div>
                <div className="flex justify-between">
                  <p>Support via E-mail and Phone</p>
                  <FaCheck />
                </div>
              </div>
              <Link to="/contact">
                <button className="my-10 px-10">Buy Now</button>
              </Link>
            </div>
          </div>
          <div className="group">
            <div className="flex justify-center items-center flex-col px-10 group-hover:shadow-2xl transition-all delay-200 ease-in-out group-hover:cursor-pointer group-hover:text-cyan-400 group-hover:bg-[#023047] rounded-lg">
              <div className="my-10 mb-5 flex justify-center flex-col items-center">
                <p className="font-medium text-xl">Family Plan</p>
                <BsPieChartFill className="text-7xl mt-3" />
              </div>
              <div className="">
                <p className="font-bold text-6xl relative">
                  <sup className="text-xl absolute top-0 -left-5">$</sup>
                  79
                  <sub className="text-lg font-normal absolute bottom-1">
                    /month
                  </sub>
                </p>
              </div>

              <div className="w-full mt-10">
                <div className="flex justify-between">
                  <p>Powerful Admin Panel</p>
                  <FaCheck />
                </div>
                <div className="flex justify-between">
                  <p>3 Native Android App</p>
                  <FaCheck />
                </div>
                <div className="flex justify-between">
                  <p>Multi-Language Support</p>
                  <FaCheck />
                </div>
                <div className="flex justify-between">
                  <p>Support via E-mail and Phone</p>
                  <FaCheck />
                </div>
              </div>
              <Link to="/contact">
                <button className="my-10 px-10">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPlan;
