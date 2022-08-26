import React from "react";
import fluoried from "./../../../assets/images/fluoride.png";
import cavity from "./../../../assets/images/cavity.png";
import whitening from "./../../../assets/images/whitening.png";

const Services = () => {
  return (
    <div>
      <div className="py-5">
        <p className="text-l font-bold text-cyan-400">Our Services</p>
        <p className="text-3xl">Service We Provide</p>
      </div>
      <div className="flex gap-3">
        <div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img src={fluoried} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Fluoride Treatment!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
        <div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img src={cavity} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Cavity Felling</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
        <div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img src={whitening} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Teeth Whitenings</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
