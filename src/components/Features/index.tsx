import React from "react";
import styles from "./styles.module.css";

type Item = {
  title: string;
  link: string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const items: Item[] = [
  {
    title: "Push to deploy",
    link: "/product/push-to-deploy",
    icon: require("@site/static/icons/Upload-toCloud.svg").default,
    description: (
      <>
        Push to Github and voilà - Easypanel will get your code, build it and
        deploy it.
      </>
    ),
  },
  {
    title: "Free SSL Certificates",
    link: "/product/free-ssl-certificates",
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
    link: "/product/one-click-apps",
    icon: require("@site/static/icons/Cursor-Click2.svg").default,
    description: (
      <>
        Create a Wordpress website in less than 60 seconds. How does it sound?
      </>
    ),
  },
  {
    title: "Zero Downtime Deployments",
    link: "/product/zero-downtime-deployments",
    icon: require("@site/static/icons/Error-404Window.svg").default,
    description: (
      <>You can deploy seamlessly without and intreruptions for your users.</>
    ),
  },
  {
    title: "In-Browser Terminal",
    link: "/product/in-browser-terminal",
    icon: require("@site/static/icons/Approved-Window.svg").default,
    description: (
      <>Check logs or run sell commands without leaving your browser.</>
    ),
  },
  {
    title: "Dockerfile not required",
    link: "/product/dockerfile-not-required",
    icon: require("@site/static/icons/Factory2.svg").default,
    description: (
      <>
        Transform your code into Docker images with the magic of Cloud Native
        Buildpacks.
      </>
    ),
  },
];

function Feature({ title, link, icon: Svg, description }: Item) {
  return (
    <div className={styles.feature}>
      <Svg className={styles.featureIcon} role="img" />
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
      {/* <Link className="button button--link padding-horiz--none" to={link}>
        Learn more
      </Link> */}
    </div>
  );
}

export default function Features(): JSX.Element {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={styles.heading}>All-in-one platform</h2>
        <h3 className={styles.subheading}>
          Everything you need, <br className="hidden--lg" /> in one panel
        </h3>
        <div className={styles.features}>
          {items.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
