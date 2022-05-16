import React from "react";
const InfoCard = ({ img, cardTitle, bg }) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl ${bg}`}>
      <figure className="p-6">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Lorem Ipsum is simply dummy text of the pri</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default InfoCard;
