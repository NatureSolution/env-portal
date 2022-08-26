import React from "react";

const Infocard = ({ img, cardTitle }) => {
  return (
    <div className="">
      <div class="card lg:card-side bg-gradient-to-r from-secondary to-primary text-left shadow-xl px-5 py-0 text-white">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{cardTitle}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    </div>
  );
};

export default Infocard;
