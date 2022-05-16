import React, { useState } from "react";
import Footer from "../Shared/Footer";
import AppointmentBanner from "./AppointmentBanner";
import ScheduleAppointment from "./ScheduleAppointment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <ScheduleAppointment date={date}></ScheduleAppointment>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
