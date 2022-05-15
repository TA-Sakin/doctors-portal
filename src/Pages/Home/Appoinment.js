import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";
const Appoinment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center mt-24 lg:mt-64"
    >
      <div className="flex-1 hidden lg:block">
        <img src={doctor} className="mt-[-200px]" alt="" />
      </div>
      <div className="flex-1 py-10 px-4">
        <div className="lg:w-3/4">
          <h3 className="text-xl font-bold text-accent">Appointment</h3>
          <h2 className="text-3xl py-4 text-white font-bold">
            Make an Appointment Today
          </h2>
          <p className="text-white mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aperiam
            harum reprehenderit impedit repellat! Cupiditate iusto quaerat
            exercitationem est voluptates vitae aliquid expedita consectetur
            natus voluptatum! Fugiat quidem autem nam aliquam iste? Repellat
            voluptas culpa et. Eaque hic aliquid commodi.
          </p>
          <PrimaryButton></PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Appoinment;
