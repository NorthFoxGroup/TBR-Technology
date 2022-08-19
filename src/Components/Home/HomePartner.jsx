import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import Partner from "../../assets/partners.png";

const HomePartner = () => {
  return (
    <>
      <div className="lg:p-20 p-5 py-10 h-full grid lg:grid-cols-2 grid-cols-1 justify-center items-center">
        <div>
          <div className="grid grid-flow-col gap-2 mb-3 items-start justify-start">
            <AiFillSetting className="text-3xl text-orange-400" />
            <p className="text-2xl font-medium uppercase">PARTNERSHIPS</p>
          </div>
          <p className="lg:text-5xl text-2xl font-bold leading-normal">
            Empower Your Clients With Industry-Leading Technology Solution
          </p>
          <p className="mt-2 text-slate-400 w-9/12 text-justify">
            Collaborate with us to earn more by selling, customizing or
            integrating our products
          </p>
          <Link to="/contact">
            <button className="mt-10 ">Partner With Us</button>
          </Link>
        </div>
        <div>
          <img src={Partner} className="drop-shadow-2xl" alt="" />
        </div>
      </div>
    </>
  );
};

export default HomePartner;
