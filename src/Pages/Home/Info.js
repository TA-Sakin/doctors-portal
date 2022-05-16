import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 lg:px-28 max-w-screen-2xl mx-auto">
      <InfoCard
        cardTitle="Opening Hours"
        img={clock}
        bg="bg-gradient-to-r from-secondary to-primary"
      ></InfoCard>
      <InfoCard
        cardTitle="Visit our location"
        img={marker}
        bg="bg-zinc-900"
      ></InfoCard>
      <InfoCard
        bg="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Contact us now"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
