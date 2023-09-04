import Link from "@docusaurus/Link";
import templates from "@site/docs/05-templates/templates.json";
import Layout from "@theme/Layout";
import Fuse from "fuse.js";
import React, { useMemo, useState } from "react";

export default function Templates(): JSX.Element {
  const [query, setQuery] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse(templates, {
        keys: ["name", "description", "tags"],
        threshold: 0.2,
        ignoreLocation: false,
      }),
    []
  );

  const result = useMemo(
    () => (query ? fuse.search(query).map((r) => r.item) : templates),
    [query, fuse]
  );

  return (
    <Layout
      title="Templates"
      description="Easypanel provides templates for applications you know and love."
    >
      <section className="tw-pt-16 tw-pb-32 tw-px-4 lg:tw-px-8">
        <div className="tw-text-center">
          <h2 className="tw-text-4xl lg:tw-text-5xl tw-mt-4 tw-font-extrabold">
            Easypanel Templates
          </h2>
          <p className="tw-text-xl tw-text-gray-400 tw-mb-4">
            1-Click Installers for Your Favorite Applications
          </p>
        </div>
        <div className="tw-flex tw-justify-center tw-items-center tw-mb-4">
          <input
            className="tw-py-4 tw-px-6 tw-rounded-xl tw-border-0 tw-text-lg tw-bg-transparent focus:tw-bg-gray-300/10 hover:tw-bg-gray-300/10 tw-w-full md:tw-w-[700px] tw-mt-10 tw-ring-1 tw-ring-inset tw-ring-gray-700 focus:tw-ring-2 focus:tw-ring-emerald-700 tw-outline-none tw-transition "
            placeholder="Search..."
            value={query}
            autoFocus
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="tw-max-w-7xl tw-mx-auto tw-mt-16 tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4 lg:tw-gap-8">
          {result.map((template) => (
            <Link
              key={template.slug}
              href={`/docs/templates/${template.slug}`}
              className="tw-p-6 tw-bg-gray-800 tw-rounded-lg tw-shadow-highlight hover:tw-scale-105 tw-transition-all"
            >
              {template.logo ? (
                <img
                  src={
                    require(`@site/docs/05-templates/${template.slug}/assets/${template.logo}`)
                      .default
                  }
                  alt="Example banner"
                  className="tw-h-12 tw-w-12 tw-block tw-rounded-lg"
                />
              ) : (
                <div className="tw-h-12 tw-w-12 tw-block tw-rounded-full tw-bg-gray-600" />
              )}
              <div className="tw-mt-4 tw-text-lg tw-font-medium tw-text-white">
                {template.name}
              </div>
              <div className="tw-mt-2 tw-text-sm tw-line-clamp-3 tw-text-white/75">
                {template.description}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
