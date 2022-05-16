import React from "react";
import MakeAppoinment from "./MakeAppoinment";
import Banner from "./Banner";
import Review from "./Review";
import Contact from "./Contact";
import Footer from "../Shared/Footer";
import Info from "./Info";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Review></Review>
      <MakeAppoinment></MakeAppoinment>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
