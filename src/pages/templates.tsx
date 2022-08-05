import Link from "@docusaurus/Link";
import templates from "@site/docs/05-templates/templates.json";
import Layout from "@theme/Layout";
import React from "react";

export default function Templates(): JSX.Element {
  return (
    <Layout
      title="Templates"
      description="Easypanel comes in two editons: developer edition and business edition. The developer edition will always be free."
    >
      <section className="tw-pt-16 tw-pb-32 tw-px-4 lg:tw-px-8">
        <div className="tw-text-center">
          <h2 className="tw-text-4xl lg:tw-text-5xl tw-mt-4 tw-font-extrabold">
            Easypanel Templates
          </h2>
          <p className="tw-text-xl tw-text-gray-400 tw-mb-4">
            1-Click Installers for Open-Source Applications
          </p>
        </div>
        <div className="tw-max-w-7xl tw-mx-auto tw-mt-16 tw-grid tw-grid-cols-2 lg:tw-grid-cols-6 tw-gap-4 lg:tw-gap-8">
          {templates.map((template) => (
            <Link
              key={template.slug}
              href={`/docs/templates/${template.slug}`}
              // className="tw-pt-10 tw-pb-6 tw-bg-white tw-rounded-lg tw-text-gray-500 hover:tw-text-gray-900 hover:tw-scale-110 tw-transition-all"
              className="tw-pt-10 tw-pb-6 tw-bg-gray-800 tw-rounded-xl tw-shadow-highlight tw-text-white/70 hover:tw-text-white hover:tw-scale-110 tw-transition-all"
            >
              {template.logo ? (
                <img
                  src={
                    require(`@site/docs/05-templates/${template.slug}/${template.logo}`)
                      .default
                  }
                  alt="Example banner"
                  className="tw-h-16 tw-w-16 tw-block tw-mx-auto tw-mb-4 tw-rounded-lg"
                />
              ) : (
                <div className="tw-h-16 tw-w-16 tw-block tw-mx-auto tw-mb-4 tw-rounded-full tw-bg-gray-600" />
              )}
              <div className="tw-text-center tw-text-lg tw-font-medium">
                {template.name}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
