import React from "react";
import Contact from "../ContactUs/Contact";
import ContactUs from "../ContactUs/ContactUs";
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <div className="px-12">
        <Banner />
        <Info />
        <Services />
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
