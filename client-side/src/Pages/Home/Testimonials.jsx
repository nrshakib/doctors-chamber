import React from "react";
import quote from "../../../Resources/assets/icons/quote.svg";
import people1 from "../../../Resources/assets/images/people1.png";
import people2 from "../../../Resources/assets/images/people2.png";
import people3 from "../../../Resources/assets/images/people3.png";
import Review from "./Review";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Harry",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At voluptatem non quo voluptates facere hic?",
      img: people1,
      location: "Mohammadpur,Dhaka",
    },
    {
      _id: 2,
      name: "Rosy",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dolore repudiandae impedit.",
      img: people2,
      location: "Dhanmondi,Dhaka",
    },
    {
      _id: 3,
      name: "Lidy",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda fuga ipsum nam beatae?",
      img: people3,
      location: "NY,USA",
    },
  ];
  return (
    <section className="my-20">
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl text-primary font-bold">Testimonials</h3>
          <h2 className="text-3xl">What Our Patients Say</h2>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
