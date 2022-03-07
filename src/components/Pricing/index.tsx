import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

export default function Pricing(): JSX.Element {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className="row">
            <div className={clsx("col col--7", styles.leftCol)}>
              <h2 className={styles.heading}>Simple Pricing</h2>
              <ul className={styles.features}>
                <li>
                  <b>unlimited</b> projects
                </li>
                <li>
                  <b>unlimited</b> services
                </li>
                <li>
                  <b>unlimited</b> templates
                </li>
                <li>
                  <b>unlimited</b> deployments
                </li>
              </ul>
            </div>
            <div className={clsx("col col--5", styles.rightCol)}>
              <div className={styles.price}>
                $5<span>USD</span>
              </div>
              <div className={styles.priceUnit}>per server per month</div>
              <Link
                className="button button--lg button--primary"
                to="/docs/intro"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
