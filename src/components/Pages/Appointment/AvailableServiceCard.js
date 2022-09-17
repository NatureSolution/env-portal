import React from "react";

const AvailableServiceCard = ({ service, setTreatment }) => {
  const { name, slots } = service;

  return (
    <div>
      <div className="card w-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl text-secondary justify-center">
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
          <div className="card-actions justify-center">
            <label
              htmlFor="my-modal-6"
              disabled={slots.length < 1}
              onClick={() => setTreatment(service)}
              className="btn btn-sm btn-secondary text-white uppercase"
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
