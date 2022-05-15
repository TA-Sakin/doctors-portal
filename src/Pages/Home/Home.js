import React from "react";
import Appoinment from "./Appoinment";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import Info from "./Info";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Banner2></Banner2>
      <Appoinment></Appoinment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
