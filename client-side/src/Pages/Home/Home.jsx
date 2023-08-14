import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services";
import MakeAppointment from "./MakeAppointment";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="px-12">
      <Banner />
      <Info />
      <Services />
      <MakeAppointment />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
