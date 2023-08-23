import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import WorkItem from "./workItem";
import Eyebrow from "./eyebrow";
import Carousel from "./carousels/diningRoom";

const DiningRoom = () => {
  const data = useStaticQuery(graphql`
    {
      allDiningRoomJson {
        nodes {
          id
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(
                width: 592
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);
  return (
    <div id="#dining">
      <div className="container mx-auto lg:pb-28 md:pb-24 pb-12">
        <div className="flex flex-col gap-6 justify-center ">
          <Eyebrow label="Area Dining Room" />
          <h3 className="font-display md:text-display-xl text-display-md font-normal pb-8">
            Dining Room
          </h3>
        </div>
        <div className="flex flex-col gap-12 ">
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-8 gap-10 items-center">
          <div className="xl:col-span-6 lg:col-span-8 flex flex-col gap-10">
              {data.allDiningRoomJson.nodes.slice(0, 2).map((node) => (
                <WorkItem
                  key={node.id}
                  image={getImage(node.image)}
                  title={node.title}
                  description={node.description}
                />
              ))}
            </div>
            <div className="xl:col-span-6 lg:col-span-8 xl:flex flex-col gap-0 xl:px-10 hidden ">
              {data.allDiningRoomJson.nodes.slice(2, 5).map((node) => (
                <WorkItem
                  key={node.id}
                  image={getImage(node.image)}
                  title={node.title}
                  description={node.description}
                />
              ))}
            </div> 
        <Carousel/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningRoom;
