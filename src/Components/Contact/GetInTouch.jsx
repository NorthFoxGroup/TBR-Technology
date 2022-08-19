import React from "react";
import { FaUserAlt, FaEnvelope, FaPhoneAlt, FaGlobe } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BsPinMapFill, BsHeadset } from "react-icons/bs";

const GetInTouch = () => {
  return (
    <div className="p-20">
      <div className="grid grid-cols-2">
        <div className="relative pr-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224369.03562485037!2d77.26107935916413!3d28.51668171078947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1660582993889!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            title="Noida Map"
            referrerpolicy="no-referrer-when-downgrade"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative pl-10">
          <form>
            <div className="relative">
              <p className="text-3xl font-bold mb-5">Get in Touch</p>
              <span className="border-b-4 border-orange-400 h-1 w-20 absolute left-0 -bottom-4"></span>
            </div>
            <div className="grid grid-cols-2 mt-16 gap-10">
              <div className="relative">
                <FaUserAlt className="absolute top-2 left-3" />
                <input
                  className="font-medium border-b-2 pl-10 py-1 border-slate-500 focus:outline-none w-full"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute top-2 left-3" />
                <input
                  className="font-medium border-b-2 pl-10 py-1 border-slate-500 focus:outline-none w-full"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="relative">
                <FaPhoneAlt className="absolute top-2 left-3" />
                <input
                  className="font-medium border-b-2 pl-10 py-1 border-slate-500 focus:outline-none w-full"
                  type="tel"
                  placeholder="Phone Number"
                />
              </div>
              <div className="relative">
                <FaGlobe className="absolute top-2 left-3" />
                <input
                  className="font-medium border-b-2 pl-10 py-1 border-slate-500 focus:outline-none w-full"
                  type="text"
                  placeholder="Your Website"
                />
              </div>
              <div className="relative col-span-2">
                <MdMessage className="absolute top-2 left-3" />
                <textarea
                  className="font-medium border-b-2 pl-10 py-1 border-slate-500 focus:outline-none w-full"
                  type="text"
                  placeholder="Your Message Here..."
                />
              </div>
              <button className="px-10 w-40">Submit</button>
            </div>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10 mt-10">
        <div className="bg-slate-100 rounded-md p-5 flex flex-col items-center justify-center shadow-lg">
          <BsPinMapFill className="text-4xl mb-3 text-cyan-500" />
          <p className="text-2xl mb-3 font-medium">Office address</p>
          <p className="font-medium text-slate-600">
            Ta-134/A, Gulshan Badda Link Rd, Dhaka
          </p>
        </div>
        <div className="bg-slate-100 rounded-md p-5 flex flex-col items-center justify-center shadow-lg">
          <FaEnvelope className="text-4xl mb-3 text-cyan-500" />
          <p className="text-2xl mb-3 font-medium ">Email us</p>
          <a
            href="mailto:northfoxgroup@hotmail.com"
            className="font-medium text-slate-600"
          >
            support@rstheme.com
          </a>
          <a
            href="mailto:northfoxgroup@hotmail.com"
            className="font-medium text-slate-600"
          >
            info@codesless.com
          </a>
        </div>
        <div className="bg-slate-100 rounded-md p-5 flex flex-col items-center justify-center shadow-lg">
          <BsHeadset className="text-4xl mb-3 text-cyan-500" />
          <p className="text-2xl mb-3 font-medium">Call us</p>
          <a
            href="tel:+919033717372"
            rel="noreferrer"
            className="font-medium text-slate-600"
          >
            (+088)589-8745
          </a>
          <a
            href="tel:+919033717372"
            rel="noreferrer"
            className="font-medium text-slate-600"
          >
            (+088)222-9999
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
