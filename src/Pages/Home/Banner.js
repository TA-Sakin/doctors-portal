import React from "react";
import chair from "../../assets/images/chair.png";
const Banner = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          alt=""
          class="max-w-sm lg:max-w-lg mx-auto container rounded-lg shadow-2xl"
        />
        <div className="lg:mr-28">
          <h1 class="text-5xl text-[#3A4256] font-bold">
            Your New Smile Starts Here
          </h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-cyan font-bold border-0 bg-gradient-to-r to-[#0FCFEC] from-[#19D3AE]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
