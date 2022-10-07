import React from "react";
import AboutDetails from "./AboutDetails";
import AboutHeader from "./AboutHeader";

import AboutSum from "./AboutSum";

const About = () => {
  return (
    <div>
      <div>
        <AboutHeader />
        <AboutSum></AboutSum>
        <AboutDetails></AboutDetails>
      </div>
      <button>Primary</button>
    </div>
  );
};

export default About;
