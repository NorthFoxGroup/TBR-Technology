import React from "react";
import AboutBG from "../../assets/about.jpg";

const AboutHead = () => {
  return (
    <>
      <div className="relative">
        <img src={AboutBG} className="w-full h-screen lg:object-cover object-cover object-right" alt="" />
        <div className="top-1/2 text-white absolute lg:left-20 p-5">
          <p className="lg:text-6xl text-3xl font-medium">We strengthen organizations</p>
          <p className="mt-5 text-justify text-xl lg:w-2/3 w-full leading-relaxed">
            Excepteur sint occaecat cupidatat non proident, sunt in coulpa qui
            official modeserunt mollit anim id est laborum 20 years experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutHead;
