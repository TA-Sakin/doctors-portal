import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
const AppointmentBanner = ({ date, setDate }) => {
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
          <div className="lg:pr-36">
            <DayPicker
              className="bg-white p-4 shadow-2xl rounded-lg"
              mode="single"
              selected={date}
              onSelect={setDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
