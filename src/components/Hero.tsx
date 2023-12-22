import Link from "@docusaurus/Link";
import React from "react";

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
    // href: "https://marketplace.digitalocean.com/apps/easypanel",
    href: "https://marketplace.digitalocean.com/apps/easypanel?refcode=9b8aca9dc290&action=deploy",
    logo: "/partners/digitalocean.svg",
  },
  {
    href: "https://www.linode.com/marketplace/apps/easypanel/easypanel/",
    logo: "/partners/linode.svg",
  },
  {
    // href: "https://www.vultr.com/marketplace/apps/easypanel",
    href: "https://www.vultr.com/marketplace/apps/easypanel?ref=9104173",
    logo: "/partners/vultr.svg",
  },
  {
    href: "https://hostinger.com",
    logo: "/partners/hostinger.svg",
  },
];

export default function Hero(): JSX.Element {
  return (
    <section className="tw-py-24 lg:tw-py-32 tw-text-center">
      <div className="tw-text-sm lg:tw-text-base tw-text-gray-400 tw-uppercase tw-font-bold tw-tracking-wider tw-mb-4">
        Powered by Docker
      </div>
      <h1 className="tw-text-4xl lg:tw-text-7xl tw-tracking-tight tw-leading-none tw-font-extrabold tw-px-4">
        <span className="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-to-cyan-400 tw-from-emerald-600">
          Next Generation
        </span>
        <br /> Server Control Panel
      </h1>
      <p className="tw-text-lg lg:tw-text-xl tw-font-normal tw-text-gray-400 tw-max-w-2xl tw-mx-auto tw-px-4">
        {/* Deploy applications, manage databases, and provision SSL certificates,
          from an easy-to-use interface. */}
        Use an intuitive interface to deploy applications, manage databases, and
        provision SSL certificates.
      </p>
      <div className="tw-mt-8 tw-flex tw-justify-center">
        <Link
          href="https://www.youtube.com/watch?v=XJPYeTeq7q0"
          target="_blank"
          className="tw-flex tw-items-center tw-justify-center tw-h-16 tw-w-16 hover:tw-scale-105 tw-rounded-full tw-border-2 tw-border-solid tw-border-emerald-500 tw-transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            className="tw-fill-white"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M8 5v14l11-7z" />
          </svg>
          {/* <PlayButtonSVG className="tw-h-16 tw-w-16 tw-block" /> */}
        </Link>
      </div>
      <div className="tw-px-4 tw-mt-8">
        <input
          className="tw-bg-gray-800 tw-text-white tw-p-4 tw-border-0 tw-rounded-lg tw-font-mono tw-font-bold tw-text-base tw-text-center tw-w-[430px] tw-max-w-full tw-cursor-pointer tw-shadow-highlight"
          defaultValue="curl -sSL https://get.easypanel.io | sh"
          onFocus={(e) => e.currentTarget.select()}
          onSelect={(e) => e.currentTarget.select()}
          readOnly
        />
        <div className="tw-text-gray-400 tw-mt-2 tw-text-base">
          Run this command on a fresh linux server with at least 2 GB RAM
        </div>
      </div>
      {/* <div className="tw-mt-20 tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-gap-6 tw-max-w-4xl tw-mx-auto"> */}
      <div className="tw-mt-16 tw-flex tw-overflow-x-auto no-scrollbar tw-p-10 tw-justify-between tw-gap-10 tw-max-w-6xl tw-mx-auto">
        {partners.map((partner, index) => (
          <Link
            key={index}
            href={partner.href}
            target="_blank"
            className="tw-opacity-30 hover:tw-opacity-100 tw-transition"
          >
            <img
              src={partner.logo}
              className="tw-h-8 lg:tw-h-10 tw-inline-block tw-max-w-none"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
