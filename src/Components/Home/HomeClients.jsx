import React from "react";
import { FaUsers } from "react-icons/fa";
import { client } from "../../assets/client";

const HomeClients = () => {
  return (
    <>
      <div className="lg:p-20 p-5 py-10 min-h-screen">
        <div className="mb-20">
          <div className="flex gap-2 mb-3">
            <FaUsers className="text-3xl text-orange-400" />
            <p className="text-2xl font-medium uppercase">Clients</p>
          </div>
          <p className="text-3xl font-medium ">
            We Have Made Them Taste Success
          </p>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-14">
          {client.map((item) => {
            return (
              <div className="flex justify-center">
                <img src={item} className="h-10" alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeClients;
