import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../Sheared/Button/PrimaryButton";
import { Link } from "react-router-dom";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justyfy-center items-center my-10"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-120px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 text-start m-5">
        <p className="text-xl text-primary">Appointmrnt</p>
        <h3 className="text-3xl text-white">Make and APpointmen Today</h3>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quas
          corrupti voluptatibus sapiente voluptatum nesciunt voluptate porro
          quaerat consequatur repudiandae eligendi asperiores cumque obcaecati
          nisi, nostrum aliquid officia officiis fugit autem. Perspiciatis vel
          ad repellat, voluptate repudiandae omnis fugiat modi quisquam.
          Accusantium ab officiis atque ex, doloremque asperiores
          exercitationem? Architecto consectetur expedita iure suscipit
          excepturi enim ducimus amet esse culpa ullam soluta illum odio
          similique debitis doloremque, illo non modi?
        </p>
        <Link to="/appointments">
          <button className="btn bg-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            Make Appointment
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MakeAppointment;
