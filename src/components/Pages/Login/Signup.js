import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loadding from "../../Sheared/Loadding";

const Signup = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  if (loading || gLoading || updating) {
    return <Loadding />;
  }

  let errorMessage;
  if (error || gError || updateError) {
    errorMessage = (
      <p className="text-red-500 text-sm">
        {error?.message || gError.message || updateError.message}
      </p>
    );
  }
  if (user || gUser) {
    console.log(gUser || user);
  }

  const onSubmit = async (data, user) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    sendEmailVerification();
    alert("Verify your Email Then Login");
    if (!user.emailVerified) {
      navigate("/login");
    }
  };
  return (
    <div className="flex h-screen justify-center items-center ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* name  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">What is your name?</span>
              </label>
              <input
                {...register("firstName", { required: true })}
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
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is requires",
                  },
                  minLength: {
                    value: 6,
                    message: "Must br 6 Character",
                  },
                })}
                type="password"
                placeholder="password"
                className="input input-bordered w-full max-w-xs"
              />
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

            {errorMessage}
            <input
              className="btn btn-primary w-full max-w-xs text-white"
              type="submit"
              value="Sign Up"
            />
          </form>
          <p>
            <small>
              {" "}
              If you are at Doctor's Portal?{" "}
              <Link className="text-primary" to="/login">
                Log In
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-secondary"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
