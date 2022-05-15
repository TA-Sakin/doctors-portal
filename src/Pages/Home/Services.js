import React from "react";
import flouride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
const Services = () => {
  return (
    <div className="lg:mx-28">
      <div className="text-center mt-28 mb-12 ">
        <h1 className="font-bold text-xl mb-3 text-accent">OUR SERVICES</h1>
        <h1 className="text-4xl">Services We Provide</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div class="card bg-base-100 mx-4 shadow-xl">
          <figure className="pt-12">
            <img src={flouride} alt="Album" />
          </figure>
          <div class="text-center card-body">
            <h2 class="card-title mx-auto">Flouride Treatment</h2>
            <p>
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
        </div>
        <div class="card bg-base-100 mx-4 shadow-xl">
          <figure className="pt-12">
            <img src={cavity} alt="Album" />
          </figure>
          <div class="text-center card-body">
            <h2 class="card-title mx-auto">Cavity filling</h2>
            <p>
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
        </div>
        <div class="card bg-base-100 mx-4 shadow-xl">
          <figure className="pt-12">
            <img src={whitening} alt="Album" />
          </figure>
          <div class="text-center card-body">
            <h2 class="card-title mx-auto">Teeth whitening</h2>
            <p>
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
