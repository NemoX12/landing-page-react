import React from "react";
import { HeroContent, HeroImage, Navbar } from "../../components/imports";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero__container section__padding">
        <Navbar />
        <HeroContent />
      </div>
      <HeroImage />
    </>
  );
};

export default Hero;
