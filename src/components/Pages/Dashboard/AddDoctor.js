import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loadding from "../../Sheared/Loadding";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );
  const imageStorage_key = "45cf8e05d9a8fb4699c9753ee77549f1";

  // // * 3 wyaes to store image
  // thired party storage (Practrict purpose we can use )
  // your own storage
  // database : Mondo

  /**
   *
   * YUP file validation for react
   */
  const onSubmit = async (data, user) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorage_key}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.speciality,
            img: img,
          };
          //send yout database
          fetch("http://localhost:5000/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Doctor Addedd Successfully");
                reset();
              }
            });
        }
      });
  };
  if (isLoading) {
    return <Loadding />;
  }
  return (
    <div>
      <h2 className="text-3xl">Add a New Doctor</h2>
      <form
        className="flex flex-col justify-content items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* name  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt text-red-500">
              {errors.firstName?.type === "required" &&
                "First name is required"}
            </span>
          </label>
        </div>

        {/* email */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your Email</span>
          </label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is requires",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Provided Valid Email",
              },
            })}
            type="email"
            placeholder="Yout Email"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {" "}
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {" "}
                {errors.email.message}
              </span>
            )}
          </label>
        </div>

        {/* //Password */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Spatiality</span>
          </label>
          <select
            {...register("speciality")}
            className="select w-full max-w-xs input input-bordered "
          >
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>

          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {" "}
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {" "}
                {errors.password.message}
              </span>
            )}
          </label>
        </div>
        {/* //Name input */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt text-red-500">
              {errors.firstName?.type === "required" &&
                "First name is required"}
            </span>
          </label>
        </div>
        {/* //  */}

        <input
          className="btn btn-primary w-full max-w-xs text-white"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
