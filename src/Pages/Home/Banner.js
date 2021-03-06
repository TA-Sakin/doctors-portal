import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import PrimaryButton from "../Shared/PrimaryButton";
const Banner = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "100% 92%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero min-h-screen max-w-screen-2xl mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt=""
            className="max-w-sm lg:max-w-lg container mx-auto rounded-lg shadow-2xl"
          />
          <div className="lg:mr-28">
            <h1 className="text-5xl text-accent font-bold mt-6 lg:mt-0">
              Your New Smile Starts Here
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton></PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
