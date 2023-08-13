import React from "react";
import Service from "./Service";
import fluoride from "../../../Resources/assets/images/fluoride.png";
import cavity from "../../../Resources/assets/images/cavity.png";
import whitening from "../../../Resources/assets/images/fluoride.png";
import Speciality from "./Speciality";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto vero ipsam laborum omnis vitae.",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, fugit quibusdam! Veritatis?",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vel at necessitatibus ipsam quo!",
      img: whitening,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center">
        <h2 className="text-primary text-xl font-bold uppercase">
          Our Services
        </h2>
        <h2 className="text-3xl">Services We Provive</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols 3 gap-8">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
      <Speciality />
    </div>
  );
};

export default Services;
