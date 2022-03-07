import Head from "@docusaurus/Head";
import Features from "@site/src/components/Features";
import Hero from "@site/src/components/Hero";
import Pricing from "@site/src/components/Pricing";
import Layout from "@theme/Layout";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <Layout description="Manage your server without fighting the terminal. Server control panel based on Docker.">
      <Head>
        <title>Easypanel - Server Control Panel</title>
      </Head>
      <Hero />
      <Features />
      <Pricing />
    </Layout>
  );
}
