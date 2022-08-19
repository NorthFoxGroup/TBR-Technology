import React from "react";
import { Link } from "react-router-dom";
import BMBG from "../../assets/businessModal.png";

const BusinessHead = () => {
  return (
    <>
      <div className="min-h-screen lg:p-20 p-5 py-10 grid lg:grid-cols-2 grid-cols-1 bg-green-200 pt-20">
        <div className="flex justify-center items-center">
          <div className="lg:w-9/12 w-full">
            <p className="lg:text-5xl text-3xl font-medium leading-snug">
              Launch Your Business Online With Next-Gen Clone Apps
            </p>
            <p className="lg:text-2xl text-lg my-5">
              Choose from the array of bespoke custom application clones,
              tailored-fit to you business needs.
            </p>
            <Link to="/contact">
              <button className="hover:bg-green-600 border-green-600 mt-10">
                Book Free Demo
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={BMBG} alt="" className="w-9/12 drop-shadow-md" />
        </div>
      </div>
    </>
  );
};

export default BusinessHead;
