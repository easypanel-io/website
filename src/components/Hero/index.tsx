import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

export default function Hero(): JSX.Element {
  return (
    <section className={styles.root}>
      <div className={clsx("container", styles.wrapper)}>
        <div>
          <p className={styles.supheading}>All-in-one platform</p>
          <h1 className={styles.heading}>
            Manage your server <br />
            without fighting <br />
            the terminal
          </h1>
          <h2 className={styles.subheading}>
            Server control panel <br className="hidden--lg" /> based on Docker.
          </h2>
          <div className={styles.buttons}>
            <Link className="button button--lg button--primary" to="/docs">
              Get Started
            </Link>
            <Link
              className="button button--lg button--secondary button--outline margin-left--md"
              href="https://appt.link/deiucanta"
            >
              Book Demo
            </Link>
          </div>
        </div>
        <div className={styles.panelImage}>
          <Link
            href="https://www.youtube.com/watch?v=XJPYeTeq7q0"
            target="_blank"
          >
            <img src="/img/screenshot.png" />
          </Link>
        </div>
      </div>
    </section>
  );
}
