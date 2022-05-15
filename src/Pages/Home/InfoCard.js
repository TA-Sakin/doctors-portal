import React from "react";
const InfoCard = ({ img, cardTitle, bg }) => {
  return (
    <div class={`card lg:card-side bg-base-100 shadow-xl ${bg}`}>
      <figure className="p-6">
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title">{cardTitle}</h2>
        <p>Lorem Ipsum is simply dummy text of the pri</p>
        <div class="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default InfoCard;
