import React from "react";
import appointment from "../../assets/images/appointment.png";
const Contact = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
        backgroundSize: "80%",
      }}
      className="flex justify-center items-center mb-24 mt-24 lg:mt-64"
    >
      <div className="text-center py-16">
        <p className="text-primary font-bold text-xl">Contact Us</p>
        <h3 className="text-3xl text-white mb-6">Stay connected with us</h3>
        <form action="">
          <input
            type="email"
            placeholder="Email address"
            className="input input-bordered input-md mb-3 w-full max-w-xs lg:max-w-sm"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-md mb-3 w-full max-w-xs lg:max-w-sm"
          />
          <textarea
            className="textarea textarea-bordered w-full mb-6 max-w-xs lg:max-w-sm"
            placeholder="Your message"
          ></textarea>
        </form>
        <button className="btn btn-primary px-8 text-white font-bold  bg-gradient-to-r from-secondary to-primary">
          Submit
        </button>
      </div>
    </section>
  );
};

export default Contact;
