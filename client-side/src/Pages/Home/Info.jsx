import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../../Resources/assets/icons/clock.svg";
import marker from "../../../Resources/assets/icons/marker.svg";
import phone from "../../../Resources/assets/icons/phone.svg";

const Info = (img) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      <InfoCard
        cardTitle="Opening Hours"
        img={clock}
        text="9.00am to 5.00pm"
        bgClass="bg-gradient-to-r from-secondary to-primary"
      />
      <InfoCard
        cardTitle="Our Location"
        img={marker}
        text="Mohammadpur, Dhaka"
        bgClass="bg-accent"
      />
      <InfoCard
        cardTitle="Contact Us"
        img={phone}
        text="+88 0123456"
        bgClass="bg-gradient-to-r from-secondary to-primary"
      />
    </div>
  );
};

export default Info;
