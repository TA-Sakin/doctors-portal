import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
const ScheduleAppointment = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(
      `https://desolate-earth-06461.herokuapp.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  // useEffect(() => {
  //   fetch(`https://desolate-earth-06461.herokuapp.com/available?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formattedDate]);
  return (
    <div className="max-w-screen-2xl mx-auto mb-24 lg:px-28">
      <h3 className="text-xl text-center text-secondary">
        You have selected {format(date, "PP")}.
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services?.map((service) => (
          <Service
            key={service._id}
            setTreatment={setTreatment}
            service={service}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          setTreatment={setTreatment}
          refetch={refetch}
          treatment={treatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default ScheduleAppointment;
