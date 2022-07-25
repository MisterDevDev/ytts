import React, { useState } from "react";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import CoachVideo from "./CoachVideo";
import Services from "./Services";
import CarouselSlides from "./CarouselSlides";
import Pricing from "./Pricing";
import About from "./About";
import Reviews from "./Reviews";

const MainPage = () => {

  return (
    <>
      <Hero />
      <About />
      <CoachVideo/>
      <Services />
      <CarouselSlides />
      <Pricing />
      <Reviews />
      <Newsletter />
      <Footer />
    </>
  );
};
export default MainPage;
