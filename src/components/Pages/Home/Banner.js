import React from "react";
import chair from "../../../assets/images/chair.png";

const Banner = () => {
  const url =
    "https://cdn.pixabay.com/photo/2015/10/28/16/45/doctor-1010903_960_720.jpg";
  return (
    <div>
      <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="text-left">
            <div
              className=" x-auto h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${url})` }}
            >
              <h1 className="text-6xl font-bold">Your New Smile Start Here</h1>
              <p className="py-6 text-xl">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary uppercas text-white font-bold bg-gradient-to-r from-secondary to-primary">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
