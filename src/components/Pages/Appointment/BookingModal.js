import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const [user] = useAuthState(auth);
  const { _id, name, slots } = treatment;
  const formatedDate = format(date, "PP");
  const handelBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name, slot);
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formatedDate,
      slot: slot,
      patient: user.email,
      patientName: user.displayName,
      phoneNo: event.target.phone.value,
    };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast(`Appointment is Set ${formatedDate} at ${slot}`);
        } else {
          toast.error(
            ` Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        setTreatment(null);
      });
  };
  // if (!user?.emailVerified) {
  //   alert("Varify Your Email");
  // }
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-xl text-secondary my-5">
            Booking for: {name}
          </h3>
          <form
            onSubmit={handelBooking}
            action=""
            className="grid gric-cols-1 gap-4 justify-items-center"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option value={slot} key={index}>
                  {/* use index for solve key problem  */}
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              disabled
              value={user?.displayName || ""}
              name="name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="eamil"
              name="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="submit"
              value="Submit"
              // disabled={!user?.emailVerified}
              placeholder="Type here"
              className="btn btn-primary w-full max-w-xs text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
