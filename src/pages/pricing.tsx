import Head from "@docusaurus/Head";
import Pricing from "@site/src/components/Pricing";
import Layout from "@theme/Layout";
import React from "react";

export default function Page(): JSX.Element {
  return (
    <Layout description="Manage your server without fighting the terminal. Server control panel based on Docker.">
      <Head>
        <title>Easypanel - Server Control Panel</title>
      </Head>
      <Pricing />
    </Layout>
  );
}
