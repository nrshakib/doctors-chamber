import { format } from "date-fns";
import React from "react";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { name, slots } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(slot);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Booking For:
            <span className="text-2xl text-secondary"> {name} </span>!
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              type="text"
              readOnly
              value={format(date, "PP")}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn bg-gradient-to-r from-secondary to-primary text-white w-full max-w-xs"
            />
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="booking-modal">
          Close
        </label>
      </div>
    </div>
  );
};

export default BookingModal;
