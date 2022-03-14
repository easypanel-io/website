import Newsletter from "@site/src/components/Newsletter";
import Footer from "@theme-original/Footer";
import React from "react";

export default function FooterWrapper(props: any) {
  return (
    <>
      <Newsletter />
      <Footer {...props} />
    </>
  );
}
