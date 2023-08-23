import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import WorkItem from "../workItem";
import Eyebrow from "../eyebrow";

const Boys = () => {
  const data = useStaticQuery(graphql`
    {
      allBoysJson {
        nodes {
          id
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(
                width: 592
                height:324
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
    <div id="#boys">
    
      <div className="container mx-auto ">
      <div className="flex flex-col gap-6 py-20 xl:py-2">
                <Eyebrow label="Area Suites" />
                <h3 className="font-display md:text-display-xl text-display-md font-normal pb-4">
                  Boys Suite
                </h3>
              </div>
        <div className="flex flex-col gap-12 pb-6">
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-8 gap-10 items-center">
            <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10">
              
              {data.allBoysJson.nodes.slice(0, 1).map((node) => (
                <WorkItem
                  key={node.id}
                  image={getImage(node.image)}
                  title={node.title}
                  description={node.description}
                />
              ))}
            </div>
            <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10 xl:px-14 xl:pt-20">
              {data.allBoysJson.nodes.slice(1, 3).map((node) => (
                <WorkItem
                  key={node.id}
                  image={getImage(node.image)}
                  title={node.title}
                  description={node.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boys;
