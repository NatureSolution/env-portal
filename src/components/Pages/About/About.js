import React from "react";
import AboutDetails from "./AboutDetails";
import AboutSum from "./AboutSum";

const About = () => {
  return (
    <div>
      <div>
        <AboutSum></AboutSum>
        <AboutDetails></AboutDetails>
      </div>
      <button>Primary</button>
    </div>
  );
};

export default About;
