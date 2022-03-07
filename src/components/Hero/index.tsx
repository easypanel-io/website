import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Hero(): JSX.Element {
  return (
    <section className={styles.root}>
      <div className="container">
        <h1 className={styles.heading}>
          Manage your server <br className="hidden--sm" />
          without fighting the terminal
        </h1>
        <h2 className={styles.subheading}>
          Server control panel <br className="hidden--lg" /> based on Docker.
        </h2>
        <div className={styles.buttons}>
          <Link className="button button--lg button--primary" to="/docs/intro">
            Get Started
          </Link>
          <Link
            className="button button--lg button--secondary margin-left--md"
            to="/docs/intro"
          >
            Book Demo
          </Link>
        </div>
        <img
          className={styles.panelImage}
          src="https://www.suse.com/c/wp-content/uploads/2020/03/container-dashboard-screenshot-1024x485.png"
        />
      </div>
    </section>
  );
}
