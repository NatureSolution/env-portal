import React, { useState } from "react";
import { useForm } from "react-hook-form";
import contact from "./../../../assets/images/contact.svg";

const ContactUS = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  console.log(data);

  return (
    <div>
      <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Lets talk about everything!
            </h2>
            <div className="text-gray-700 mt-8">
              Hate forms? Send us an <span className="underline">email</span>{" "}
              instead.
            </div>
          </div>
          <div className="mt-8 text-center">
            <img src={contact} alt="" />
          </div>
        </div>
        <form onSubmit={handleSubmit((data) => setData(data))}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              {...register("firstName")}
              type="text"
              placeholder="First Name"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text-alt">Alt label</span>
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="email"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text-alt">Alt label</span>
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Write Your Message</span>
            </label>
            <textarea
              {...register("message")}
              type="text"
              placeholder="Your Message"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text-alt">Alt label</span>
            </label>
          </div>

          <input className="btn btn-primary" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ContactUS;
