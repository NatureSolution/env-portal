import React, { useState } from "react";
import { useEffect } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";

import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loadding from "../../Sheared/Loadding";
import { Navigate } from "react-router-dom";

const ResetePassword = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (sending) {
    return <Loadding />;
  }
  if (error) {
    return (
      <div>
        <p className="text-xl text-purple-700 bold">Invalid Email</p>
        <p>Please Input Valid Email</p>
      </div>
    );
  }
  if (sending) {
    navigate(from, { replace: true });
  }
  // Here Can use useEffect to reduce error

  return (
    <div className="App">
      <input
        type="email"
        placeholder="Yout Email"
        className="input input-bordered w-full max-w-xs"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={async () => {
          await sendPasswordResetEmail(email);
          alert("Sent email");
        }}
      >
        Reset password
      </button>
    </div>
  );
};

export default ResetePassword;
