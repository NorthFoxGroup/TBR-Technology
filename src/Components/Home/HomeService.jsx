import React from "react";
import { AiFillSetting } from "react-icons/ai";
import B2B from "../../assets/b2b.png";
import C2C from "../../assets/c2c.png";
import ECommerce from "../../assets/ecommerce.png";
import Label from "../../assets/label.png";
import Fintech from "../../assets/fintech.png";
import API from "../../assets/api.png";

const HomeService = () => {
  return (
    <div className="p-20 h-full flex justify-center flex-col bg-[#023047]">
      <div className=" mb-20">
        <div className="flex gap-2 mb-3 text-white">
          <AiFillSetting className="text-3xl text-orange-400" />
          <p className="text-2xl font-medium uppercase">Services</p>
        </div>
        <p className="text-3xl font-medium text-white">
          We provide various kind of service for you
        </p>
        <p className="mt-2 text-slate-400">
          Discover the digital possibilities for your brand with our
          comprehensive suite of services.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-14">
        <div className="group flex flex-col items-center p-8 rounded-lg shadow-lg transition duration-700 ease-in-out hover:shadow-2xl bg-[#ffffff11] hover:bg-white drop-shadow-lg hover:cursor-pointer">
          <div className="w-24 h-24 p-6 bg-green-200 rounded-full ">
            <img src={B2B} alt="" />
          </div>
          <p className="font-bold text-xl my-5 text-white group-hover:text-black">
            B2B Service
          </p>
          <p className="font-medium text-sm text-slate-400 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            eaque dolor ipsam consectetur rerum velit corrupti facilis,
            similique nesciunt eveniet!
          </p>
        </div>
        <div className="group flex flex-col items-center p-8 rounded-lg shadow-lg transition duration-700 ease-in-out hover:shadow-2xl bg-[#ffffff11] hover:bg-white drop-shadow-lg hover:cursor-pointer">
          <div className="w-24 h-24 p-6 bg-pink-200 rounded-full">
            <img src={C2C} alt="" />
          </div>
          <p className="font-bold text-xl my-5 text-white group-hover:text-black">
            C2C Service
          </p>
          <p className="font-medium text-sm text-slate-400 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            libero eos nemo dolorum, labore tenetur ab quisquam et quia
            nesciunt.
          </p>
        </div>
        <div className="group flex flex-col items-center p-8 rounded-lg shadow-lg transition duration-700 ease-in-out hover:shadow-2xl bg-[#ffffff11] hover:bg-white drop-shadow-lg hover:cursor-pointer">
          <div className="w-24 h-24 p-6 bg-red-200 rounded-full">
            <img src={Label} alt="" />
          </div>
          <p className="font-bold text-xl my-5 text-white group-hover:text-black">
            White Label & Reseller
          </p>
          <p className="font-medium text-sm text-slate-400 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad vel quo
            quasi itaque perspiciatis temporibus aspernatur voluptatibus,
            doloremque delectus atque.
          </p>
        </div>
        <div className="group flex flex-col items-center p-8 rounded-lg shadow-lg transition duration-700 ease-in-out hover:shadow-2xl bg-[#ffffff11] hover:bg-white drop-shadow-lg hover:cursor-pointer">
          <div className="w-24 h-24 p-6 bg-purple-200 rounded-full">
            <img src={ECommerce} alt="" />
          </div>
          <p className="font-bold text-xl my-5 text-white group-hover:text-black">
            Ecommerce
          </p>
          <p className="font-medium text-sm text-slate-500 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            iusto ab dolores repudiandae saepe, quas nesciunt expedita excepturi
            ipsam perferendis.
          </p>
        </div>
        <div className="group flex flex-col items-center p-8 rounded-lg shadow-lg transition duration-700 ease-in-out hover:shadow-2xl bg-[#ffffff11] hover:bg-white drop-shadow-lg hover:cursor-pointer">
          <div className="w-24 h-24 p-6 bg-orange-200 rounded-full">
            <img src={Fintech} alt="" />
          </div>
          <p className="font-bold text-xl my-5 text-white group-hover:text-black">
            Fintech
          </p>
          <p className="font-medium text-sm text-slate-500 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            vero eos. Molestiae mollitia asperiores maiores quia quos possimus
            tempora iure?
          </p>
        </div>
        <div className="group flex flex-col items-center p-8 rounded-lg shadow-lg transition duration-700 ease-in-out hover:shadow-2xl bg-[#ffffff11] hover:bg-white drop-shadow-lg hover:cursor-pointer">
          <div className="w-24 h-24 p-6 bg-cyan-200 rounded-full">
            <img src={API} alt="" />
          </div>
          <p className="font-bold text-xl my-5 text-white group-hover:text-black">
            Banking API
          </p>
          <p className="font-medium text-sm text-slate-500 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            earum error quaerat debitis molestiae sed unde et autem! Sint,
            placeat?
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
