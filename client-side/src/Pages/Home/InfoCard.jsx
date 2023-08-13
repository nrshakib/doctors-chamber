import React from "react";

const InfoCard = ({ img, cardTitle, text, bgClass }) => {
  return (
    <div
      className={`card items-center lg:card-side shadow-xl ml-2 mr-2 ${bgClass}`}
    >
      <figure className="pl-4 pt-2">
        <img src={img} alt="Album" />
      </figure>
      <div className=" items-center card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;
