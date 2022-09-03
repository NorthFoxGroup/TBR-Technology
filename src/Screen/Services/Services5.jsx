import React from "react";
import { Link } from "react-router-dom";
import ServiceBG from "../../assets/services.svg";
import WWRImg from "../../assets/whoweare.jpg";
import { HiSpeakerphone } from "react-icons/hi";
import { GoGlobe } from "react-icons/go";
import p1 from "../../assets/1.png";
import p2 from "../../assets/2.png";
import p3 from "../../assets/3.png";
import p4 from "../../assets/4.png";
import p5 from "../../assets/5.png";
import p6 from "../../assets/6.png";

const Services5 = () => {
  return (
    <>
      <div className="min-h-screen lg:p-20 p-5 py-10 grid lg:grid-cols-2 grid-cols-1 bg-blue-200 pt-20">
        <div className="flex justify-center items-center">
          <div className="lg:w-9/12 w-full">
            <p>Service 5</p>
            <p className="lg:text-5xl text-3xl font-medium leading-snug">
              Custom Software Solutions To Serve Your Enterprise Goals
            </p>
            <p className="lg:text-2xl text-lg my-5">
              Automate Your Business Processes To Boost Productivity By Several
              Times
            </p>
            <Link to="/contact">
              <button className="hover:bg-green-600 border-green-600 mt-10">
                Book Free Demo
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={ServiceBG}
            alt=""
            className="h-full object-contain drop-shadow-md"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:p-20 p-5 py-10">
        <p className="lg:text-4xl text-2xl font-medium">
          Excellent Solutions, Exceptional Performance
        </p>
        <p className="text font-medium mt-3 mb-5">
          We deliver clone applications built with cutting-edge technologies to
          help businesses
        </p>
        <p className="text-2xl text-cyan-400">Run, Grow & Scale.</p>
        <div className="grid lg:grid-cols-5 grid-cols-1 gap-5 my-10">
          <button className="rounded-full">Rideshare/Taxi App</button>
          <button className="rounded-full">Food Delivery</button>
          <button className="rounded-full">On-demand Delivery</button>
          <button className="rounded-full">Grocery Delivery</button>
          <button className="rounded-full">Multi-Services Marketplace</button>
        </div>
        <div className="grid lg:grid-cols-5 grid-cols-1 gap-5">
          <button className="rounded-full">Rental Marketplace</button>
          <button className="rounded-full">Social Media & Dating App</button>
          <button className="rounded-full">Healthcare & Pharmacy App</button>
          <button className="rounded-full">E-commerce App</button>
          <button className="rounded-full">Freelance Marketplace</button>
        </div>
      </div>
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
      <div className="lg:p-20 p-5 py-10">
        <div className="flex lg:flex-row flex-col lg:justify-between items-start">
          <p className="lg:text-4xl text-xl font-medium lg:mb-0 mb-5">
            What services we provide to our customers business
          </p>
          <button>View Services</button>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-16 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <img src={p1} alt="" className="w-20 mb-2 drop-shadow-md" />
            <div className="text-center flex flex-col items-center">
              <p className="text-2xl font-medium mb-3">Business Planning</p>
              <p className="text-sm font-medium lg:w-1/2 w-full">
                Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio
                ac nibh luctus consulting
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={p2} alt="" className="w-20 mb-2 drop-shadow-md" />
            <div className="text-center flex flex-col items-center">
              <p className="text-2xl font-medium mb-3">Tax Strategy</p>
              <p className="text-sm font-medium lg:w-1/2 w-full">
                Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio
                ac nibh luctus consulting.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={p3} alt="" className="w-20 mb-2 drop-shadow-md" />
            <div className="text-center flex flex-col items-center">
              <p className="text-2xl font-medium mb-3">Financial Advices</p>
              <p className="text-sm font-medium lg:w-1/2 w-full">
                Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio
                ac nibh luctus consulting.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={p4} alt="" className="w-20 mb-2 drop-shadow-md" />
            <div className="text-center flex flex-col items-center">
              <p className="text-2xl font-medium mb-3">Insurance Strategy</p>
              <p className="text-sm font-medium lg:w-1/2 w-full">
                Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio
                ac nibh luctus consulting.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={p5} alt="" className="w-20 mb-2 drop-shadow-md" />

            <div className="text-center flex flex-col items-center">
              <p className="text-2xl font-medium mb-3">Start Ups</p>
              <p className="text-sm font-medium lg:w-1/2 w-full">
                Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio
                ac nibh luctus consulting.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={p6} alt="" className="w-20 mb-2 drop-shadow-md" />
            <div className="text-center flex flex-col items-center">
              <p className="text-2xl font-medium mb-3">Manage Investment</p>
              <p className="text-sm font-medium lg:w-1/2 w-full">
                Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio
                ac nibh luctus consulting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services5;
