import React from "react";
import treatment from "../../../Resources/assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Speciality = () => {
  return (
    <div className="card card-side bg-base-100 shadow-xl my-28 lg:mx-auto w-3/4">
      <figure className="w-2/5 h-96 rounded-lg">
        <img src={treatment} alt="Speciality" />
      </figure>
      <div className="card-body w-1/2">
        <h2 className="card-title mt-10 text-5xl font-bold font-sans text-gray-700">
          Exceptional Dental Care, on Your Terms
        </h2>
        <p className="mt-2 text-black">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          ut inventore beatae numquam vitae commodi eaque harum exercitationem
          quia quod nesciunt rem facere, quae culpa molestiae, voluptas ullam
          dolor voluptatibus!
        </p>
        <div p-0>
          <PrimaryButton>Explore</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
