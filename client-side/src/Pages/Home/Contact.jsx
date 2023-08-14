import React from "react";
import appointment from "../../../Resources/assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Contact = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="text-center py-8">
        <h4 className="text-xl text-primary font-bold">Contact Us</h4>
        <h2 className="text-2xl text-white">Stay Connected with Us</h2>
      </div>

      <div className="grid place-items-center">
        <div className="grid items-center">
          <input
            type="text"
            placeholder="Email Address"
            className="input input-bordered input-info input-md w-96 max-w-xs mb-4"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-info input-md max-w-xs
          mb-4"
          />
          {/* lg */}
          <input
            type="text"
            placeholder="Your Message"
            className="input input-bordered input-info input-lg max-w-xs mb-4"
          />
        </div>
        <div>
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Contact;
