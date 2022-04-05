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
          <div className={clsx(styles.plan, styles.planHighlight)}>
            <h2 className={styles.planName}>Free Forever</h2>
            <div className={styles.planPrice}>
              $0 <span>/month</span>
            </div>
            <ul>
              <li>No Licence Required</li>
              <li>Single User</li>
              <li>Unlimited Projects</li>
              <li>Free SSL Certificates</li>
              <li>Community Support</li>
            </ul>
            <Link
              className="button button--block button--primary"
              href="https://easypanel.io/docs"
            >
              Get Started
            </Link>
          </div>
          <div className={styles.plan}>
            <h2 className={styles.planName}>Hobby</h2>
            <div className={styles.planPrice}>
              $15 <span>/month</span>
            </div>
            <ul>
              <li>2 Licences</li>
              <li>Unlimited Users</li>
              <li>User Access Control</li>
              <li>Monitoring</li>
              <li>Unlimited Projects</li>
              <li>Free SSL Certificates</li>
              <li>Priority Support</li>
            </ul>
            <Link
              className="button button--block button--primary"
              href="https://portal.easypanel.io/register"
            >
              Buy Licence
            </Link>
          </div>
          <div className={styles.plan}>
            <h2 className={styles.planName}>Growth</h2>
            <div className={styles.planPrice}>
              $30 <span>/month</span>
            </div>
            <ul>
              <li>5 Licences</li>
              <li>Unlimited Users</li>
              <li>User Access Control</li>
              <li>Monitoring</li>
              <li>Unlimited Projects</li>
              <li>Free SSL Certificates</li>
              <li>Priority Support</li>
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
              <li>15 Licences</li>
              <li>Unlimited Users</li>
              <li>User Access Control</li>
              <li>Monitoring</li>
              <li>Unlimited Projects</li>
              <li>Free SSL Certificates</li>
              <li>Priority Support</li>
            </ul>
            <Link
              className="button button--block button--primary"
              href="https://portal.easypanel.io/register"
            >
              Buy Licence
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
