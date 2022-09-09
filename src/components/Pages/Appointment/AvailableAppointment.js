import { format } from "date-fns";
import React from "react";

const AvailableAppointment = ({ date }) => {
  return (
    <div>
      <h1>Available Appointment on: {format(date, "PP")}</h1>
    </div>
  );
};

export default AvailableAppointment;
