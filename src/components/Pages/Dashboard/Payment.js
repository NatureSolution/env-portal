import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loadding from "../../Sheared/Loadding";
import CheckoutForm from "./CheckoutForm.js";
const stripePromise = loadStripe(
  "pk_test_51Lqs9mCHloie6pH4b64uRZ0lmzk8ExvnBVEm9OwPMsuY2qb5qGTeJWC9fESalGU839mrKHCCf3GA84PqC9qVKYzM00VwwUhAZU"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://peaceful-inlet-00145.herokuapp.com/booking/${id}`;

  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loadding></Loadding>;
  }

  return (
    <div>
      <div className="card w-50 max-w-md  bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <h2 className="card-title">Hello {appointment.patientName}</h2>
          <h2 className="card-title">Please Pay for {appointment.treatment}</h2>
          <p>
            Your Appointment{" "}
            <span className="text-orange-500">{appointment.date}</span> at{" "}
            <span className="font-bold">{appointment.slot}</span>
          </p>
          <p>Please pay : $ {appointment.price}</p>
          <a
            className="text-xl font-bold"
            href="https://stripe.com/docs/testing"
          >
            Use this Testing Card info{" "}
          </a>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
