import React from "react";
import Contact from "../ContactUs/Contact";
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <div className="px-12 container">
        <Banner />
        <Info />
        <Services />
        <Testimonials></Testimonials>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
