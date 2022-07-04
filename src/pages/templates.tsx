import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import React from "react";

const templates = [
  { name: "ackee", label: "Ackee" },
  { name: "adminer", label: "Adminer" },
  { name: "appsmith", label: "Appsmith" },
  { name: "bookstack", label: "Bookstack" },
  { name: "directus", label: "Directus" },
  { name: "domainmod", label: "DomainMod" },
  { name: "flame", label: "Flame" },
  { name: "ghost", label: "Ghost" },
  { name: "gitea", label: "Gitea" },
  { name: "gotify", label: "Gotify" },
  { name: "heimdall", label: "Heimdall" },
  { name: "metube", label: "MeTube" },
  { name: "miniflux", label: "Miniflux" },
  { name: "n8n", label: "n8n" },
  { name: "nzbget", label: "Nzbget" },
  { name: "phpMyAdmin", label: "phpMyAdmin" },
  { name: "portainer", label: "Portainer" },
  { name: "psitransfer", label: "PsiTransfer" },
  { name: "statpingNg", label: "Statping-ng" },
  { name: "strapi", label: "Strapi" },
  { name: "wikijs", label: "Wiki.js" },
  { name: "wordpress", label: "Wordpress" },
];

export default function Templates(): JSX.Element {
  return (
    <Layout
      title="Templates"
      description="Easypanel comes in two editons: developer edition and business edition. The developer edition will always be free."
    >
      <section className="tw-pt-16 tw-pb-32 tw-px-4 lg:tw-px-8">
        <div className="tw-text-center">
          {/* <div className="tw-text-sm lg:tw-text-base tw-text-emerald-500 tw-uppercase tw-font-bold tw-tracking-wider">
            Templates
          </div> */}
          <h2 className="tw-text-4xl lg:tw-text-5xl tw-mt-4 tw-font-extrabold">
            Easypanel Templates
          </h2>
          <p className="tw-text-xl tw-text-gray-400 tw-mb-4">
            1-Click Installers for Open-Source Applications
          </p>
        </div>
        <div className="tw-max-w-7xl tw-mx-auto tw-mt-16 tw-grid tw-grid-cols-1 lg:tw-grid-cols-4 tw-gap-4 lg:tw-gap-8">
          {templates.map((template) => (
            <Link
              key={template.name}
              href={`/docs/templates/${template.name}`}
              className="tw-p-6 tw-text-white tw-bg-gray-800 tw-rounded-xl tw-shadow-highlight tw-text-center tw-text-lg tw-font-semibold"
            >
              {template.label}
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
