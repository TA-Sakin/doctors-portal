import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-primary mx-auto">{name}</h2>
        <p className="text-center mt-4">
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500 ">Please try another date.</span>
          )}
        </p>
        <p className="text-center mb-4">
          {slots.length} {slots.length > 1 ? "slots" : "slot"} available
        </p>
        <div className="card-actions">
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className={`btn modal-button btn-primary text-white font-bold mx-auto ${
              slots.length > 0 && "bg-gradient-to-r from-secondary to-primary"
            }`}
          >
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
