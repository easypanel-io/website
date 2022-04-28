import Head from "@docusaurus/Head";
import Features from "@site/src/components/Features";
import Hero from "@site/src/components/Hero";
import Languages from "@site/src/components/Languages";
import Layout from "@theme/Layout";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <Layout description="Manage your server without fighting the terminal. Server control panel based on Docker.">
      <Head>
        <title>Easypanel - Modern Server Control Panel</title>
      </Head>
      <Hero />
      <Languages />
      <Features />
    </Layout>
  );
}
