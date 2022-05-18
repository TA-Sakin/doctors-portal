import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
  sendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";

const SignUp = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  let signInError;
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  if (loading || gloading || updating) {
    return <Loading></Loading>;
  }
  if (user) {
    console.log(user);
  }
  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    navigate("/appointment");
  };
  if (error || gerror || updateError) {
    signInError = (
      <p className="text-red-500">
        {error?.message || updateError?.message || gerror?.message}
      </p>
    );
  }
  return (
    <div>
      <div className="flex h-screen justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center font-bold text-xl">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                  {errors.name?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
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
                      message: "email is required",
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
                value="Sign Up"
                type="submit"
              />
            </form>
            <p className="text-center">
              Already have an account?&#160;
              <Link
                to="/login"
                className="text-primary text-sm hover:text-sky-700"
              >
                Login
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
    </div>
  );
};

export default SignUp;
