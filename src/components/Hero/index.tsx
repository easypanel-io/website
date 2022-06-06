import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

const playIcon = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_602_846)">
      <circle cx="32" cy="30" r="30" fill="#059669" />
    </g>
    <path
      d="M42.9687 30.2175L26.842 39.5283L26.842 20.9067L42.9687 30.2175Z"
      fill="white"
    />
    <defs>
      <filter
        id="filter0_d_602_846"
        x="0.325774"
        y="0"
        width="63.3485"
        height="63.3485"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1.67423" />
        <feGaussianBlur stdDeviation="0.837113" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_602_846"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_602_846"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default function Hero(): JSX.Element {
  return (
    <>
      <section className="tw-bg-black tw-py-20 tw-px-3 tw-text-center">
        <div className="tw-text-sm lg:tw-text-base tw-text-emerald-600 tw-uppercase tw-font-bold tw-tracking-wider tw-mb-4">
          Powered by Docker
        </div>
        <h1 className="tw-text-4xl lg:tw-text-7xl tw-tracking-tight tw-leading-tight">
          The Modern <br className="tw-hidden lg:tw-block" /> Server Control
          Panel{" "}
        </h1>
        <div className="tw-mb-16">
          <Link
            href="https://www.youtube.com/watch?v=XJPYeTeq7q0"
            target="_blank"
            className="tw-inline-flex tw-items-center"
          >
            {playIcon}{" "}
            <span className="tw-text-emerald-100 tw-ml-3">
              Watch Demo Video
            </span>
          </Link>
        </div>
        <input
          className="tw-bg-neutral-800 tw-p-4 tw-border-0 tw-rounded-lg tw-font-mono tw-font-bold tw-text-sm tw-text-center tw-w-[430px] tw-max-w-full"
          value="curl -sSL https://easypanel.io/install.sh | sh"
          onFocus={(e) => e.currentTarget.select()}
          onSelect={(e) => e.currentTarget.select()}
        />
        <div className="tw-text-neutral-400 tw-mt-2">
          Run this command on a fresh linux server
        </div>
      </section>
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
              Server control panel <br className="hidden--lg" /> based on
              Docker.
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
    </>
  );
}
