import React from "react";
import AboutBG from "../../assets/about.jpg";

const AboutHead = () => {
  return (
    <>
      <div className="relative">
        <img src={AboutBG} className="" alt="" />
        <div className="top-1/2 text-white absolute left-20">
          <p className="text-6xl font-medium">We strengthen organizations</p>
          <p className="mt-5 text-justify text-xl w-2/3 leading-relaxed">
            Excepteur sint occaecat cupidatat non proident, sunt in coulpa qui
            official modeserunt mollit anim id est laborum 20 years experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutHead;
