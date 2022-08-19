import React from "react";
import AboutCard from "../Components/About/AboutCard";
import AboutHead from "../Components/About/AboutHead";
import AboutIdea from "../Components/About/AboutIdea";
import AboutPlan from "../Components/About/AboutPlan";

const About = () => {
  return (
    <>
      <AboutHead />
      <AboutIdea />
      <AboutCard />
      <AboutPlan />
    </>
  );
};

export default About;
