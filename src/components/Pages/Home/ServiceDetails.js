import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../Sheared/Button/PrimaryButton";

const ServiceDetails = () => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 py-20 ">
        <figure>
          <img className=" " src={treatment} alt="Album" />
        </figure>
        <div className="card-body m-5 lg:m-10">
          <div className="text-start">
            <h2 className="card-title text-5xl">
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
