import React from "react";

import Seo from "../components/seo";
import Layout from "../components/layout";
import Hero from "../components/hero";
// import Metrics from "../components/metrics";
// import Services from "../components/services";
import About from "../components/about";
import Hall from "../components/hall";
import LivingRoom from "../components/livingRoom";
import Theater from "../components/theater";
import Suites from "../components/suites/suites";
import DiningRoom from "../components/diningRoom";

const IndexPage = () => (
  <Layout>
    <Seo />
    <Hero />
    <Hall />
    <LivingRoom />
    <DiningRoom/>
    <Suites />
    <Theater />
    <About />
    {/* <Metrics /> */}
    {/* <Services /> */}
  </Layout>
);

export default IndexPage;
