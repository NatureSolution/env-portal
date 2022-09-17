import { format } from "date-fns";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Loadding from "../../Sheared/Loadding";
import AvailableServiceCard from "./AvailableServiceCard";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formatedDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formatedDate], () =>
    fetch(`http://localhost:5000/available?date=${formatedDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loadding></Loadding>;
  }

  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formatedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formatedDate]);

  return (
    <div>
      <div className="m-3 align-items-center">
        <h1 className="text-primary text-xl bold">
          Available Appointment on: {format(date, "PP")}
        </h1>
        <h4 className="text-3xl">Please Select The Service </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10">
          {services?.map((service) => (
            <AvailableServiceCard
              key={service._id}
              service={service}
              setTreatment={setTreatment}
            ></AvailableServiceCard>
          ))}
          {treatment && (
            <BookingModal
              date={date}
              treatment={treatment}
              setTreatment={setTreatment}
              refetch={refetch}
            ></BookingModal>
          )}
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointment;
