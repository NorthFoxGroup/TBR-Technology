import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Benefits from "../../assets/benefits.png";
import Onboarding from "../../assets/onboarding.webp";

const HomeCard = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-10 p-20">
        <div className="flex items-center">
          <img src={Benefits} alt="" className="rounded-lg shadow-xl" />
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="text-3xl font-medium">BENEFITS</p>
          <p className="text-justify py-5 font-medium text-gray-500 w-9/12">
            Our Technical Team will help you to integration API with source
            code, we have also ready made highly tested software to start
            working in very less time
          </p>
          <ul>
            <li className="m-0 my-3  grid grid-flow-col items-center justify-start   hover:text-green-600 text-gray-400">
              <AiOutlineCheckCircle className="mr-2 text-green-600 w-5 h-5" />
              Direct Onboarding from Bank
            </li>
            <li className="m-0 my-3  grid grid-flow-col items-center justify-start   hover:text-green-600 text-gray-400">
              <AiOutlineCheckCircle className="mr-2 text-green-600 w-5 h-5" />{" "}
              Tested and Production REST API
            </li>
            <li className="m-0 my-3  grid grid-flow-col items-center justify-start   hover:text-green-600 text-gray-400">
              <AiOutlineCheckCircle className="mr-2 text-green-600 w-5 h-5" />{" "}
              High Performing Solutions To Transform
            </li>
            <li className="m-0 my-3  grid grid-flow-col items-center justify-start   hover:text-green-600 text-gray-400">
              <AiOutlineCheckCircle className="mr-2 text-green-600 w-5 h-5" />{" "}
              API Integration Support
            </li>
          </ul>
          <button className="my-4">Get The App</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 p-20">
        <div className="flex flex-col justify-center items-start">
          <p className="text-3xl font-medium">Client Onboarding Process</p>
          <p className="text-justify py-5 font-medium text-gray-500">
            Direct Onboarding to Bank, Read following steps, ICICI Bank Payout
            (IMPS/NEFT/RTGS), UPI Collection, QR Code Collection, Virtual
            Account Collection, eNACH Service
          </p>
          <ul>
            <li className="m-0 my-3 grid grid-flow-col items-center hover:text-green-600 text-gray-400">
              <AiOutlineCheckCircle className="mr-2 text-green-600 w-5 h-5" />
              <p>
                The partner will discuss with the client about the deliverables
                and commercials, and collaborate with the team for onboarding.
              </p>
            </li>
            <li className="m-0 my-3  grid grid-flow-col items-center justify-start   hover:text-green-600 text-gray-400">
              <AiOutlineCheckCircle className="mr-2 text-green-600 w-5 h-5" />
              <p>
                The client will send soft copy of the API Banking application
                form from his registered Email ID to initiate the onboarding
                process.
              </p>
            </li>
            <li className="m-0 my-3  grid grid-flow-col items-center justify-start   hover:text-green-600 text-gray-400">
              <AiOutlineCheckCircle className="mr-2 text-green-600 w-5 h-5" />
              <p>
                The client will send hard copy of the API Banking application
                form to the address mentioned for further processing.
              </p>
            </li>
            <li className="m-0 my-3  grid grid-flow-col items-center justify-start   hover:text-green-600 text-gray-400">
              <AiOutlineCheckCircle className="mr-2 text-green-600 w-5 h-5" />
              <p>
                The Bank will configure client's account at Bank's production
                environment for the requested APIs and services.
              </p>
            </li>
            <li className="m-0 my-3  grid grid-flow-col items-center justify-start   hover:text-green-600 text-gray-400">
              <AiOutlineCheckCircle className="mr-2 text-green-600 w-5 h-5" />
              <p>
                The Bank will send a confirmation Email to the client and
                partner, once the configuration is done at Bank's end.
              </p>
            </li>
            <li className="m-0 my-3  grid grid-flow-col items-center justify-start   hover:text-green-600 text-gray-400">
              <AiOutlineCheckCircle className="mr-2 text-green-600 w-5 h-5" />
              <p>
                The partner will configure the client's detail at their end to
                allow the client to initiate the respective transactions.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img src={Onboarding} alt="" className="rounded-lg shadow-xl" />
        </div>
      </div>
    </>
  );
};

export default HomeCard;
