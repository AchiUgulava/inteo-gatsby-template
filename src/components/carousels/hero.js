import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="h-max w-max absolute z-10 text-neutral-900 font-semibold text-display-xl top-1/2 left-2 hidden lg:block"
    onClick={onClick}
  >
    {"<"}
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="h-max w-max absolute text-neutral-900 top-1/2 z-10 font-semibold text-display-xl right-2 hidden lg:block"
    onClick={onClick}
  >
    {">"}
  </button>
);

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
};

const Carousel = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "pages/areas/MARINA DAVID presentation_Page_28_Image_0001 copy.webp" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      image2: file(relativePath: { eq: "hero-image.webp" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  return (
    <Slider {...settings} className="overflow-hidden">
      <GatsbyImage image={getImage(data.image1)} alt="Image 1" />
      <GatsbyImage image={getImage(data.image2)} alt="Image 2" />
    </Slider>
  );
};

export default Carousel;
