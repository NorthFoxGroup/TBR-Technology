import React from "react";
import WWRImg from "../../assets/whoweare.jpg";
import { HiSpeakerphone } from "react-icons/hi";
import { GoGlobe } from "react-icons/go";

const WhoWeAre = () => {
  return (
    <>
      <div className="lg:p-20 p-5 py-10 grid lg:grid-cols-2 grid-cols-1">
        <div className="flex justify-center items-center">
          <img src={WWRImg} alt="" className="rounded-md drop-shadow-lg" />
        </div>
        <div className="flex justify-center items-center lg:px-20 py-10">
          <div>
            <p className="text-xl font-medium">Who We Are ?</p>
            <p className="text-3xl font-bold">
              Our penetration testing team uses an industry
            </p>
            <p className="text-lg mt-7 font-medium">
              We provide the full spectrum of IT services and consulting for
              various industries.
            </p>
            <div className="flex lg:flex-row flex-col mt-10 gap-10">
              <div>
                <HiSpeakerphone className="bg-[#FFA50055] border-2 border-orange-400 p-5 w-20 h-20 shadow-lg mb-5 text-cyan-black rounded-full" />
                <p className="font-medium text-xl mb-3">Digital Marketer</p>
                <p className="font-medium text-justify">
                  Our customers get solutions and business opportunities instead
                  of just projects. Our mission is to accelerate.
                </p>
              </div>
              <div>
                <GoGlobe className="bg-[#FFA50055] border-2 border-orange-400 p-5 w-20 h-20 text-cyan-black shadow-lg mb-5 rounded-full" />
                <p className="font-medium text-xl mb-3">Global Entrepreneur</p>
                <p className="font-medium text-justify">
                  Our developers work on trending technologies to design web and
                  on mobile applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
