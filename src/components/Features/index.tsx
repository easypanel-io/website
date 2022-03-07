import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

type Item = {
  title: string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const items: Item[] = [
  {
    title: "Push to deploy",
    icon: require("@site/static/icons/Upload-toCloud.svg").default,
    description: (
      <>
        Push to Github and voila - Easypanel will get your code, build it and
        deploy it.
      </>
    ),
  },
  {
    title: "Free SSL Certificates",
    icon: require("@site/static/icons/Cloud-Secure.svg").default,
    description: (
      <>
        With a simple checkbox you get auto-renewable Let's Encrypt
        certificates.
      </>
    ),
  },
  {
    title: "One-Click Apps",
    icon: require("@site/static/icons/Cursor-Click2.svg").default,
    description: (
      <>
        Create a Wordpress website in less than 60 seconds. How does it sound?
      </>
    ),
  },
  {
    title: "Zero Downtime Deployments",
    icon: require("@site/static/icons/Error-404Window.svg").default,
    description: (
      <>You can deploy seamlessly without and intreruptions for your users.</>
    ),
  },
  {
    title: "In-Browser Terminal",
    icon: require("@site/static/icons/Approved-Window.svg").default,
    description: (
      <>Check logs or run sell commands without leaving your browser.</>
    ),
  },
  {
    title: "Dockerfile not required",
    icon: require("@site/static/icons/Factory2.svg").default,
    description: (
      <>
        Transform your code into Docker images with the magic of Cloud Native
        Buildpacks.
      </>
    ),
  },
];

function Feature({ title, icon: Svg, description }: Item) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.feature}>
        <div className="text--center">
          <Svg className={styles.featureIcon} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3 className={styles.featureTitle}>{title}</h3>
          <p className={styles.featureDescription}>{description}</p>
          <Link className="button button--link" to="/docs/intro">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Features(): JSX.Element {
  return (
    <section className={styles.root}>
      <div className="container text--center">
        <h2 className={styles.heading}>All-in-one platform</h2>
        <h3 className={styles.subheading}>
          Everything you need, <br className="hidden--lg" /> in one panel
        </h3>
        <div className="row">
          {items.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
