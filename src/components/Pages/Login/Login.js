import React from "react";

import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import Loadding from "../../Sheared/Loadding";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [token] = useToken(user || gUser);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (loading || gLoading) {
    return <Loadding />;
  }

  let errorMessage;
  if (error || gError) {
    errorMessage = (
      <p className="text-red-500 text-sm">{error?.message || gError.message}</p>
    );
  }
  // Here Can use useEffect to reduce error
  if (token) {
    navigate(from, { replace: true });
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex h-screen justify-center items-center ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <p className="text-right mb-2">
              <Link to="/resetepass">Forget Password</Link>
            </p>

            {errorMessage}

            <input
              className="btn btn-primary w-full max-w-xs text-white"
              type="submit"
              value="Login"
            />
          </form>
          <p>
            <small>
              {" "}
              New to Doctor's Portal?{" "}
              <Link className="text-primary" to="/signup">
                Create New Account
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

export default Login;
