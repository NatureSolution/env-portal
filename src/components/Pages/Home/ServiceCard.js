import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div>
      <div className="card glass py-5">
        <figure>
          <img src={service.img} alt="car!" />
        </figure>
        <div className="card-body text-start">
          <h2 className="card-title">{service.name}</h2>
          <p>{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
