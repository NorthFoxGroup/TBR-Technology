import React from "react";
import { AiFillSetting } from "react-icons/ai";
import Partner from "../../assets/partners.png";

const HomePartner = () => {
  return (
    <>
      <div className="p-20 h-full grid grid-cols-2 justify-center items-center">
        <div>
          <div className="flex gap-2 mb-3">
            <AiFillSetting className="text-3xl text-orange-400" />
            <p className="text-2xl font-medium uppercase">PARTNERSHIPS</p>
          </div>
          <p className="text-5xl font-bold leading-normal">
            Empower Your Clients With Industry-Leading Technology Solution
          </p>
          <p className="mt-2 text-slate-400 w-9/12">
            Collaborate with us to earn more by selling, customizing or
            integrating our products
          </p>
          <button className="mt-10 ">Partner With Us</button>
        </div>
        <div>
          <img src={Partner} className="drop-shadow-2xl" alt="" />
        </div>
      </div>
    </>
  );
};

export default HomePartner;
