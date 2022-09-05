import React from "react";
import clock from "./../../../assets/icons/clock.svg";
import location from "./../../../assets/icons/marker.svg";
import phone from "./../../../assets/icons/phone.svg";
import Infocard from "./Infocard";

const Info = () => {
  const info = [{ title: "" }];
  return (
    <div className="grid grid-clos-1 lg:grid-cols-3 gap-5 py-5">
      <Infocard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      ></Infocard>
      <Infocard
        cardTitle="Our Location"
        bgClass="bg-accent"
        img={location}
      ></Infocard>
      <Infocard
        cardTitle="Contact Us Now"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={phone}
      ></Infocard>
    </div>
  );
};

export default Info;
