import React from "react";

const AvailableServiceCard = ({ service }) => {
  return (
    <div>
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <button>
            <h2 class="card-title text-primary">{service.name}</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailableServiceCard;
