import React from "react";

const HomeProviders = () => {
  return (
    <>
      <div className="lg:p-20 p-5 py-10 bg-[#023047] grid lg:grid-cols-5 grid-cols-1 gap-10">
        <div className="text-white flex flex-col justify-center col-span-2">
          <p className="font-medium text-4xl">Providers & Services</p>
          <p className="font-medium w-9/12 my-5 text-slate-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
            distinctio?
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 col-span-3">
          <div className="bg-white rounded-lg flex flex-col justify-center items-center p-5 shadow-lg">
            <p className="text-6xl font-medium text-indigo-500">25+</p>
            <p className="text-center mt-3 text-gray-600 font-bold">
              Active Services
            </p>
          </div>
          <div className="bg-white rounded-lg flex flex-col justify-center items-center p-5 shadow-lg">
            <p className="text-6xl font-medium text-green-500">400+</p>
            <p className="text-center mt-3 text-gray-600 font-bold">
              Providers Operators
            </p>
          </div>
          <div className="bg-white rounded-lg flex flex-col justify-center items-center p-5 shadow-lg">
            <p className="text-6xl font-medium text-pink-500">15+</p>
            <p className="text-center mt-3 text-gray-600 font-bold">
              Providers Operators
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProviders;
