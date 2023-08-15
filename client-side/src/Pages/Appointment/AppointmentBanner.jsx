import React from "react";
import chair from "../../../Resources/assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
    background-color: blue;
    color: white;
  }
  .my-selected:not([disabled]):hover { 
    background-color: blue;
    color: black;
  }`;

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div className="hero min-h-screen">
      <style>{css}</style>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Dentist Chair"
        />
        <div>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            modifiersClassNames={{
              selected: "my-selected",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
