import React from "react";

import HomeService from "../Components/Home/HomeService";
import HomeCard from "../Components/Home/HomeCard";
import HomeProviders from "../Components/Home/HomeProviders";
import HomeHead from "../Components/Home/HomeHead";
import HomePartner from "../Components/Home/HomePartner";

const Home = () => {
  return (
    <>
      <HomeHead />
      <HomeService />
      <HomeCard />
      <HomeProviders />
      <HomePartner />
    </>
  );
};

export default Home;
