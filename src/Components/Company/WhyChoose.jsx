import React from "react";
import WCBG from "../../assets/whychoose.jpg";
import { AiFillQuestionCircle, AiFillSetting } from "react-icons/ai";
import { CgShapeCircle } from "react-icons/cg";
import Customize from "../../assets/customize.png";
import TestedSolution from "../../assets/testedSolution.png";
import { MdMobileFriendly } from "react-icons/md";
import YourApp from "../../assets/yourApp.png";
import { BsBookmarkCheckFill } from "react-icons/bs";
import Saving from "../../assets/saving.png";
import { GiPiggyBank, GiElectric } from "react-icons/gi";
import Security from "../../assets/security.png";

const WhyChoose = () => {
  return (
    <>
      <div className="min-h-screen relative bg-[#00000088]">
        <img
          src={WCBG}
          className="h-screen w-full object-cover mix-blend-overlay"
          alt=""
        />
        <div className="absolute p-5 bg-[#ffffff22] rounded-md top-1/3 right-32 shadow-lg">
          <p className="flex items-center text-xl font-medium text-orange-400">
            <AiFillQuestionCircle className="mr-2" /> WHY CHOOSE US
          </p>
          <p className="font-bold text-4xl leading-tight my-5 text-white">
            We Are <br /> Passionate Strategist <br /> To Help Your Business
            Thrive
          </p>
          <p className="font-medium text-slate-200">
            Customized Solution | Latest Technology | Go Live In No Time
          </p>
        </div>
      </div>

      <div className="p-20">
        <div className="my-10">
          <p className="text-3xl font-medium">
            5 Reasons To Choose{" "}
            <span className="text-orange-400">TRB Technology</span> For Your
            Business Idea
          </p>
          <p className="font-medium text-lg">
            Leverage the power of innovation and technology to boost your brand,
            with the industry leaders catering 5K+ businesses globally.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 bg-[#00B0FF33] rounded-md mb-20">
          <div className="flex justify-center items-start flex-col p-10">
            <AiFillSetting className="text-4xl text-cyan-500" />
            <p className="my-5 text-2xl font-bold">
              Customize The Way You Like
            </p>
            <p className="text-lg font-medium mb-3">
              With a strong building foundation ready, we will customize the
              technology solution as per your business needs & use case
            </p>
            <p className="my-2 flex items-center">
              <CgShapeCircle className="mr-2 text-xl" /> Choice to tailor the
              look & feel of your app
            </p>
            <p className="my-2 flex items-center">
              <CgShapeCircle className="mr-2 text-xl" />
              Give your customers a personalized experience
            </p>
            <button className="mt-5">Get In Touch</button>
          </div>
          <div className="">
            <img src={Customize} alt="" className="drop-shadow-md" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 bg-[#00BFA633] rounded-md my-20">
          <div className="">
            <img src={TestedSolution} alt="" className="drop-shadow-md" />
          </div>
          <div className="flex justify-center items-start flex-col p-10">
            <MdMobileFriendly className="text-4xl text-green-500" />
            <p className="my-5 text-2xl font-bold">Tried And Tested Solution</p>
            <p className="text-lg font-medium mb-3">
              You get a scalable & bug-free app solution, catering numerous
              enterprises with relevant security measures
            </p>
            <p className="my-2 flex items-center">
              <CgShapeCircle className="mr-2 text-xl" />
              Trusted solution running successfully for 5K+ global clients
            </p>
            <p className="my-2 flex items-center">
              <CgShapeCircle className="mr-2 text-xl" />
              Validated user interface (UI) to meet modern day challenges
            </p>
            <button className="mt-5 border-green-500 hover:bg-green-500">
              Get In Touch
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 bg-[#F9A82633] rounded-md mb-20">
          <div className="flex justify-center items-start flex-col p-10">
            <BsBookmarkCheckFill className="text-4xl text-orange-500" />
            <p className="my-5 text-2xl font-bold">Your App, Your Rights</p>
            <p className="text-lg font-medium mb-3">
              Own the rights to the source code of your mobile app & get all the
              intellectual property rights for the same
            </p>
            <p className="my-2 flex items-center">
              <CgShapeCircle className="mr-2 text-xl" /> Get the complete source
              code script for your app
            </p>
            <p className="my-2 flex items-center">
              <CgShapeCircle className="mr-2 text-xl" />
              Upgrade your app with the changing market needs
            </p>
            <button className="mt-5 border-orange-500 hover:bg-orange-500">
              Get In Touch
            </button>
          </div>
          <div className="">
            <img src={YourApp} alt="" className="drop-shadow-md" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 bg-[#536DFE33] rounded-md my-20">
          <div className="">
            <img src={Saving} alt="" className="drop-shadow-md" />
          </div>
          <div className="flex justify-center items-start flex-col p-10">
            <GiPiggyBank className="text-4xl text-indigo-500" />
            <p className="my-5 text-2xl font-bold">Save Time And Money</p>
            <p className="text-lg font-medium mb-3">
              Our proven & tested base product assists in building-up of your
              business app at a faster rate & in your budget range
            </p>
            <p className="my-2 flex items-center">
              <CgShapeCircle className="mr-2 text-xl" />
              No need to develop your app from the scratch
            </p>
            <p className="my-2 flex items-center">
              <CgShapeCircle className="mr-2 text-xl" />
              Get your business running in no time
            </p>
            <button className="mt-5 border-indigo-500 hover:bg-indigo-500">
              Get In Touch
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 bg-[#F5005733] rounded-md my-20 py-10">
          <div className="flex justify-center items-start flex-col p-10">
            <GiElectric className="text-4xl text-pink-500" />
            <p className="my-5 text-2xl font-bold">
              Add More Value With Technology
            </p>
            <p className="text-lg font-medium mb-3">
              Unlike off-the-shelf products, we provide you digitals solutions
              which are adaptable to changing customer demand & behavior
            </p>
            <p className="my-2 flex items-center">
              <CgShapeCircle className="mr-2 text-xl" />
              Flexibility to use the latest tools for a scalable & robust app
            </p>
            <p className="my-2 flex items-center">
              <CgShapeCircle className="mr-2 text-xl" />
              Easier third-party integrations to improve your business processes
            </p>
            <button className="mt-5 border-pink-500 hover:bg-pink-500">
              Get In Touch
            </button>
          </div>
          <div className="">
            <img src={Security} alt="" className="drop-shadow-md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
