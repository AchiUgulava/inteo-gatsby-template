import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import CtaButton from "../images/cta-button.svg";

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      heroimage: file(relativePath: { eq: "hero-image.webp" }) {
        childImageSharp {
          gatsbyImageData(
            width: 5120
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <div id="#top">
      <div className="container mx-auto">
        <div className="flex flex-col xl:px-32 items-center text-center gap-6 py-20">
          <h1 className="font-display md:text-display-2xl text-display-lg">
            Make <span className="italic">your home</span> an ode to joy

          </h1>
          <p className="col-span-8 md:text-body-xl text-body-lg font-light text-neutral-700 max-w-[800px]">
            Experience the pinnacle of luxury living in Tbilisi Gardens, a
            prestigious building complex that houses this extraordinary 500 sq
            meter apartment on the 26th floor. With breathtaking city views,
            unique design elements, and unmatched amenities, this apartment
            stands as the ultimate peak of luxury in Tbilisi, Georgia. From the
            modern kitchen to the old-school twist in the library, every corner
            of this residence is crafted to perfection.{" "}
          </p>
        </div>
      </div>
      <div className="relative">
        <GatsbyImage image={getImage(data.heroimage)} alt="Interior Design" />
        <a href="/">
          <img
            src={CtaButton}
            alt="Get in touch"
            className="absolute xl:left-28 lg:left-[44%] md:left-[42%] left-[35%] -top-16"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
