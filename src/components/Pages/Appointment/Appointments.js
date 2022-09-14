import React from "react";
import { useState } from "react";
import AppointmentsBanner from "./AppointmentsBanner";
import AvailableAppointment from "./AvailableAppointment";

const Appointments = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="container">
      <AppointmentsBanner date={date} setDate={setDate} />
      <AvailableAppointment date={date}></AvailableAppointment>
    </div>
  );
};

export default Appointments;
