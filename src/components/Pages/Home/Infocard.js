import React from "react";

const Infocard = ({ img, cardTitle, bgclassName }) => {
  return (
    <div className="">
      <div
        className={`card lg:card-side  text-left shadow-xl px-5 py-5 text-white ${bgclassName}`}
      >
        <figure>
          <img className="max-w-full" src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    </div>
  );
};

export default Infocard;
