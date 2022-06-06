import Link from "@docusaurus/Link";
import PlayButtonSVG from "@site/static/img/play-button.svg";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

type Partner = {
  href: string;
  logo: string;
};

const partners: Partner[] = [
  {
    href: "https://aws.amazon.com/marketplace/pp/prodview-nkiq4lewjosjc",
    logo: "/partners/aws.svg",
  },
  {
    href: "https://marketplace.digitalocean.com/apps/easypanel",
    logo: "/partners/digitalocean.svg",
  },
  {
    href: "https://www.linode.com/marketplace/apps/easypanel/easypanel/",
    logo: "/partners/linode.svg",
  },
  {
    href: "https://www.vultr.com/marketplace/apps/easypanel",
    logo: "/partners/vultr.svg",
  },
];

export default function Hero(): JSX.Element {
  return (
    <>
      <section className="tw-bg-black tw-py-24 tw-px-3 tw-text-center">
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
            <PlayButtonSVG className="tw-h-8" />
            <span className="tw-text-emerald-100 tw-ml-3">
              Watch Demo Video
            </span>
          </Link>
        </div>
        <input
          className="tw-bg-neutral-800 tw-p-4 tw-border-0 tw-rounded-lg tw-font-mono tw-font-bold tw-text-sm tw-text-center tw-w-[430px] tw-max-w-full tw-cursor-pointer"
          defaultValue="curl -sSL https://easypanel.io/install.sh | sh"
          onFocus={(e) => e.currentTarget.select()}
          onSelect={(e) => e.currentTarget.select()}
          // onChange={() =>{}}
          readOnly
        />
        <div className="tw-text-neutral-400 tw-mt-2">
          Run this command on a fresh linux server
        </div>
        {/* <div className="tw-mt-20 tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-gap-6 tw-max-w-4xl tw-mx-auto"> */}
        <div className="tw-mt-20 tw-flex tw-overflow-x-auto tw-p-4 tw-justify-between tw-gap-10 tw-max-w-4xl tw-mx-auto">
          {partners.map((partner, index) => (
            <Link
              key={index}
              href={partner.href}
              target="_blank"
              className="tw-opacity-30 hover:tw-opacity-100 tw-transition"
            >
              <img
                src={partner.logo}
                className="tw-h-7 tw-max-w-none lg:tw-h-10 tw-inline-block"
              />
            </Link>
          ))}
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
