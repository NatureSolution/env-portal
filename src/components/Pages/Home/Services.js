import React from "react";
import fluoried from "./../../../assets/images/fluoride.png";
import cavity from "./../../../assets/images/cavity.png";
import whitening from "./../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";
import ServiceDetails from "./ServiceDetails";
import MakeAppointment from "./MakeAppointment";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluride Treatment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, reprehenderit architecto. Sapiente explicabo nihil inventore. Aut labore ipsum numquam enim.",
      img: fluoried,
    },
    {
      _id: 2,
      name: "Cavity Fealling",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, reprehenderit architecto. Sapiente explicabo nihil inventore. Aut labore ipsum numquam enim.",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitining",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, reprehenderit architecto. Sapiente explicabo nihil inventore. Aut labore ipsum numquam enim.",
      img: whitening,
    },
  ];
  return (
    <div className="my-28">
      <div className=" text-center  uppercase my-5">
        <h3 className="text-xl font-bold text-primary">Our Services</h3>
        <h5 className="text-3xl">Services we Provide</h5>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
        {/* <ServiceCard img={fluoried} cardTitle="Fluride Treatment"></ServiceCard>
        <ServiceCard img={cavity} cardTitle="Cavity Felaling"></ServiceCard>
        <ServiceCard img={whitening} cardTitle="Teeth Whitining"></ServiceCard> */}
      </div>
      <div className="py-5">
        <ServiceDetails></ServiceDetails>
      </div>
      <div className="py-5">
        <MakeAppointment />
      </div>
    </div>
  );
};

export default Services;
