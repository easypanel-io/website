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
          If you are a developer, you can use Easypanel for free.
        </p>
        <div className={styles.plans}>
          <div className={clsx(styles.plan, styles.planHighlight)}>
            <h2 className={styles.planName}>Free Forever</h2>
            <div className={styles.planPrice}>
              $0 <span>/month</span>
            </div>
            <ul>
              <li>Unlimited Servers</li>
              <li>Single User</li>
              <li>Unlimited Projects</li>
              <li>Unlimited Services</li>
              <li>Free SSL Certificates</li>
              <li>Community Support</li>
            </ul>
            <Link className="button button--block button--primary" href="/docs">
              Get Started
            </Link>
          </div>
          <div className={styles.plan}>
            <h2 className={styles.planName}>Hobby</h2>
            <div className={styles.planPrice}>
              $15 <span>/month</span>
            </div>
            <ul>
              <li>2 Servers</li>
              <li>Unlimited Users</li>
              <li>Unlimited Projects</li>
              <li>Unlimited Services</li>
              <li>Free SSL Certificates</li>
              <li>Priority Support</li>
            </ul>
            <Link className="button button--block button--primary" href="/docs">
              Get Started
            </Link>
          </div>
          <div className={styles.plan}>
            <h2 className={styles.planName}>Growth</h2>
            <div className={styles.planPrice}>
              $30 <span>/month</span>
            </div>
            <ul>
              <li>5 Servers</li>
              <li>Unlimited Users</li>
              <li>Unlimited Projects</li>
              <li>Unlimited Services</li>
              <li>Free SSL Certificates</li>
              <li>Priority Support</li>
            </ul>
            <Link className="button button--block button--primary" href="/docs">
              Get Started
            </Link>
          </div>
          <div className={styles.plan}>
            <h2 className={styles.planName}>Business</h2>
            <div className={styles.planPrice}>
              $60 <span>/month</span>
            </div>
            <ul>
              <li>15 Servers</li>
              <li>Unlimited Users</li>
              <li>Unlimited Projects</li>
              <li>Unlimited Services</li>
              <li>Free SSL Certificates</li>
              <li>Priority Support</li>
            </ul>
            <Link className="button button--block button--primary" href="/docs">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
