import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

export default function Newsletter(): JSX.Element {
  return (
    <section className={styles.root}>
      <div className={clsx("container", styles.wrapper)}>
        <div>
          <h2 className={styles.heading}>Subscribe for product updates</h2>
          <div className={styles.subheading}>
            By subscribing, you agree with Revue’s{" "}
            <a target="_blank" href="https://www.getrevue.co/terms">
              Terms of Service
            </a>{" "}
            and{" "}
            <a target="_blank" href="https://www.getrevue.co/privacy">
              Privacy Policy
            </a>
            .
          </div>
        </div>
        <form
          action="https://www.getrevue.co/profile/easypanel/add_subscriber"
          method="post"
          target="_blank"
          className={styles.form}
        >
          <input
            placeholder="Email address"
            type="email"
            name="member[email]"
            className={clsx(styles.input, "button")}
          />
          <input
            type="submit"
            value="Subscribe"
            name="member[subscribe]"
            className={clsx(styles.button, "button button--primary")}
          />
        </form>
      </div>
    </section>
  );
}
