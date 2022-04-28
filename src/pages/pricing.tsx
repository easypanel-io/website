import Pricing from "@site/src/components/Pricing";
import Layout from "@theme/Layout";
import React from "react";

export default function Page(): JSX.Element {
  return (
    <Layout
      title="Pricing"
      description="Easypanel comes in two editons: developer edition and business edition. The developer edition will always be free."
    >
      <Pricing />
    </Layout>
  );
}
