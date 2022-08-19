import React from "react";
import Badge from "../../assets/badge.png";
import People from "../../assets/people.png";
import Exp from "../../assets/experience.png";

const AboutCard = () => {
  return (
    <div className="bg-[#023047] text-white p-10 px-20 my-10">
      <div className="grid grid-cols-3 justify-center items-center p-10">
        <div className="flex gap-5">
          <div>
            <img src={People} alt="" className="w-16" />
          </div>
          <div>
            <p className="text-xl font-medium">Expert peoples</p>
            <p>At vero eos et accusamus etiusto odio praesentium.</p>
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <img src={Exp} alt="" className="w-16" />
          </div>
          <div>
            <p className="text-xl font-medium">Big experience</p>
            <p>At vero eos et accusamus etiusto odio praesentium.</p>
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <img src={Badge} alt="" className="w-16" />
          </div>
          <div>
            <p className="text-xl font-medium">Committed to quality</p>
            <p>At vero eos et accusamus etiusto odio praesentium.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
