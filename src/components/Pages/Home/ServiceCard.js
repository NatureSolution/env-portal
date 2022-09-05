import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div>
      <div class="card glass py-5">
        <figure>
          <img src={service.img} alt="car!" />
        </figure>
        <div class="card-body text-start">
          <h2 class="card-title">{service.name}</h2>
          <p>{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
