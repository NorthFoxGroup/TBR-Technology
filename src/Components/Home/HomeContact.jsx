import React from "react";
import DigiSolution from "../../assets/digital-solution.webp";
import { MdTouchApp } from "react-icons/md";
import { Link } from "react-router-dom";

const HomeContact = () => {
  return (
    <>
      <div className="p-20">
        <div className="relative">
          <img
            src={DigiSolution}
            alt=""
            className="rounded-lg w-full shadow-lg"
          />
          <div className="bg-white z-10 w-1/3 absolute right-10 bottom-10 p-10 rounded shadow-lg">
            <p className="text-2xl font-medium">
              Get An Exclusively Brewed Digital Solution For Your Business
            </p>
            <Link to="/contact">
              <button className="mt-5 flex items-center">
                <MdTouchApp className="mr-1 text-xl" /> Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContact;
