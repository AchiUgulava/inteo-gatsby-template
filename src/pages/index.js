import React from "react";

import Seo from "../components/seo";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Metrics from "../components/metrics";
import Services from "../components/services";
import Awards from "../components/awards";
import About from "../components/about";
import Works from "../components/works";
import Hall from "../components/hall"
import LivingRoom from "../components/livingRoom";

const IndexPage = () => (
  <Layout>
    <Seo />
    <Hero />
    {/* <Awards /> */}
    <Hall/>
    <LivingRoom/>
    <About />
    <Metrics />
    <Services />
    <Works />
  </Layout>
);

export default IndexPage;
