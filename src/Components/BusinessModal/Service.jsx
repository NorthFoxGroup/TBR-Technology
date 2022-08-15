import React from "react";
import p1 from "../../assets/1.png";
import p2 from "../../assets/2.png";
import p3 from "../../assets/3.png";
import p4 from "../../assets/4.png";
import p5 from "../../assets/5.png";
import p6 from "../../assets/6.png";

const Service = () => {
  return (
    <>
      <div className="p-20">
        <div className="flex justify-between">
          <p className="text-4xl font-medium">
            What services we provide to our customers business
          </p>
          <button>View Services</button>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-16 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <img src={p1} alt="" className="w-20 mb-2 drop-shadow-md" />
            <div className="text-center flex flex-col items-center">
              <p className="text-2xl font-medium mb-3">Business Planning</p>
              <p className="text-sm font-medium w-1/2">
                Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio
                ac nibh luctus consulting
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={p2} alt="" className="w-20 mb-2 drop-shadow-md" />
            <div className="text-center flex flex-col items-center">

              <p className="text-2xl font-medium mb-3">Tax Strategy</p>
              <p className="text-sm font-medium w-1/2">
                Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio
                ac nibh luctus consulting.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={p3} alt="" className="w-20 mb-2 drop-shadow-md" />
            <div className="text-center flex flex-col items-center">

              <p className="text-2xl font-medium mb-3">Financial Advices</p>
              <p className="text-sm font-medium w-1/2">
                Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio
                ac nibh luctus consulting.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={p4} alt="" className="w-20 mb-2 drop-shadow-md" />
            <div className="text-center flex flex-col items-center">

              <p className="text-2xl font-medium mb-3">Insurance Strategy</p>
              <p className="text-sm font-medium w-1/2">
                Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio
                ac nibh luctus consulting.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={p5} alt="" className="w-20 mb-2 drop-shadow-md" />

            <div className="text-center flex flex-col items-center">

              <p className="text-2xl font-medium mb-3">Start Ups</p>
              <p className="text-sm font-medium w-1/2">
                Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio
                ac nibh luctus consulting.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={p6} alt="" className="w-20 mb-2 drop-shadow-md" />
            <div className="text-center flex flex-col items-center">
              <p className="text-2xl font-medium mb-3">Manage Investment</p>
              <p className="text-sm font-medium w-1/2">
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

export default Service;
