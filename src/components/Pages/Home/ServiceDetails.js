import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../Sheared/Button/PrimaryButton";

const ServiceDetails = () => {
  return (
    <div>
      <div class="card lg:card-side bg-base-100 py-20 ">
        <figure>
          <img class=" " src={treatment} alt="Album" />
        </figure>
        <div class="card-body m-20">
          <div className="text-start">
            <h2 class="card-title text-5xl">
              Exceptional Denatl Care on your Terms
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              eius rem repellat dolore omnis deleniti obcaecati alias
              repudiandae, delectus quaerat quis iste, facere earum nihil at
              dolores nulla ex, perferendis totam cupiditate odit. Provident ea
              atque illum rem eos placeat praesentium. Soluta corporis molestiae
              aliquam velit error laboriosam nobis modi dolorum assumenda qui
              inventore fugiat, cupiditate dol
            </p>
          </div>
          <PrimaryButton />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
