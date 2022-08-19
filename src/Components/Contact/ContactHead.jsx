import React from "react";
import ContactBG from "../../assets/contactUsBg.jpg";

const ContactHead = () => {
  return (
    <>
      <div className="min-h-screen relative bg-[#00000099]">
        <img
          src={ContactBG}
          className="w-full h-screen object-cover mix-blend-overlay"
          alt=""
        />
        <div className="absolute top-1/2 lg:left-44 text-white lg:w-1/2 w-full p-10">
          <p className="font-bold text-5xl">Have questions - contact us</p>
          <p className="text-lg mt-5">
            Excepteur sint occaecat cupidatat non proident, sunt in coulpa qui
            official modeserunt mollit anim id est laborum 20 years experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactHead;
