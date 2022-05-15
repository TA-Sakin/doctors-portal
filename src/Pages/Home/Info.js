import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-4 lg:mx-28">
      <InfoCard
        cardTitle="Opening Hours"
        img={clock}
        bg="bg-gradient-to-r to-[#0FCFEC] from-[#19D3AE]"
      ></InfoCard>
      <InfoCard
        cardTitle="Visit our location"
        img={marker}
        bg="bg-gray-800"
      ></InfoCard>
      <InfoCard
        bg="bg-gradient-to-r to-[#0FCFEC] from-[#19D3AE]"
        cardTitle="Contact us now"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
