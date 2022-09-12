import React from "react";

const AvailableServiceCard = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-3xl text-secondary justify-center">
            {name}
          </h2>
          <p>
            {slots.length > 0 ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-red-500"> No Slot Available</span>
            )}
          </p>
          <p>
            {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
          </p>
          <div class="card-actions justify-center">
            <label
              for="my-modal-6"
              disabled={slots.length < 1}
              onClick={() => setTreatment(service)}
              class="btn btn-secondary text-white uppercase"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableServiceCard;
