import Head from "@docusaurus/Head";
import Applications from "@site/src/components/Applications";
import Databases from "@site/src/components/Databases";
import Hero from "@site/src/components/Hero";
import Testimonials from "@site/src/components/Testimonials";
import Layout from "@theme/Layout";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <Layout description="Manage your server without fighting the terminal. Server control panel based on Docker.">
      <Head>
        <title>Easypanel - Modern Server Control Panel</title>
      </Head>
      <Hero />
      <Applications />
      <Databases />
      <Testimonials />
    </Layout>
  );
}
