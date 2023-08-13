import React from "react";
import doctor from "../../../Resources/assets/images/doctor.png";
import appointment from "../../../Resources/assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 px-11 py-2">
        <h3 className="text-xl text-primary font-bold my-2">Appointment</h3>
        <h2 className="text-3xl text-white my-2">Make an Appointment Today</h2>
        <p className="text-white w-3/4 my-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nisi
          reprehenderit eaque porro quam autem? Dolor laboriosam molestiae
          voluptatibus suscipit itaque, ipsa dolores repudiandae voluptates
          corporis tempore repellat odio reiciendis explicabo labore magni illum
          voluptatem!
        </p>
        <PrimaryButton>Make Appointment</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
