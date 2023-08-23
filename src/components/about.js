import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Eyebrow from "./eyebrow";

const About = () => {
  const data = useStaticQuery(graphql`
    {
      aboutimage: file(relativePath: { eq: "about-creative.webp" }) {
        childImageSharp {
          gatsbyImageData(
            width: 592
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <div id="#about">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-20 lg:py-32 py-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Eyebrow label="ABOUT US" />
            <h2 className="font-display md:text-display-xl text-display-md font-normal pb-4">
              We help to bring your <span className="italic">dream home</span>{" "}
              to reality
            </h2>
            <p className="md:text-body-lg text-body-md font-light text-neutral-700">
              Experience the pinnacle of luxury living in Tbilisi Gardens, a
              prestigious building complex that houses this extraordinary 500 sq
              meter apartment on the 26th floor. 
            </p>
            <p className="md:text-body-lg text-body-md font-light text-neutral-700">
            With breathtaking city views,
              unique design elements, and unmatched amenities, this apartment
              stands as the ultimate peak of luxury in Tbilisi, Georgia. From
              the modern kitchen to the old-school twist in the library, every
              corner of this residence is crafted to perfection.
            </p>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-8 relative">
            <GatsbyImage
              image={getImage(data.aboutimage)}
              alt="Interior Design"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
