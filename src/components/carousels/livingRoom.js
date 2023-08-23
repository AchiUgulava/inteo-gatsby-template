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
      image1: file(relativePath: { eq: "pages/areas/MARINA DAVID presentation_Page_17_Image_0001 copy.webp" }) {
        childImageSharp {
          gatsbyImageData(
            height:400
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: CONSTRAINED # Set layout to CONSTRAINED
            aspectRatio: 1.5 # Adjust this value as needed
          )
        }
      }
      image2: file(relativePath: { eq: "pages/areas/MARINA DAVID presentation_Page_18_Image_0002 copy.webp" }) {
        childImageSharp {
          gatsbyImageData(
            height:400
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: CONSTRAINED # Set layout to CONSTRAINED
            aspectRatio: 1.5 # Adjust this value as needed
          )
        }
      }
    image3: file(relativePath: { eq: "pages/areas/MARINA DAVID presentation_Page_18_Image_0003 copy.webp" }) {
        childImageSharp {
          gatsbyImageData(
            height:400
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: CONSTRAINED # Set layout to CONSTRAINED
            aspectRatio: 1.5 # Adjust this value as needed
          )
        }
    }
    }

  `);

  return (
    <Slider {...settings} className="overflow-hidde xl:!hidden">
      <GatsbyImage image={getImage(data.image1)} alt="Image 1" />
      <GatsbyImage image={getImage(data.image2)} alt="Image 2" />
      <GatsbyImage image={getImage(data.image3)} alt="Image 2" />
    </Slider>
  );
};

export default Carousel;
