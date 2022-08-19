import React from "react";
import { Link } from "react-router-dom";
import About3 from "../../assets/about-3.png";

const AboutIdea = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:mx-20 lg:p-20 p-10">
        <div className="flex lg:justify-end justify-center items-center">
          <img src={About3} alt="" className="w-2/3" />
        </div>
        <div className="flex justify-center flex-col items-start lg:w-2/3 w-full">
          <p className="text-2xl font-medium">
            We help to implement your ideas into automation
          </p>
          <p className="my-5 text-justify">
            We donec pulvinar magna id leoersi pellentesque impered dignissim
            rhoncus euismod euismod eros vitae best consulting &amp; financial
            services theme .
          </p>
          <p className="my-5 text-justify">
            Business ipsum dolor sit amet nsectetur cing elit. Suspe ndisse
            suscipit sagittis leo sit met entum is not estibulum dignity sim
            posuere cubilia durae. Leo sit met entum cubilia crae. At vero eos
            accusamus et iusto odio dignissimos provident.
          </p>
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutIdea;
