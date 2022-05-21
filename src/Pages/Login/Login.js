import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, passwordError] =
    useSendPasswordResetEmail(auth);
  let signInError;
  const [token] = useToken(user || guser);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [user, guser, from, navigate, token]);
  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  if (loading || gloading) {
    return <Loading></Loading>;
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  const passwordReset = async () => {
    await sendPasswordResetEmail(email);
  };
  if (error || gerror || passwordError) {
    if (passwordError?.message.includes("missing-email")) {
      signInError = <p className="text-red-500 mb-2">Please enter an email.</p>;
    } else {
      signInError = (
        <p className="text-red-500 mb-2">
          {error?.message || gerror?.message || passwordError?.message}
        </p>
      );
    }
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-bold text-xl">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                  pattern: {
                    value: /(?=.*[!@#$%^&*])/,
                    message: "Must have a special character",
                  },
                })}
              />
              <span>
                <b
                  className="lable-text-alt label w-1/2 cursor-pointer "
                  onClick={passwordReset}
                >
                  Forgot password?
                </b>
              </span>

              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <input
              className="btn btn-accent w-full max-w-xs"
              value="Login"
              type="submit"
            />
          </form>
          <p className="text-center">
            New to Doctors Portal?&#160;
            <Link to="/signup" className="text-primary text-sm">
              Create New Account
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline btn-accent"
          >
            <FcGoogle className="text-2xl mr-2" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
