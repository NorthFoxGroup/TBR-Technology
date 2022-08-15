import React from "react";
import PartnerBG from "../../assets/partnerCompany.png";
import SetupBusiness from "../../assets/setUpBusiness.png";
import ComprehensiveTechnology from "../../assets/ComprehensiveTechnology.png";
import { client } from "../../assets/client";

const Partner = () => {
  return (
    <div className="p-20">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-4xl font-bold w-4/6 leading-normal">
            To Move Fast, Go Alone To Reach Further, Move Together
          </p>
          <p className="text-xl my-5 font-medium text-slate-500">
            Become a Code Brew partner to run your independent business, leaving
            the worries to deliver on us.
          </p>
          <button className="mt-5 border-green-600 hover:bg-green-600">
            Partner With Us
          </button>
        </div>
        <div>
          <img src={PartnerBG} alt=""  className="drop-shadow-lg" />
        </div>

        <div className="flex justify-center">
          <img src={SetupBusiness} className="w-9/12 drop-shadow-md" alt="" />
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="text-3xl font-bold w-9/12">
            Set Up Your Own Independent Business
          </p>
          <div className="border-l-4 border-green-600 pl-5 py-3 my-5">
            <p className="font-medium text-xl w-11/12">
              Become a partner & earn as high as 25% commissions on every sale
            </p>
          </div>
          <div className="border-l-4 border-green-600 pl-5 py-3 my-5">
            <p className="font-medium text-xl w-11/12">
              Sell powerful solutions that come with the flexibility to
              customize & integrate
            </p>
          </div>
          <button className="mt-5 border-green-600 hover:bg-green-600">
            Partner With Us
          </button>
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="text-3xl font-bold w-9/12">
            Comprehensive Technology Suite
          </p>
          <div className="border-l-4 border-green-600 pl-5 py-3 my-5">
            <p className="font-medium text-xl w-11/12">
              Combination of white-label, SaaS, Custom-built & enterprise
              solution
            </p>
          </div>
          <div className="border-l-4 border-green-600 pl-5 py-3 my-5">
            <p className="font-medium text-xl w-11/12">
              Offer your clients industry leading tech stack, for any business
              size & type Start Selling
            </p>
          </div>
          <button className="mt-5 border-green-600 hover:bg-green-600">
            Partner With Us
          </button>
        </div>

        <div className="flex justify-center">
          <img src={ComprehensiveTechnology} className="w-9/12 drop-shadow-md" alt="" />
        </div>
      </div>

      <div className="bg-[#023047] p-10 my-20 text-white grid grid-cols-3 rounded-md">
        <div className="col-span-2">
          <p className="text-3xl mb-3 font-medium">
            Your Growth Is Our SuccessI
          </p>
          <p className="">
            Whether you’re an established business or just starting out, Code
            Brew offers you the solutions & resources you need to scale.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button className="">Partner With Us</button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl font-medium my-2 text-cyan-400">CLIENTS</p>
        <p className="text-3xl font-medium my-2">We’ve Made These Brands Standout</p>
      </div>
      <div className="grid grid-cols-4 gap-14 mt-10">
        {client.map((item) => {
          return (
            <div className="flex justify-center">
              <img src={item} className="h-10" alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partner;
