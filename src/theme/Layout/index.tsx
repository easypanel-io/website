import Head from "@docusaurus/Head";
import Layout from "@theme-original/Layout";
import React from "react";

export default function LayoutWrapper(props) {
  return (
    <>
      <Head>
        <script type="text/javascript">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "byvgkgmvh3");`}
        </script>
        <script type="text/javascript">
          {`if (localStorage.getItem("theme")) { localStorage.removeItem("theme"); window.location.reload(); }`}
        </script>
      </Head>
      <Layout {...props} />
    </>
  );
}
