import { format } from "date-fns";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AvailableServiceCard from "./AvailableServiceCard";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="m-3">
        <h1 className="text-primary">
          Available Appointment on: {format(date, "PP")}
        </h1>
        <h4 className="text-3xl">Please Select The Service </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10">
          {services.map((service) => (
            <AvailableServiceCard
              key={service._id}
              service={service}
            ></AvailableServiceCard>
          ))}
        </div>
      </div>
      <div>
        <div>Service Details</div>
      </div>
    </div>
  );
};

export default AvailableAppointment;
