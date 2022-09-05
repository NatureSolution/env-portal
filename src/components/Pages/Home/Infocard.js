import React from "react";

const Infocard = ({ img, cardTitle, bgClass }) => {
  return (
    <div className="">
      <div
        class={`card lg:card-side  text-left shadow-xl px-5 py-5 text-white ${bgClass}`}
      >
        <figure>
          <img className="max-w-full" src={img} alt="Album" />
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
