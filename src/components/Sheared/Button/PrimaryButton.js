import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div className="card-actions justify-start">
      <button className="btn btn-primary uppercas text-white font-bold bg-gradient-to-r from-secondary to-primary">
        Get Started
        {/* Cant solve the problem of childeren 71-7 8.18*/}
      </button>
    </div>
  );
};

export default PrimaryButton;
