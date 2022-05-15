import React from "react";
import treatment from "../../assets/images/treatment.png";

const Banner2 = () => {
  return (
    <div class="hero my-28 lg:w-4/6 mx-auto">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          alt=""
          class="max-w-sm rounded-lg mx-auto container shadow-2xl"
        />
        <div className="pt-10 lg:pl-16">
          <h1 class="text-5xl text-[#3A4256] font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p class="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button class="btn btn-cyan font-bold border-0 bg-gradient-to-r to-[#0FCFEC] from-[#19D3AE]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
