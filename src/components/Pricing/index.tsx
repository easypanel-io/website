import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

export default function Pricing(): JSX.Element {
  return (
    <section className={styles.root}>
      <div className="container">
        <h1 className={styles.heading}>
          How much <br className="hidden--lg" />
          does it cost?
        </h1>
        <p className={styles.subheading}>
          14-day trial for each server. <br className="hidden--lg" /> No licence
          required.
        </p>
        <div className={styles.plans}>
          <div className={styles.plan}>
            <h2 className={styles.planName}>Hobby</h2>
            <div className={styles.planPrice}>
              $5 <span>/month</span>
            </div>
            <ul>
              <li>1 licence</li>
              <li>unlimited projects</li>
              <li>unlimited services</li>
              <li>unlimited deployments</li>
            </ul>
            <Link
              className="button button--block button--primary"
              href="https://portal.easypanel.io/register"
            >
              Buy Licence
            </Link>
          </div>
          <div className={clsx(styles.plan, styles.planActive)}>
            <h2 className={styles.planName}>Growth</h2>
            <div className={styles.planPrice}>
              $20 <span>/month</span>
            </div>
            <ul>
              <li>5 licences</li>
              <li>unlimited projects</li>
              <li>unlimited services</li>
              <li>unlimited deployments</li>
            </ul>
            <Link
              className="button button--block button--primary"
              href="https://portal.easypanel.io/register"
            >
              Buy Licence
            </Link>
          </div>
          <div className={styles.plan}>
            <h2 className={styles.planName}>Business</h2>
            <div className={styles.planPrice}>
              $60 <span>/month</span>
            </div>
            <ul>
              <li>15 licences</li>
              <li>unlimited projects</li>
              <li>unlimited services</li>
              <li>unlimited deployments</li>
            </ul>
            <Link
              className="button button--block button--primary"
              href="https://portal.easypanel.io/register"
            >
              Buy Licence
            </Link>
          </div>
        </div>
        {/* <div className={styles.wrapper}>
          <div className="row">
            <div className={clsx("col col--7", styles.leftCol)}>
              <ul className={styles.features}>
                <li>
                  unlimited projects
                </li>
                <li>
                  unlimited services
                </li>
                <li>
                  unlimited templates
                </li>
                <li>
                  unlimited deployments
                </li>
              </ul>
            </div>
            <div className={clsx("col col--5", styles.rightCol)}>
              <div className={styles.price}>
                $5<span>USD</span>
              </div>
              <div className={styles.priceUnit}>per server per month</div>
              <Link className="button button--lg button--primary" to="/docs">
                Get Started
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
