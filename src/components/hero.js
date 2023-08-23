import React from "react";
import Carousel from "./carousels/hero";
import CtaButton from "../images/cta-button.svg";

const Hero = () => {

  return (
    <div id="#top">
      <div className="container mx-auto pt-20">
        <Carousel />
        <div className="relative">
      
        <a href="/">
          <img
            src={CtaButton}
            alt="Get in touch"
            className="absolute xl:left-28 lg:left-[44%] md:left-[42%] left-[35%] -top-16"
          />
        </a>
      </div>
        <div className="flex flex-col xl:px-32 items-center text-center gap-6 pt-20">
          <h1 className="font-display md:text-display-2xl text-display-lg">
            Make <span className="italic">your home</span> an ode to joy
          </h1>
          <p className="col-span-8 md:text-body-xl text-body-lg font-light text-neutral-700 max-w-[800px]">
            Experience the pinnacle of luxury living in Tbilisi Gardens, with
            breathtaking city views, unique design elements, and unmatched
            amenities. From the modern kitchen to the old-school twist in the
            library, every corner of this residence is crafted to perfection.{" "}
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
