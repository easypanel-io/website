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
          <div className={clsx(styles.plan, styles.planDeveloper)}>
            <h2 className={styles.planName}>Developer Edition</h2>
            <div className={styles.planPrice}>
              $0 <span>/month</span>
            </div>
            <ul>
              <li>Free Forever</li>
              <li>Single User</li>
              <li>Unlimited Projects</li>
              <li>Unlimited Services</li>
              <li>Community Support</li>
            </ul>
            <Link className="button button--block button--primary" href="/docs">
              Get Started
            </Link>
          </div>
          <div className={clsx(styles.plan, styles.planBusiness)}>
            <h2 className={styles.planName}>Business Edition</h2>
            <div className={styles.planPrice}>
              $12 <span>/month</span>
            </div>
            <ul>
              <li>Paid per Server</li>
              <li>
                Multiple Users <span>soon</span>
              </li>
              <li>Unlimited Projects</li>
              <li>Unlimited Services</li>
              <li>Priority Support</li>
              <li>
                Resource Monitoring <span>soon</span>
              </li>
              <li>
                Role-Based Permissions <span>soon</span>
              </li>
              <li>
                Premium Templates <span>soon</span>
              </li>
              <li>Installation Support</li>
              <li>Migration Support</li>
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
