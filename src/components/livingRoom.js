import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import WorkItem from "./workItem";
import Eyebrow from "./eyebrow";
import Carousel from "./carousels/livingRoom";

const LivingRoom = () => {
  const data = useStaticQuery(graphql`
    {
      allLivingRoomJson {
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
    <div id="#livingRoom">
      <div className="container mx-auto lg:py-28 md:py-24 py-12">
        <div className="flex flex-col gap-6 justify-center xl:items-end pb-4 xl:pb-0">
          <Eyebrow label="Area Living Room" />
          <h3 className="font-display md:text-display-xl text-display-md font-normal pb-4">
            Living Room
          </h3>
        </div>
        <div className="flex flex-col gap-12 ">
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-8 gap-10 items-center">
            <div className="xl:col-span-6 lg:col-span-8 xl:flex flex-col gap-0 xl:px-10 hidden ">
              {data.allLivingRoomJson.nodes.slice(2, 5).map((node) => (
                <WorkItem
                  key={node.id}
                  image={getImage(node.image)}
                  title={node.title}
                  description={node.description}
                />
              ))}
            </div>

            <div className="xl:col-span-6 lg:col-span-8 flex flex-col gap-10">
              {data.allLivingRoomJson.nodes.slice(0, 2).map((node) => (
                <WorkItem
                  key={node.id}
                  image={getImage(node.image)}
                  title={node.title}
                  description={node.description}
                />
              ))}
            </div>
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivingRoom;
