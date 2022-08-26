import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <div className="px-20">
        <Banner />
        <Info />
        <Services />
      </div>
    </div>
  );
};

export default Home;
