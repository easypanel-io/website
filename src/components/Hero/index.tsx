import Link from "@docusaurus/Link";
import React from "react";
import styles from "./styles.module.css";

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
