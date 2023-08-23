import React from "react";

// import ArchitectureIcon from "../../images/service-icons/interior-design.svg";
// import RenovationIcon from "../../images/service-icons/building-renovation.svg";
// import ConstructionIcon from "../../images/service-icons/construction.svg";
import Eyebrow from ".././eyebrow";
import SuiteItem from "./suiteItems";
import Master from "./master.js";
import Girls from "./girls";
import Boys from "./boys";

const Suites = () => {
  return (
    <div >
      <div className="container mx-auto" id="#suites">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-28 md:py-20 py-12">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-8">
              <Eyebrow label="Suites" />
              <h2 className="font-display md:text-display-xl text-display-md pt-5">
                Our <span className="italic">Suites</span>{" "}
              </h2>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-center gap-8">
            <SuiteItem
            //   icon={ArchitectureIcon}
            link="#master"
              title="Master Suite"
              description="Indulge in the calming ambiance of the master suite, designed to feel like a high-end hotel."
            />
            <SuiteItem
            //   icon={RenovationIcon}
            link="#boys"

              title="Boys Suite"
              description="The boys' suite is a vibrant haven, complete with a gym, gaming setup, and awe-inspiring city views."
            />
            <SuiteItem
            //   icon={ConstructionIcon}
            link="#girls"
              title="Girls Suite"
              description="Elegance meets coziness in the girl's bedroom suite. It's a room that grows with her dreams."
            />
          </div>
        </div>
      </div>
      <Master/>
      <Boys/>
      <Girls/>
    </div>
  );
};
export default Suites;
